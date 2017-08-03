/*Очистка полей формы, открытие модального окна с формой обратной связи*/
$(document).ready(function () {
    //при нажатию на любую кнопку, имеющую идентификатор
    $("#modalButton").click(function () {
        $("input, textarea").val(""); //очистить содержимое полей формы
        //открыть модальное окно с id="modalForm"
        $("#modalForm").modal('show');

    });
});

/*показать сообщение при отправке формы*/
function showMessage() {
    $("#callBackForm").submit(function () {
        $("#modalForm").modal("hide") //закрыть модальное окно с id="myModal"
        $("#modalMessage").modal('show'); //открыть модальное окно с сообщением
    })
}

/*срабатывание функции при клике по кнопке и после проверки формы на заполненность всех обязательных полей*/
$("#formButton").click (function checkInput() {
    $("input").each (function () {
        if ($(this).val() != '') {
            showMessage();
        } else {
            return false;
        }
    })
});

/*хак для бутстраповских отступов*/
$('#modalMessage').on('hidden.bs.modal', function (event) {
    $("body").css('padding-right', '0');
});

/*слайдеры*/
$(document).ready(function () {
    $(function () {
        for (var i = 1; i <= 4; i++) {
            $('.menu-' + i).click(
                (function (catchI) {
                    return function () {
                        var idName = $(this).attr('id');
                        if ($(this).hasClass('wrapper-sort-down-rotate')) {
                            $(this).removeClass('wrapper-sort-down-rotate');
                            $('.slider-' + catchI).removeClass('opened');
                            $(this).removeClass('opened');
                        } else {
                            $(this).addClass('wrapper-sort-down-rotate');
                            $('.slider-' + catchI).addClass('opened');
                            $(this).addClass('opened');
                        }
                    };
                })(i)
            );
        }
    });
})