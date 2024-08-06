jQuery(document).ready(($) => {
    const innerUrl = ['Snapinsta.app_275141237_985671442063267_4080968613461093031_n_1080.jpg', 'medium-shot-people-wine-cellar_23-2149428763.jpg']
    let slideShowCount = 1
    $('#closeButton').fadeOut(0);

    document.querySelector('#hero').style.opacity = '1'
    document.querySelector('#hero').style.transition = 'all 1s'

    document.querySelector('#hero h2').style.transform = 'translateY(0)'
    document.querySelector('#hero h2').style.transition = 'transform 1s'

    document.querySelector('#hero p').style.transform = 'translateY(0)'
    document.querySelector('#hero p').style.transition = 'transform 1s'

    setTimeout(() => {
        $('#hero div').css('display', 'none')
    }, 1000)

    const reveal = () => {
        var reveals = document.querySelectorAll(".container-left, .container-right, .container-box");

        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 0;

          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
    }

    
    $('html, body').scroll(() => {
        reveal()
    })

    $('#slideshowFw').click(() => {
        slideShowCount < innerUrl.length? slideShowCount++: slideShowCount = 1;
        $('#slideshowLoader').css('width', '0')
        $('#slideshowLoader').delay(1400).animate({width: '100%'}, 3000)

        $('#bigImage').animate({
            right: '100%',
        }, 'slow')

        if ( $('html, body').width() < 768 ) {
            $('#containedImage').animate({
                right: '100%',
            }, 'slow')
        } else {
            $('#containedImage').animate({
                width: '0',
            }, 'slow')
        }

        $('#bigImage *').animate({
            opacity: '0'
        }, 'slow')

        setTimeout(() => {
            $('#containedImage').css('backgroundImage', 'url("images/'+innerUrl[slideShowCount-1]+'")')
            $('#slideshowCount').text('0'+slideShowCount)

            if ( $('html, body').width() < 768 ) {
                $('#containedImage').animate({
                    right: '3rem'
                }, 'slow')
            } else {
                $('#containedImage').animate({
                    width: '100%'
                }, 'slow')
            }
            
            $('#bigImage *').animate({
                opacity: '1'
            }, 'slow')
            $('#bigImage').animate({
                right: '0',
            }, 'slow')
        }, 700)
        
    })

    $('#menuButton').click(() => {
        $('#menuButton').fadeOut(0);
        $('#closeButton').fadeIn(0);

        let sectionImg = document.querySelector('section img')
        document.querySelector('section').style.display = 'grid'
        let headers = document.querySelectorAll('#sideNav h3')

        setTimeout(() => {
            document.querySelector('section').style.opacity = '1'
            document.querySelector('section').style.transition = 'all .7s'

            sectionImg.style.opacity = '1'
            sectionImg.style.transform = 'translateY(0px)'
            sectionImg.style.transition = 'all 1.5s'

            headers.forEach((head, index) => {
                head.style.opacity = '1'
                head.style.transform = 'translateY(0px)'
                head.style.transition = 'all 1.5s'
                head.style.transitionDelay = index*0.25+'s'
            })
        }, 1);
    })

    $('#closeButton').click(() => {
        $('#closeButton').fadeOut(0);
        $('#menuButton').fadeIn(0);

        let sectionImg = document.querySelector('section img')
        let headers = document.querySelectorAll('#sideNav h3')
        document.querySelector('section').style.opacity = '0'
        document.querySelector('section').style.transition = 'all .7s'

        sectionImg.style.opacity = '0'
        sectionImg.style.transform = 'translateY(15rem)'
        sectionImg.style.transition = 'all 1.5s'
        
        headers.forEach((head, index) => {
            head.style.opacity = '0'
            head.style.transform = 'translateY(15rem)'
            head.style.transition = 'all 1.5s'
            head.style.transitionDelay = 0.75 - (index*0.25)+'s'
        })
        setTimeout(() => {
            document.querySelector('section').style.display = 'none'
        }, 700);
    })

})