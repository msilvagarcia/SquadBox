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
    equal($el.squadbox('options'), options, 'Saves the user\'s options')
})
