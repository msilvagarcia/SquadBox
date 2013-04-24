'use strict'

var $ = jQuery

test('Existence', function() {
    ok($(document).squadbox, 'Library is loaded')
})

test('Initialization', function () {
    var $el = $('<div />')
    var options = {
        content: '<p id="test-content">test content</p>',
        target: '#qunit-fixture'
    }

    ok($el.squadbox(options), 'SquadBox initialization')

    equal($el.squadbox('options').content, options.content, 'Defines some content')
})

test('Showing', function () {
    var $el = $('<div />')
    var options = {
        content: '<p id="test-content">test content</p>',
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
    ok($('#test-content').length, 'Creates the modal element')
})

test('Hiding', function () {
    var $el = $('<div />')
    var options = {
        content: '<p id="test-content">test content</p>',
        showCss: {opacity: 1},
        hideCss: {opacity: 0},
        target: '#qunit-fixture'
    }

    $el.squadbox(options)

    $el.squadbox('show')
    $el.squadbox('hide')
    equal($('#test-content').css('opacity'), options.hideCss.opacity, 'Sets the CSS options defined to the hide method')
})

test('Callbacks', function () {
    expect(3)
    function callback()
    {
        ok(true)
    }

    var $el = $('<div />')
    var options = {
        content: '<p id="test-content">test content</p>',
        showCss: {opacity: 1},
        hideCss: {opacity: 0},
        target: '#qunit-fixture'
    }

    $el.squadbox(options)

    $el.squadbox('create', callback)
    $el.squadbox('show', callback)
    $el.squadbox('hide', callback)

    $el.squadbox('show')
    $el.squadbox('hide')
})
