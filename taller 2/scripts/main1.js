console.log('Iniciando aplicación');
import { dataSeries } from './dataSeries.js'; // import the data from dataSeries.ts
var seriesTbody = document.getElementById('series');
var avgSeasonsElm = document.getElementById("avg-seasons");
var seriesCardDiv = document.getElementById('card-series');
var nameButtons = document.getElementsByClassName('btn-serie-name');
avgSeasonsElm.innerHTML = "".concat(getAvgSeasons(dataSeries));
console.log(avgSeasonsElm);
renderSeriesInTable(dataSeries);
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.pos, "</td>\n                                <td><button class='btn-serie-name'>").concat(serie.name, "</button></td>\n                                <td>").concat(serie.channel, "</td>\n                                <td>").concat(serie.seasons, "</td>");
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
function renderSerieCard(serie) {
    console.log('Desplegando tarjeta');
    var divElement = document.createElement("div");
    divElement.innerHTML = "<img class='card-img-top' src=\"".concat(serie.image, "\" alt='image-serie-").concat(serie.name, "'>\n                                <div class='card-body'>\n                                    <h5 class='card-title'>").concat(serie.name, "</h5>\n                                    <p class='card-text'>").concat(serie.description, "</p>\n                                    <a href=\"").concat(serie.link, "\">").concat(serie.link, "</a>\n                                </div>");
    seriesCardDiv.appendChild(divElement);
}
var _loop_1 = function (i) {
    nameButtons[i].addEventListener("click", function () {
        clearSerieCard();
        renderSerieCard(dataSeries[i]);
    });
};
for (var i = 0; i < nameButtons.length; i++) {
    _loop_1(i);
}
function clearSerieCard() {
    while (seriesCardDiv.hasChildNodes()) {
        if (seriesCardDiv.firstChild != null) {
            seriesCardDiv.removeChild(seriesCardDiv.firstChild);
        }
    }
}
