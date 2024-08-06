jQuery(document).ready(($) => {
    const innerUrl = ['Snapinsta.app_275141237_985671442063267_4080968613461093031_n_1080.jpg', 'medium-shot-people-wine-cellar_23-2149428763.jpg']
    let slideShowCount = 1

    $('#loaderWidth').animate({
        width: '100%'
    }, 1500)
    $('#loader').delay(1500).fadeOut(700)

    document.getElementById('rg').style.transform = 'translateX(0)'
    document.getElementById('rg').style.opacity = '1'
    document.getElementById('rg').style.transition = 'all 1.5s 2s'

    document.getElementById('be').style.transform = 'translateX(0)'
    document.getElementById('be').style.opacity = '1'
    document.getElementById('be').style.transition = 'all 1.5s 2.5s'

    document.getElementById('le').style.transform = 'translateX(0)'
    document.getElementById('le').style.opacity = '1'
    document.getElementById('le').style.transition = 'all 1.5s 3s'
    
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
        let falseElem = document.querySelectorAll('.false')
        document.getElementById('sideNav').style.display = 'block'
        let headers = document.querySelectorAll('#sideNav h3')

        falseElem.forEach((elem, index) => {
            let y = -12+(index*3*-1)
            let x = -6+(index*1.5)
            console.log(index, y, x)

            elem.style.display = 'block'
            elem.style.transform = 'perspective(1300px) rotateY(30deg) translateY('+y+'%) translateX('+x+'rem) scale(0.5)'
            elem.style.height = '120vh'
            elem.style.transition = 'all 1.5s'
        })

        headers.forEach((head, index) => {
            head.style.opacity = '1'
            head.style.transform = 'translateY(0px)'
            head.style.transition = 'all 1.5s'
            head.style.transitionDelay = index*0.25+'s'
        })
    })

    $('#closeButton').click(() => {
        let falseElem = document.querySelectorAll('.false')
        let headers = document.querySelectorAll('#sideNav h3')//.reverse()
        console.log(headers)
        falseElem.forEach((elem, index) => {
            let y = -12+(index*3*-1)
            let x = -6+(index*1.5)
            console.log(index, y, x)

            elem.style.transform = 'perspective(1300px) rotateY(0deg) translateY(0px) translateX(0px) scale(1)'
            elem.style.height = '100vh'
            elem.style.transition = 'all 1.5s'
        })

        headers.forEach((head, index) => {
            head.style.opacity = '0'
            head.style.transform = 'translateY(15rem)'
            head.style.transition = 'all 1.5s'
            head.style.transitionDelay = 0.75 - (index*0.25)+'s'
        })
    })
})