$(function () {

    var $dropdownItem = $('.dropdown-item')

    $dropdownItem.on('click', function () {
        console.log($(this).attr('data-id'))
    })


})