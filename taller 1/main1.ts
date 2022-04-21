console.log('Iniciando aplicación');


import{ dataSeries } from './dataSeries.js';   // import the data from dataSeries.ts
import { Serie } from './Serie.js';  //import the class Serie from Serie.js

let seriesTbody: HTMLElement = document.getElementById('series')!;
const avgSeasonsElm: HTMLElement = document.getElementById("avg-seasons")!;

avgSeasonsElm.innerHTML = `${getAvgSeasons(dataSeries)}`
console.log(avgSeasonsElm);
renderSeriesInTable(dataSeries);

function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.pos}</td>
                               <td>${serie.name}</td>
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





