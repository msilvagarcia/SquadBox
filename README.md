# SquadBox

A lean modal box

## Usage

### Basic

You should assign an element to the modal. Usually, you'll attach it to the element firing the modal.

Then, call the ```'show'``` method for the modal. Below is an overview on how to show the modal.

```JavaScript
var $el = $('<div />')
var options = {
    class: 'my-class',
    content: '<div class="modal">Put your stuff here!</div>',
    id: 'my-id'
}

$el.squadbox(options)
$el.click(function () {
    $el.squadbox('show')
})
```

That's it! Customize it the way you like with CSS and you're done. Here's the full list of options:
- ```target```: the selector for the container of the modal. Defaults to ```'body'```
- ```id```: a custom id attribute for the modal, so you can layout easier. Defaults to ```'squadbox'```
- ```class```: a custom class for the modal, so you can layout easier. Defaults to ```'squadbox'```
- ```content```: the content to show. This is a required attribute.
- ```showCss```: an object with the custom CSS to set when calling the 'show' method. Defaults to ```{opacity: 1}```
- ```hideCss```: an object with the custom CSS to set when calling the 'hide' method. Defaults to ```{opacity: 1}```

### Callbacks

If you want to add specific behaviors on some steps of the modal lifecycle, you can attach functions to some events. Like this:

```JavaScript
function alertCallback()
{
    alert(this.attr('id'))
}

$el.squadbox(options)
$el.squadbox('show', alertCallback)

$el.click(function () {
    $el.squadbox('show')
})
```

This will pop an alert every time you ```show``` the modal. Here's the full list of handles:
- ```create```: the moment the modal is created
- ```show```: every moment the modal is shown
- ```hide```: every moment the modal is hidden
