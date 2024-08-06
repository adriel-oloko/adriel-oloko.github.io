jQuery(document).ready(($) => {
    $('#loaderContainer').delay(1500).fadeOut(500)

    const reveal = () => {
        var reveals = document.querySelectorAll(".container-left, .container-right, .container-box, .container-scale");

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

    $('#menuOpen').click(() => {
        $('#menuOpen').fadeOut(0)
        $('#menuClose').fadeIn(700)
        $('#navbar').fadeIn(700)
    })

    $('#menuClose').click(() => {
        $('#menuClose').fadeOut(0)
        $('#menuOpen').fadeIn(700)
        $('#navbar').fadeOut(700)
    })

    $('#coinBox div').click(function () { 
        $('#coinBox div').css({'backgroundColor': '#fff', 'color': '#000'}) 
        $(this).css({'backgroundColor': '#000', 'color': '#fff'})
    })

    $('#basicDollar').keyup(() => {
        $('#basicNaira').text($('#basicDollar').val()*500)
    })

    $('#businessDollar').keyup(() => {
        $('#businessNaira').text($('#businessDollar').val()*400)
    })

    $('#enterpriseDollar').keyup(() => {
        $('#enterpriseNaira').text($('#enterpriseDollar').val()*500)
    })
})

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