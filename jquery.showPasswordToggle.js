/**
 * Licensed under the MIT license by Alexey Karunos (https://github.com/alkaruno)
 */
;
(function ($) {

    $.fn.showPasswordToggle = function (fieldsSelector, options) {

        var opts = $.extend({}, $.fn.showPasswordToggle.defaults, options);

        return this.each(function () {
            var $this = $(this);
            $this.click(function () {
                var $fields = $(fieldsSelector);
                var newType = $($fields[0]).attr('type') == 'text' ? 'password' : 'text';
                $.each($fields, function () {
                    var field = $(this);
                    var newField = field.clone();
                    newField.attr('id', field.attr('id')).attr('type', newType);
                    field.replaceWith(newField);
                });
                $this.html(newType == 'text' ? opts.hideText : opts.showText);
                return false;
            });
        });
    };

    $.fn.showPasswordToggle.defaults = {
        showText: 'Show password',
        hideText: 'Hide password'
    };

})(jQuery);