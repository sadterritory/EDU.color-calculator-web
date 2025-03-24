// Ожидаем полной загрузки DOM-дерева и только после этого выполняем действия
$(document).ready(function () {
    document.oncontextmenu = function () {
        return false;
    }; //отключить выпадающее меню
});

$(document).mousedown(function (e) {
    if (e.button === 2) { //2  - правый клик
        var tempColor = $('.temp').css('background-color');
        $('.color_change').css('background-color', tempColor);
    }
    return true;
});

function setDefault() {
    $('.color_change').css('background-color', "white");
    $('body').css('color', "black");
    document.getElementById("RGB").value = "";
    document.getElementById("hexadecimal").value = "";
}

$(document).ready(function () {
    $(".table_td").click(function () {
        var tempColor = $('.temp').css('background-color');
        $('body').css('color', tempColor);
    });
});

function changeColor() {
    var tempColor = $('.temp').css('background-color');
    $('.color_selector').css('background-color', tempColor);
    $('#RGB').val(tempColor);
    var matches = tempColor.match(/\d+/g);
    var hexColor = rgbToHex(parseInt(matches[0]), parseInt(matches[1]), parseInt(matches[2]));
    $('#hexadecimal').val(hexColor);
}

function space_check(){
    let value = document.getElementById("redInput").value;
    if(!value){
        document.getElementById("redInput").value = 0;
    }
    value = document.getElementById("greenInput").value;
    if(!value){
        document.getElementById("greenInput").value = 0;
    }
    value = document.getElementById("blueInput").value;
    if(!value){
        document.getElementById("blueInput").value = 0;
    }
}

function rgbToHex(r, g, b) {
    // Конвертируем отдельные значения красного, зеленого и синего в шестнадцатеричный формат и объединяем их
    var red = r.toString(16);
    var green = g.toString(16);
    var blue = b.toString(16);

    // Добавляем нули слева, если значение меньше 0x10
    if (red.length === 1) red = "0" + red;
    if (green.length === 1) green = "0" + green;
    if (blue.length === 1) blue = "0" + blue;

    return "#" + red + green + blue;
}

$(document).ready(() => {
    const colors = document.querySelectorAll('.rgb input');
    if (colors) {
        colors.forEach((rgb) => {
                rgb.oninput = function () {
                    if (rgb.value > 255) {
                        rgb.value = 255;
                    }
                    const red = document.getElementById("redInput").value;
                    const green = document.getElementById("greenInput").value;
                    const blue = document.getElementById("blueInput").value;
                    const color = "rgb(" + red + "," + green + "," + blue + ")";
                    document.getElementById("RGB").value = color;
                    var matches = document.getElementById("RGB").value.match(/\d+/g);
                    var hexColor = rgbToHex(parseInt(matches[0]), parseInt(matches[1]), parseInt(matches[2]));
                    $('#hexadecimal').val(hexColor);
                    $('.color_selector').css('background-color', color);
                }
            }
        )
    }
})

