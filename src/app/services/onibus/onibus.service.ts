import {EventEmitter, Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ObstacleFactory } from '../../factories/obstacles/obstacles.factory';

@Injectable()
export class OnibusService {

    private baseUrl: string = 'http://api.olhovivo.sptrans.com.br/v2.1';

    //POST
    private authenticateUrl: string = "/Login/Autenticar?token="; ///Login/Autenticar?token={token}   [string]
    private token:string = "eed2f0a08d1982d4facdad7ec54cd0d46ad0e00664e9b9fd72b74a9187d255c0";

    //GET
    private buscaLinhaUrl: string = "/Linha/Buscar?termosBusca=";   // /Linha/Buscar?termosBusca={termosBusca}  [string]
    private buscaLinhaSentidoUrl: string = ""; // /Linha/BuscarLinhaSentido?termosBusca={codigoLinha}&sentido={sentido} [string] [byte]
    private buscaParadaUrl: string = ""; //  /Parada/Buscar?termosBusca={termosBusca}   [string]
    private buscaParadasPorLinhaUrl:string = '/Parada/BuscarParadasPorLinha?codigoLinha=';
    private buscaParadasPorCorredorUrl: string = ""; // /Parada/BuscarParadasPorCorredor?codigoCorredor={codigoCorredor} [int]

    private previsaoChegadaDaLinhaNoPontoUrl: string = ""; // /Previsao?codigoParada={codigoParada}&codigoLinha={codigoLinha} [int] [int]
    private previsaoChegadaDaLinhaUrl: string = ""; // /Previsao/Linha?codigoLinha={codigoLinha} [int]
    private previsaoChegadaNoPontoUrl: string = "" // /Previsao/Parada?codigoParada={codigoParada}

    //GET ALL (LIST)
    private listaCorredoresUrl: string = ""; //  /Corredor
    private listaEmpresasUrl: string = ""; // /Empresa
    private listPosicaoVeiculosUrl: string = ""; // /Posicao
    private listaPosicaoVeiculosNaLinhaUrl: string = ""; // /Posicao/Linha?codigoLinha={codigoLinha} [int]



    constructor(
        private http: Http,
        private obstacleFactory: ObstacleFactory
    ) {}

    authenticate(): Observable<any> {
        
        return this.http
        
            //.post(`${this.baseUrl}${this.authenticateUrl}${this.token}`, {headers: this.getHeaders()})
            .post('http://api.olhovivo.sptrans.com.br/v2.1/Login/Autenticar?token=eed2f0a08d1982d4facdad7ec54cd0d46ad0e00664e9b9fd72b74a9187d255c0', {headers: this.getHeaders()})
            .map(data => data.json())
            .catch(err => err);
    }

    getBusLine(line: string) {
        console.log('Aqui');
        return this.http.get('http://api.olhovivo.sptrans.com.br/v2.1/Linha/Buscar?termosBusca=' + line)
            .map(res => res.json())
            .catch(err => err);
    }

    getStopByLine(code: any) {
        return this.http.get('http://api.olhovivo.sptrans.com.br/v2.1/Posicao/Linha?codigoLinha=' + code)
            .map(res => res.json())
            .catch(err => err);
    }

    getBusByName (name: string) {
        name = encodeURIComponent(name.trim());
        this.authenticate();

    }

    private getHeaders(): Headers{
        // I included these headers because otherwise FireFox
        // will request text/html instead of application/json
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
      }

    }
