/**
 * Licensed under the MIT license by Alexey Karunos (https://github.com/alkaruno)
 *
 * Usage: $('button[type="submit"]').disableIfEmpty('#subject,#content');
 */
;
(function ($) {

    $.fn.disableIfEmpty = function (elementsToObserve) {
        var elementToDisable, disableElement;
        return this.each(function () {
            elementToDisable = $(this);
            disableElement = function () {
                var hasEmptyField = false;
                $(elementsToObserve).each(function () {
                    if ($(this).val().trim() == '') {
                        hasEmptyField = true;
                        return false;
                    }
                    return true;
                });
                elementToDisable.prop('disabled', hasEmptyField);
            };
            disableElement();
            $(elementsToObserve).on('input', disableElement);
        });
    };

})(jQuery);