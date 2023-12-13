jQuery.noConflict();
jQuery(document).ready( function($) {
    $('#loaderContainer').delay(3000).fadeOut(500)
    
    let xx = 0
    var prev = 0
    var prevFS = 0
    let page = 1
    var slideChecker = false
    let heroMarginBottom = parseFloat($('h2#role').css('marginBottom'))
    
    /**
     * Page 1 Image bOx and name
     * Page 2 Tchnologies
     * Page 3 Projects/About me (double Page slider)
     * Page 5 COntact
     * 
     */

    $('html, body').scroll(() => {
        $('main').css('display', 'none')
        document.getElementById('textBox').style.transform = 'translateX(0)'
        document.getElementById('textBox').style.opacity = '1'
        document.getElementById('textBox').style.transition = 'all 1s'
    })

    $('#falseScreenContainer').scroll(() => {
        var scrollSum = $(document).height() - $(window).innerHeight();
        $('html, body').scrollTop($('#falseScreenContainer').scrollTop())
        if ($('#close').css('opacity') === '1') {
            closer()
            $('#falseScreenContainer').css('overflowY', 'hidden')

            setTimeout(() => {
                $('#falseScreenContainer').css('overflowY', 'scroll')
            }, 1500)
        }

        if ( $('#falseScreenContainer').scrollTop() == 0 ) {
            $('main').css('display', 'none')
        }
        
        if (Math.round($('header').outerHeight() + $('header').offset().top) <= $(window).outerHeight()) {
            $('main').css({'display': 'block', 'position': 'fixed', 'inset': '0px'})
            $('#projectsGrid')[0].scrollHeight > $(window).height()?
                $('#falseTableScroll').css('height', $('#projectsGrid')[0].scrollHeight + 70/100*($(window).width())):
                $('#falseTableScroll').css('height', $(window).height() + 70/100*($(window).width()))
            
            $('#right').css('top', $(window).innerHeight() - $('#falseScreenContainer').scrollTop()+scrollSum)
            
            if ( $(window).innerHeight() - $('#falseScreenContainer').scrollTop()+scrollSum <= 0 ) {
                //$('#falseScreenContainer').css('display', 'none')
                console.log($('#falseScreenContainer').scrollTop(), '<>', $('header')[0].scrollHeight, $('html, body').innerHeight(), scrollSum)
                $('#left').css('bottom', '0')
                $('#right').css('top', '0')

                $('#technology, #slideContent').css('opacity', '1')
            } else {
                $('#technology, #slideContent').css('opacity', '0')
            }
        }

        if ($(window).innerHeight() - $('#falseScreenContainer').scrollTop()+scrollSum <= 0) {
            $('#projectsGrid').css('overflowY', 'hidden')
            $('main').scrollTop($('#falseScreenContainer').scrollTop() - ($('header')[0].scrollHeight+scrollSum))
            if ( $('#slideContent').offset().top == 0 && $('#contact').css('display') == 'none' ) {
                $('#falseScreenContainer').css('display', 'none')
                $('#falseTableScrollContainer').css('visibility', 'visible')
                $('main').css('overflowY', 'hidden')
            }

            if ( $('main').scrollTop() <= 0 ) {
                $('#falseScreenContainer').css('display', 'block')
    
                $('#left').css('bottom', $(window).innerHeight() - $('#falseScreenContainer').scrollTop())
                $('#right').css('top', $(window).innerHeight() - $('#falseScreenContainer').scrollTop())
            }

            if ($('#slideContent').offset().top > 0 && $('#sc').css('transform').split(',')[4] != 0 && $('#falseTableScrollContainer').scrollTop() > 0) {
                $('#falseTableScrollContainer').css('visibility', 'visible')
                $('#falseScreenContainer').css('display', 'none')

                $('#slideContent').get(0).scrollIntoView();
                $('#contact').css('display', 'none')
    
            }

        }

        prevFS = $('#falseScreenContainer').scrollTop()
    })

    $('main').scroll(() => {
        $('#projectsGrid').css('overflowY', 'hidden')

        if ( $('#slideContent').offset().top == 0 && $('#contact').css('display') == 'none' ) {
            $('#falseTableScrollContainer').css('visibility', 'visible')
            $('main').css('overflowY', 'hidden')
        }
        
        if ( $('main').scrollTop() <= 0 ) {
            $('#falseScreenContainer').css('display', 'block')

            $('#left').css('bottom', $(window).innerHeight() - $('#falseScreenContainer').scrollTop())
            $('#right').css('top', $(window).innerHeight() - $('#falseScreenContainer').scrollTop())
        }

        if ($('#slideContent').offset().top > 0 && $('#sc').css('transform').split(',')[4] != 0 && $('#falseTableScrollContainer').scrollTop() > 0) {
            $('#falseTableScrollContainer').css('visibility', 'visible')
            $('#slideContent').get(0).scrollIntoView();
            $('#contact').css('display', 'none')

        }
    })
    
    $('#falseTableScrollContainer').scroll(() => {
        $('#projectsGrid').css('overflowY', 'scroll')

        if ($('#sc').css('transform').split(',')[4] == 0 || prev <= $('#falseTableScrollContainer').scrollTop()) {
            $('#projectsGrid').scrollTop($('#falseTableScrollContainer').scrollTop())
        }

        if ( $('#projectsGrid')[0].scrollHeight - $(window).height() >= $('#projectsGrid').scrollTop()) {
            $('#sc').css('transform', 'translateX('+($('#falseTableScrollContainer').scrollTop() - $('#projectsGrid').scrollTop())*-1+'px)')//main
        }

        if (($('#falseTableScrollContainer').scrollTop() - $('#projectsGrid').scrollTop()) >= Math.round(70/100*($('html, body').width())) || $('#sc').css('transform').split(',')[4] <= Math.round(69/100*($('html, body').width()))*-1) {
            $('#sc').css('transform', 'translateX(-'+70/100*($('html, body').width())+'px)')
            $('#falseTableScrollContainer').css('visibility', 'hidden')
            $('#falseScreenContainer').css('display', 'block')
            $('main').css('overflowY', 'scroll')
            $('#falseScreenContainer').css('display', 'none')
            $('#contact').css('display', 'block')
            $('#flex2').css('opacity', '1')
        }

        if ($('#falseTableScrollContainer').scrollTop() <= 0 || $('#sc').css('transform').split(',')[4] > 0) {
            $('#sc').css('transform', 'translateX(0px)')
            $('#falseTableScrollContainer').css('visibility', 'hidden')
            $('#falseScreenContainer').css('display', 'block')
            $('main').css('overflowY', 'scroll')
            $('#contact').css('display', 'none')
            $('#flex2').css('opacity', '0')
        }

        
        prev = $('#falseTableScrollContainer').scrollTop()
    })

    $('#bars').click(() => {
        document.querySelector('header').style.transform = 'translateY(50%)'
        document.querySelector('header').style.transition = 'all 2s'

        document.getElementById('close').style.display = 'inline'
        document.getElementById('close').style.opacity = '1'
        document.getElementById('close').style.transition = 'opacity 2s'

        document.getElementById('bars').style.display = 'none'
        document.getElementById('bars').style.opacity = '0'
        document.getElementById('bars').style.transition = 'opacity 2s'

        document.querySelector('main').style.filter = 'blur(5px)'
        document.querySelector('main').style.transition = 'filter 2s'

        document.getElementById('mobileMenu').style.visibility = 'visible'

        document.querySelectorAll('.mm-headerText').forEach((headerTag, index) => {
            headerTag.style.transform = 'translateX(0px)'
            headerTag.style.opacity = '1'
            headerTag.style.transition = 'all 1s '+index*0.2+'s'
        })
    })

    $('#close').click(() => {
        closer()
    })

    document.querySelectorAll('.projectBlocks').forEach((pb) => {
        pb.addEventListener('click', () => {
            if (pb.style.opacity !== '0') {
                pb.style.opacity = '0'
                pb.style.transition = 'all .5s'
            } else {
                pb.style.opacity = '1'
                pb.style.transition = 'all .5s'
            }
        })
        //duration 150ms
    })


    const whatsapp = document.getElementById('whatsapp')
    const linkedin = document.getElementById('linkedin')
    const email = document.getElementById('email')
    const twitter = document.getElementById('twitter')

    whatsapp.addEventListener('mouseenter', () => {
        whatsapp.style.backgroundColor = '#25d366'
        whatsapp.style.transition = 'all .5s'
        linkedin.style.backgroundColor = ''
        linkedin.style.transition = 'all .5s'
        twitter.style.backgroundColor = ''
        twitter.style.transition = 'all .5s'
        document.getElementById('twitterSvg').style.fill = ''
        document.getElementById('twitterSvg').style.transition = 'all .5s'
        email.style.backgroundColor = ''
        email.style.transition = 'all .5s'
        document.getElementById('emailSvg').style.fill = ''
        document.getElementById('emailSvg').style.transition = 'all .5s'
    })

    linkedin.addEventListener('mouseenter', () => {
        whatsapp.style.backgroundColor = ''
        whatsapp.style.transition = 'all .5s'
        linkedin.style.backgroundColor = '#0072b1'
        linkedin.style.transition = 'all .5s'
        twitter.style.backgroundColor = ''
        twitter.style.transition = 'all .5s'
        document.getElementById('twitterSvg').style.fill = ''
        document.getElementById('twitterSvg').style.transition = 'all .5s'
        email.style.backgroundColor = ''
        email.style.transition = 'all .5s'
        document.getElementById('emailSvg').style.fill = ''
        document.getElementById('emailSvg').style.transition = 'all .5s'
    })

    email.addEventListener('mouseenter', () => {
        whatsapp.style.backgroundColor = ''
        whatsapp.style.transition = 'all .5s'
        linkedin.style.backgroundColor = ''
        linkedin.style.transition = 'all .5s'
        twitter.style.backgroundColor = ''
        twitter.style.transition = 'all .5s'
        document.getElementById('twitterSvg').style.fill = ''
        document.getElementById('twitterSvg').style.transition = 'all .5s'
        email.style.backgroundColor = '#fff'
        email.style.transition = 'all .5s'
        document.getElementById('emailSvg').style.fill = '#121212'
        document.getElementById('emailSvg').style.transition = 'all .5s'
    })

    twitter.addEventListener('mouseenter', () => {
        whatsapp.style.backgroundColor = ''
        whatsapp.style.transition = 'all .5s'
        linkedin.style.backgroundColor = ''
        linkedin.style.transition = 'all .5s'
        twitter.style.backgroundColor = '#fff'
        twitter.style.transition = 'all .5s'
        document.getElementById('twitterSvg').style.fill = '#121212'
        document.getElementById('twitterSvg').style.transition = 'all .5s'
        email.style.backgroundColor = ''
        email.style.transition = 'all .5s'
        document.getElementById('emailSvg').style.fill = ''
        document.getElementById('emailSvg').style.transition = 'all .5s'
    })

    
    //NAV CLICKS

    $('.projectsClick').click(() => {
        //Redo Process to projects page
        closer()
    })


    const closer = () => {
        document.querySelector('header').style.transform = 'translateY(0%)'
        document.querySelector('header').style.transition = 'all 2s'

        document.getElementById('close').style.display = 'none'
        document.getElementById('close').style.opacity = '0'
        document.getElementById('close').style.transition = 'all 2s'

        document.getElementById('bars').style.display = 'inline'
        document.getElementById('bars').style.opacity = '1'
        document.getElementById('bars').style.transition = 'all 2s'

        document.getElementById('mobileMenu').style.visibility = 'invisible'
        document.querySelector('main').style.filter = 'blur(0px)'

        document.querySelectorAll('.mm-headerText').forEach((headerTag, index) => {
            headerTag.style.transform = 'translateX(-25%)'
            headerTag.style.opacity = '0'
            headerTag.style.transition = 'all 1s '+index*0.2+'s'
        })
    }
})

const linkClickFunction = (url) => {
    window.open(url, '_blank')
}