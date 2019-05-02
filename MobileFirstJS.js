//Animate Smooth Scroll

$('#view-work').on('click', function ()
{
    const images = $('#images').position().top;

    $('html, body').animate({ scrollTop: images }, 900);
});

$('#business-id').on('click', function () {
    const images = $('#business').position().top;

    $('html, body').animate({ scrollTop: images }, 900);
});

$('#about-id').on('click', function () {
    const images = $('#about').position().top;

    $('html, body').animate({ scrollTop: images }, 900);
});

$('#work-id').on('click', function () {
    const images = $('#work').position().top;

    $('html, body').animate({ scrollTop: images }, 900);
});

$('#contact-id').on('click', function () {
    const images = $('#contact').position().top;

    $('html, body').animate({ scrollTop: images }, 900);
});