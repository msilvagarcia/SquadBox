'use strict'

function main($)
{
    var options = {
        content: '<div id="default-squadbox-modal"><h2>SquadBox</h2><p>This is a default modal example</p></div><div class="overlay"></div>'
    }
    var $defaultSquadBox = $('#default-squadbox')
    
    $defaultSquadBox.squadbox(options)
    $defaultSquadBox.bind('click', defaultSquadBoxButtonClick)

    function defaultSquadBoxButtonClick(evt)
    {
        var $target = $(evt.target)
        $target.squadbox('show')
        $('.overlay').bind('click', function() {
            defaultSquadBoxHide($target)
        })
    }

    function defaultSquadBoxHide($el)
    {
        $el.squadbox('hide')
    }
}
