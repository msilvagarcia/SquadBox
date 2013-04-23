'use strict'

var $ = jQuery

test('Existence', function() {
    ok($(document).squadbox, 'Library is loaded')
})

test('Initialization', function () {
    var $el = $('<div />')
    var options = {
        id: 'test-id',
        class: 'test-class',
        content: '<p id="test-content">test content</p>'
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
        id: 'test-id',
        class: 'test-class',
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
    ok($('#' + options.id).length, 'Creates the modal element')
})
