console.log('Iniciando aplicación');

import{ dataSeries } from './dataSeries';   // import the data from dataSeries.ts
import { Serie } from './Serie.js';  //import the class Serie from Serie.js

let seriesTbody: HTMLElement = document.getElementById('series')!;
const avgSeasonsElm: HTMLElement = document.getElementById("avg-seasons")!;

console.log('Desplegando funcion series');
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