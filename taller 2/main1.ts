console.log('Iniciando aplicación');


import{ dataSeries } from './dataSeries.js';   // import the data from dataSeries.ts
import { Serie } from './Serie.js';  //import the class Serie from Serie.js

let seriesTbody: HTMLElement = document.getElementById('series')!;
const avgSeasonsElm: HTMLElement = document.getElementById("avg-seasons")!;
const seriesCardDiv: HTMLElement = document.getElementById('card-series')!;
let nameButtons: HTMLCollectionOf<Element> = document.getElementsByClassName('btn-serie-name')!;

avgSeasonsElm.innerHTML = `${getAvgSeasons(dataSeries)}`
console.log(avgSeasonsElm);
renderSeriesInTable(dataSeries);

function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML =   `<td>${serie.pos}</td>
                                <td><button class='btn-serie-name'>${serie.name}</button></td>
                                <td>${serie.channel}</td>
                                <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

/*
    funcion para calcular el promedio de los temporadas
    @param series: array de series
    @returns promedio de los temporadas

*/

function getAvgSeasons(series: Serie[]): number {
    let sum: number = 0;
    series.forEach((serie) => {
        sum += serie.seasons;
    });
    return sum / series.length;
}

function renderSerieCard(serie: Serie): void {
    console.log('Desplegando tarjeta');
    let divElement = document.createElement("div");
        divElement.innerHTML = `<img class='card-img-top' src="${serie.image}" alt='image-serie-${serie.name}'>
                                <div class='card-body'>
                                    <h5 class='card-title'>${serie.name}</h5>
                                    <p class='card-text'>${serie.description}</p>
                                    <a href="${serie.link}">${serie.link}</a>
                                </div>`;
    seriesCardDiv.appendChild(divElement);
}

for (let i = 0; i < nameButtons.length; i++) {
    nameButtons[i].addEventListener("click", () => {
        clearSerieCard();
        renderSerieCard(dataSeries[i]);
    });
}

function clearSerieCard() {
    while (seriesCardDiv.hasChildNodes()) {
        if (seriesCardDiv.firstChild != null) {
            seriesCardDiv.removeChild(seriesCardDiv.firstChild);
        }
    }
}


