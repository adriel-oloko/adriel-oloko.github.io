jQuery.noConflict();
jQuery(document).ready( function($) {
    let windowHeight = window.innerHeight;
    let s4Header = document.querySelectorAll('#s4 span span')

    const reveal = () => {
        let reveals = document.querySelectorAll(".container-left, .container-right, .container-box");

        for (var i = 0; i < reveals.length; i++) {
          let elementTop = reveals[i].getBoundingClientRect().top;
          let elementVisible = 0;

          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
    }

    const lineReveal = () => {
        let lineReveals = document.querySelectorAll(".container-line");

        lineReveals.forEach( lr => {
            if (lr.getBoundingClientRect().top < windowHeight) {
                lr.classList.add("activeLine")
            } else {
                lr.classList.remove("activeLine")
            }
        })
    }

    const reviewReveal = () => {
        let reviewRevealsLeft = document.querySelectorAll(".review-left");
        let reviewRevealsRight = document.querySelectorAll(".review-right");

        reviewRevealsRight.forEach(rrr => {
            if (rrr.getBoundingClientRect().top < windowHeight) {
                rrr.classList.add('reviewActiveRight')
            } else {
                rrr.classList.remove('reviewActiveRight')
            }
        })

        reviewRevealsLeft.forEach(rrl => {
            if (rrl.getBoundingClientRect().top < windowHeight) {
                rrl.classList.add('reviewActiveLeft')
            } else {
                rrl.classList.remove('reviewActiveLeft')
            }
        })
    }
    
    let heroHeader = document.querySelectorAll('#heroHeader span span')
    heroHeader.forEach( (heroHeaderSpan, index) => {
        heroHeaderSpan.style.transform = 'translateY(0)'
        heroHeaderSpan.style.opacity = '1'
        heroHeaderSpan.style.transition = 'all .5s'
        heroHeaderSpan.style.transitionDelay = index*0.1+'s'
    })

    $('html, body').scroll(() => {
        reveal()
        lineReveal()
        reviewReveal()

        if (document.getElementById('s4').getBoundingClientRect().top < windowHeight) {
            s4Header.forEach( (s4HeaderSpan, index) => {
                s4HeaderSpan.style.transform = 'translateY(0)'
                s4HeaderSpan.style.opacity = '1'
                s4HeaderSpan.style.transition = 'all .5s'
                s4HeaderSpan.style.transitionDelay = index*0.1+'s'
            })
        } else {
            s4Header.forEach( (s4HeaderSpan, index) => {
                s4HeaderSpan.style.transform = 'translateY(2.5rem)'
                s4HeaderSpan.style.opacity = '0'
                s4HeaderSpan.style.transition = 'all .5s'
                s4HeaderSpan.style.transitionDelay = index*0.1+'s'
            })
        }
    })

    
    $('#openMenu').click(() => {
        $('#mobileMenu').show()
    })

    $('#closeMenu').click(() => {
        $('#mobileMenu').hide()
    })
});

const faqOpen = id => {
    document.getElementById('faqAnswer'+id).style.display = 'block'
    document.getElementById('chevronFaq'+id+'Open').style.display = 'none'
    document.getElementById('chevronFaq'+id+'Close').style.display = 'block'
}

const faqClose = id => {
    document.getElementById('faqAnswer'+id).style.display = 'none'
    document.getElementById('chevronFaq'+id+'Open').style.display = 'block'
    document.getElementById('chevronFaq'+id+'Close').style.display = 'none'
}