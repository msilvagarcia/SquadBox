'use strict'

var methods = {
    init: function (options) {
        var options = $.extend({
            callback: {
                create: [],
                hide: [],
                show: []
            },
            content: undefined,
            hideCss: {opacity: 0},
            showCss: {opacity: 1},
            target: 'body'
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
    create: function (callback) {
        var options = this.data('squadbox-options')

        if (options && callback) {
            options.callback.create.push(callback)
            this.data('squadbox-options', options)
            return this
        }

        if ( ! options || ! options.content)
            $.error('There should be a content configuration defined')

        var $target = $(options.target)
        $target.css(options.hideCss)
        var $modal = $(options.content)

        $target.append($modal)

        options.modal = $modal
        this.data('squadbox-options', options)

        if (options.callback.create.length > 0) {
            var t = this
            $.each(options.callback.create, function (index, value) {
                return value.apply(t, [index])
            })
        }
    },
    show: function (callback) {
        var options = this.data('squadbox-options')

        if (options && callback) {
            options.callback.show.push(callback)
            this.data('squadbox-options', options)
            return this
        }

        if ( ! options.modal)
            methods.create.apply(this, [])

        options.modal.css(options.showCss)

        if (options.callback.show.length > 0) {
            var t = this
            $.each(options.callback.show, function (index, value) {
                return value.apply(t, [index])
            })
        }
    },
    hide: function (callback) {
        var options = this.data('squadbox-options')

        if (options && callback) {
            options.callback.hide.push(callback)
            this.data('squadbox-options', options)
            return this
        }

        options.modal.css(options.hideCss)

        if (options.callback.hide.length > 0) {
            var t = this
            $.each(options.callback.hide, function (index, value) {
                return value.apply(t, [index])
            })
        }
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
