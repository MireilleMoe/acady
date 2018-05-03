/*
 *функция для валидации и инвалидации полей ввода
 * */

function makeDisable() {
    var address = document.getElementById("address");
    var number = document.getElementById("number");
    var page_url = document.getElementById("page_url");
    var free = document.getElementById("free");
    var temporal = document.getElementById("temporal");
    var busy = document.getElementById("busy");
    var mapCoords = document.getElementById("mapCoords");

    address.disabled = true;
    number.disabled = true;
    page_url.disabled = true;
    free.disabled = true;
    temporal.disabled = true;
    busy.disabled = true;
    mapCoords.disabled = true;

}

