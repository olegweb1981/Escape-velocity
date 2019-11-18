function showMenu() {

    if (document.body.classList.contains('is-menu-visible'))
        document.body.classList.remove('is-menu-visible');
    else
        document.body.classList.add('is-menu-visible');
}



$('#nav > ul').dropotron({
    mode: 'fade',
    noOpenerFade: true,
    alignment: 'center',
    detach: false
});