jQuery(document).ready(($) => {
    const reveal = () => {
        var reveals = document.querySelectorAll(".container-box, .container-left");

        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;

          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
    }
    
    $('<img/>').attr('src', 'https://adriel-oloko.github.io/images/beautiful-aerial-shot-fronalpstock-mountains-switzerland-beautiful-pink-blue-sky.jpg').on('load', function() {
            $(this).remove(); 
            $('#nameTitle').toggleClass('scaleUp');
            $('#nameTitle, #loadScreen > div').animate({
                'opacity': 0,
            }, 'slow')
        
            $('#loadScreen').delay(800).animate({
                'opacity': 0
            }, 'slow')
        
            setTimeout(() => {
                $('#loadScreen').css('display', 'none')
            }, 1200)
    })

    $('html, body').scroll(() => {
        reveal()

        if ($('html, body').innerWidth() < 1024) {
            document.getElementsByTagName('header')[0].style.backgroundSize = ($('html, body').innerHeight() - $('main').position().top)/2 + 170 + 'vh'
        } else {
            document.getElementsByTagName('header')[0].style.backgroundSize = ($('html, body').innerHeight() - $('main').position().top)/2 + 100 + 'vw'
        }
        //$('#clouds').css('display', 'none')

        if ( document.getElementById('clouds').style.backgroundPositionX.split('%')[0] <= 100 ) {
            document.getElementById('clouds').style.backgroundPosition = ($('html, body').innerHeight() - $('main').position().top)/5 + '% 100%'
        } if ( document.getElementById('clouds').style.backgroundPositionX.split('%')[0] > 100 ) {
            document.getElementById('clouds').style.backgroundPosition = '100% 100%'
        } if ( document.getElementById('clouds').style.backgroundPositionX.split('%')[0] < 0 ) {
            document.getElementById('clouds').style.backgroundPosition = '0% 100%'
        }
    });

    $('nav #menuOpen').click(() => {
        document.getElementById('menu').style.borderRadius = '0'
        document.getElementById('menu').style.transform = 'translateX(0)'
        document.getElementById('menu').style.transition = 'all .6s'

        $('#menuOpen').css('display', 'none')
        $('#menuClose').css('display', 'inline-block')

        $('#menu *').delay(100).animate({
            opacity: '1'
        }, 'slow')
    })

    const close = () => {
        if ($('html, body').innerWidth() < 768) {
            document.getElementById('menu').style.borderRadius = '50%'
        }    
        
        document.getElementById('menu').style.transform = 'translateX(100%)'
        document.getElementById('menu').style.transition = 'all .6s'

        $('#menuOpen').css('display', 'inline-block')
        $('#menuClose').css('display', 'none')

        $('#menu *').animate({
            opacity: '0'
        }, 'slow')
    }

    $('nav #menuClose').click(() => {
        close()
    })

    let videoChecker = setInterval(() => {
        var video = document.getElementsByTagName("video")[0];
        if ( video.readyState === 4 ) {
            $('.loader').hide()
            clearInterval(videoChecker)
        }
    })

    $('.forwardButton').click(function() {
        const parentId = $(this).parent().attr('id')
        $('#' + parentId + ' .portfolioText').animate({
            'opacity': 1
        }, 'slow')

        $('#' + parentId + ' img').animate({
            'opacity': 0
        }, 'slow')

        $('#' + parentId + ' img').css('visibility', 'hidden');
        $('#' + parentId + ' .forwardButton').fadeOut('fast');
    })
    
    $('.backButton').click(function () {
        const parentId = $(this).parent().attr('id')
        $('#' + parentId + ' .portfolioText').animate({
            'opacity': 0
        }, 'slow')

        $('#' + parentId + ' img').animate({
            'opacity': 1
        }, 'slow')

        $('#' + parentId + ' img').css('visibility', 'visible');
        $('#' + parentId + ' .forwardButton').fadeIn('fast');
    })


    $('#galleryControls').click(() => {
        if ( $('#me').css('display') == 'none' ) {
            $('#me').css('display', 'block')
        } else {
            $('#me').css('display', 'none')
        }
    })

    var position = $('#myStory').position().top;
    console.log(position, $('#myStory').outerHeight(), $('#myStory').innerHeight())
    
    $('.ms').click(() => {
        close()

        $('html, body').animate({
            scrollTop: $('#myStory').outerHeight() - $('#myStory').position().top * 1.7
        }, 'slow')
    })

    $('.portfolio').click(() => {
        close()

        $('html, body').animate({
            scrollTop: $('#portfolio').offset().top - $('#myStory').position().top
        }, 'slow')
    })

    $('.philosophy').click(() => {
        close()

        $('html, body').animate({
            scrollTop: $('#philosophy').offset().top
        }, 'slow')
    })

    $('.contact').click(() => {
        close()

        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 'slow')
    })
});
