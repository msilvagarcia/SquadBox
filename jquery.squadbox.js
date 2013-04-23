'use strict'

var methods = {
    init: function (options) {
        return this.each(function () {
            var $this = $(this)
            $this.data('options', options)
        })
    },
    options: function () {
        return this.data('options')
    }
}

jQuery.fn.squadbox = function (method, options) {
    if (typeof method != 'string') {
        var options = method
        return methods.init.apply(this, [options])
    }

    if (methods[method])
        return methods[method].apply(this, [options])

    return this
}
