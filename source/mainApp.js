var main = function() {

    /* Navegacion */

    $('#homeLink').click(function () {
        var currentSlide = $('.active-slide');
        var newSlide = $('#homeSlider');

        currentSlide.fadeOut(600).removeClass("active-slide");
        newSlide.fadeIn(600).addClass("active-slide");
    });

    $('#habitacionesLink').click(function () {
        var currentSlide = $('.active-slide');
        var newSlide = $('#habitacionesSlider');

        currentSlide.fadeOut(600).removeClass("active-slide");
        newSlide.fadeIn(600).addClass("active-slide");

        var currentImage = $('.active-image');
        var nextImage = $('#habitacionStandardImagen');

        currentImage.slideDown(300).fadeOut(100).removeClass('active-image');
        nextImage.slideUp( 300 ).delay( 100 ).fadeIn( 400 ).addClass('active-image');
    });

    $('#sumLink').click(function () {
        var currentSlide = $('.active-slide');
        var newSlide = $('#sumSlider');

        currentSlide.fadeOut(600).removeClass("active-slide");
        newSlide.fadeIn(600).addClass("active-slide");

        var currentImage = $('.active-image');
        var nextImage = $('#autorioSantaMariaImagen');

        currentImage.slideDown(300).fadeOut(100).removeClass('active-image');
        nextImage.slideUp( 300 ).delay( 100 ).fadeIn( 400 ).addClass('active-image');
    });

    $('#ubicacionLink').click(function () {
        var currentSlide = $('.active-slide');
        var newSlide = $('#ubicacionSlider');

        currentSlide.fadeOut(600).removeClass("active-slide");
        newSlide.fadeIn(600).addClass("active-slide");
    });

    $('#contactoLink').click(function () {
        var currentSlide = $('.active-slide');
        var newSlide = $('#contactoSlider');

        currentSlide.fadeOut(600).removeClass("active-slide");
        newSlide.fadeIn(600).addClass("active-slide");
    });

    $('#clientesLink').click(function () {
        var currentSlide = $('.active-slide');
        var newSlide = $('#clientesSlider');

        currentSlide.fadeOut(600).removeClass("active-slide");
        newSlide.fadeIn(600).addClass("active-slide");
    });

    $('#serviciosLink').click(function () {
        var currentSlide = $('.active-slide');
        var newSlide = $('#serviciosSlider');

        currentSlide.fadeOut(600).removeClass("active-slide");
        newSlide.fadeIn(600).addClass("active-slide");

        newSlide.trigger("isShown")
    });

    /* Servicios */

    $('#serviciosSlider').bind('isShown', isShown);

    function isShown() {
        var currentImage;
        var nextImage;

        currentImage = $('.servicio-active-image');
        nextImage = currentImage.next();

        if (nextImage.length === 0) {
            nextImage = $('.servicio-image').first();
        }

        currentImage.fadeOut(100).removeClass('servicio-active-image');
        nextImage.slideUp(300).fadeIn(400).addClass('servicio-active-image');
    }

    /* Habitaciones */

    $('#suiteLink').click(function() {
        var currentImage = $('.active-image');
        var nextImage = $('#habitacionSuiteImagen');
        currentImage.slideDown(300).fadeOut(100).removeClass('active-image');
        nextImage.slideUp( 300 ).delay( 100 ).fadeIn( 400 ).addClass('active-image');
    });

    $('#standardLink').click(function() {
        var currentImage = $('.active-image');
        var nextImage = $('#habitacionStandardImagen');
        currentImage.slideDown(300).fadeOut(100).removeClass('active-image');
        nextImage.slideUp( 300 ).delay( 100 ).fadeIn( 400 ).addClass('active-image');
    });

    $('#superiorLink').click(function() {
        var currentImage = $('.active-image');
        var nextImage = $('#habitacionSuperiorImagen');
        currentImage.slideDown(300).fadeOut(100).removeClass('active-image');
        nextImage.slideUp( 300 ).delay( 100 ).fadeIn( 400 ).addClass('active-image');
    });

    $('#dobleLink').click(function() {
        var currentImage = $('.active-image');
        var nextImage = $('#habitacionDobleImagen');
        currentImage.slideDown(300).fadeOut(100).removeClass('active-image');
        nextImage.slideUp( 300 ).delay( 100 ).fadeIn( 400 ).addClass('active-image');
    });

    /*Contacto*/

    $('.btn').click(function() {
        var fieldEmail = $('.emailField');
        var fieldTelefono = $('.telefonoField');
        var fieldComentario = $('.comentarioField');
        var email = fieldEmail.getText();
        var telefono = fieldTelefono.getText();
        var comentario = fieldComentario.getText();
        fieldEmail.val('');
        fieldTelefono.val('');
        fieldComentario.val('');

    })

    /* Eventos */

    $('#staMariaLink').click(function() {
        var currentImage = $('.active-image');
        var nextImage = $('#autorioSantaMariaImagen');

        currentImage.slideDown(300).fadeOut(100).removeClass('active-image');
        nextImage.slideUp( 300 ).delay( 100 ).fadeIn( 400 ).addClass('active-image');
    });

    $('#ninaLink').click(function() {
        var currentImage = $('.active-image');
        var nextImage = $('#salaLaNinaImagen');

        currentImage.slideDown(300).fadeOut(100).removeClass('active-image');
        nextImage.slideUp( 300 ).delay( 100 ).fadeIn( 400 ).addClass('active-image');
    });

    $('#pintaLink').click(function() {
        var currentImage = $('.active-image');
        var nextImage = $('#salaLaPintaImagen');

        currentImage.slideDown(300).fadeOut(100).removeClass('active-image');
        nextImage.slideUp( 300 ).delay( 100 ).fadeIn( 400 ).addClass('active-image');
    });

}

$(document).ready(main);