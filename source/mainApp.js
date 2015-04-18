var main = function() {

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

    });

    $('#sumLink').click(function () {
        var currentSlide = $('.active-slide');
        var newSlide = $('#sumSlider');

        currentSlide.fadeOut(600).removeClass("active-slide");
        newSlide.fadeIn(600).addClass("active-slide");
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
    });




/*Habitaciones*/

    $('#suiteLink').click(function() {
        var currentImage = $('.active-image');
        var nextImage = $('#habitacionSuiteImagen');
        var texto = $('#descripcionDeHabitacion');

        texto.text("La habitacion suite cuenta con una cama doble, TV, baño, etc.");
        //currentImage.fadeOut(600).removeClass('active-image');
        //nextImage.fadeIn(600).addClass('active-image');
        currentImage.slideDown(300).fadeOut(100).removeClass('active-image');
        nextImage.slideUp( 300 ).delay( 100 ).fadeIn( 400 ).addClass('active-image');
    });

    $('#standardLink').click(function() {
        var currentImage = $('.active-image');
        var nextImage = $('#habitacionStandardImagen');
        var texto = $('#descripcionDeHabitacion');

        texto.text("La habitacion standard cuenta con una cama doble, TV, baño, etc.");
        //currentImage.fadeOut(600).removeClass('active-image');
        //nextImage.fadeIn(600).addClass('active-image');
        currentImage.slideDown(300).fadeOut(100).removeClass('active-image');
        nextImage.slideUp( 300 ).delay( 100 ).fadeIn( 400 ).addClass('active-image');
    });

    $('#superiorLink').click(function() {
        var currentImage = $('.active-image');
        var nextImage = $('#habitacionSuperiorImagen');
        var texto = $('#descripcionDeHabitacion');

        texto.text("La habitacion superior cuenta con una cama doble, TV, baño, etc.");
        //currentImage.fadeOut(600).removeClass('active-image');
        //nextImage.fadeIn(600).addClass('active-image');
        currentImage.slideDown(300).fadeOut(100).removeClass('active-image');
        nextImage.slideUp( 300 ).delay( 100 ).fadeIn( 400 ).addClass('active-image');
    });

    $('#dobleLink').click(function() {
        var currentImage = $('.active-image');
        var nextImage = $('#habitacionDobleImagen');
        var texto = $('#descripcionDeHabitacion');

        texto.text("La habitacion doble cuenta con una cama doble, TV, baño, etc.");
        //currentImage.fadeOut(600).removeClass('active-image');
        //nextImage.fadeIn(600).addClass('active-image');
        currentImage.slideDown(300).fadeOut(100).removeClass('active-image');
        nextImage.slideUp( 300 ).delay( 100 ).fadeIn( 400 ).addClass('active-image');
    });

    $('.arrow-next').click(function() {
        var currentSlide = ('.active-subSlide');
        var nextSlide = currentSlide.next();

        var currentDot = ('.active-dot');
        var nextDot = currentDot.next();

        if(nextSlide.length === 0) {
            nextSlide = ('.subSlide').first();
            nextDot = ('.dot').first();
        }

        currentSlide.fadeOut(600).removeClass('active-subSlide');
        nextSlide.fadeIn(600).addClass('active-subSlide');

        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });


    $('.arrow-prev').click(function() {
        var currentSlide = $('.active-subSlide');
        var prevSlide = currentSlide.prev();

        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();

        if(prevSlide.length === 0) {
            prevSlide = ('.subSlide').last();
            prevDot = ('.dot').last();
        }

        currentSlide.fadeOut(600).removeClass('active-subSlide');
        prevSlide.fadeIn(600).addClass('active-subSlide');

        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
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

}

$(document).ready(main);