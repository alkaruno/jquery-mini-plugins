/**
 * Licensed under the MIT license by Alexey Karunos (https://github.com/alkaruno)
 */
;
(function ($) {

    $.fn.disableSelection = function () {
        return this.bind(($.support.selectstart ? 'selectstart' : 'mousedown') + '.disableSelection',
            function (e) {
                e.preventDefault();
            });
    };

    $.fn.enableSelection = function () {
        return this.unbind('.disableSelection');
    };

})(jQuery);