'use strict'

var $ = jQuery

test('Existence', function() {
    ok($(document).squadbox, 'Library is loaded')
})

test('Initialization', function () {
    var $el = $('<div />')
    var options = {
        class: 'test-class',
        content: '<p id="test-content">test content</p>',
        id: 'test-id',
        target: '#qunit-fixture'
    }

    ok($el.squadbox(), 'SquadBox initialization')

    $el.squadbox(options)
    equal($el.squadbox('options').id, options.id, 'Defines an id')
    equal($el.squadbox('options').class, options.class, 'Defines a class')
    equal($el.squadbox('options').content, options.content, 'Defines some content')
})

test('Showing', function () {
    var $el = $('<div />')
    var options = {
        class: 'test-class',
        content: '<p id="test-content">test content</p>',
        id: 'test-id',
        target: '#qunit-fixture'
    }

    $el.squadbox()
    throws(
        function () { $el.squadbox('show') },
        Error,
        'Throws an error on incomplete configuration'
    )

    $el.squadbox(options)
    $el.squadbox('show')
    ok($('#' + options.id).length, 'Creates the modal element')
})

test('Hiding', function () {
    var $el = $('<div />')
    var options = {
        class: 'test-class',
        content: '<p id="test-content">test content</p>',
        id: 'test-id',
        showCss: {opacity: 1},
        hideCss: {opacity: 0},
        target: '#qunit-fixture'
    }

    $el.squadbox(options)
    $el.squadbox('show')
    $el.squadbox('hide')
    equal($('#' + options.id).css('opacity'), options.hideCss.opacity, 'Sets the CSS options defined to the hide method')
})
