'use strict'

var methods = {
    init: function (options) {
        var options = $.extend({
            target: 'body',
            id: 'squadbox',
            class: 'squadbox',
            content: undefined,
            showCss: {opacity: 1},
            hideCss: {opacity: 0}
        }, options)
        
        this.data('squadbox-options', options)

        return this
    },
    options: function (options) {
        if (typeof options == 'undefined')
            return this.data('squadbox-options')

        var oldOptions = this.data('squadbox-options')
        var newOptions = $.extend(oldOptions, options)
        this.data('squadbox-options', newOptions)
    },
    show: function () {
        var options = this.data('squadbox-options')
        if ( ! options || ! options.content)
            throw new Error('There should be a content configuration defined')

        var $target = $(options.target)
        var $modal

        if ( ! options.modal) {
            var $modal = $(options.content)
            $modal.attr('id', options.id)
            $modal.addClass(options.class)

            $target.append($modal)

            options.modal = $modal
            this.data('squadbox-options', options)
        }

        options.modal.css(options.showCss)
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
