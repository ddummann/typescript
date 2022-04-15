console.log('Iniciando aplicación');
import { dataSeries } from './dataSeries'; // import the data from dataSeries.ts
var seriesTbody = document.getElementById('series');
var avgSeasonsElm = document.getElementById("avg-seasons");
console.log('Desplegando funcion series');
renderSeriesInTable(dataSeries);
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.pos, "</td>\n                               <td>").concat(serie.name, "</td>\n                               <td>").concat(serie.channel, "</td>\n                               <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
