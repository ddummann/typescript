console.log('Iniciando aplicación');
import { dataSeries } from './dataSeries.js'; // import the data from dataSeries.ts
var seriesTbody = document.getElementById('series');
var avgSeasonsElm = document.getElementById("avg-seasons");
avgSeasonsElm.innerHTML = "".concat(getAvgSeasons(dataSeries));
console.log(avgSeasonsElm);
renderSeriesInTable(dataSeries);
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.pos, "</td>\n                               <td>").concat(serie.name, "</td>\n                               <td>").concat(serie.channel, "</td>\n                               <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
/*
    funcion para calcular el promedio de los temporadas
    @param series: array de series
    @returns promedio de los temporadas

*/
function getAvgSeasons(series) {
    var sum = 0;
    series.forEach(function (serie) {
        sum += serie.seasons;
    });
    return sum / series.length;
}
