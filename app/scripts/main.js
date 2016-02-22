'use strict';

var em = document.getElementById('em'), var1 = 'ctorquinn.com', var2 = 'mai', var3 = 'l@vi';
em.innerHTML = var2 + var3 + var1;
em.href = var2 + 'lto:' + var2 + var3 + var1 + '?subject=Hello!';


var ph = document.getElementById('ph'), var4 = '3) 962', var5 = '(70', var6 = '-7234';
ph.innerHTML = var5 + var4 + var6;
ph.href = 'tel:14136872928';

$(function() {
    // Add smooth scrolling
    $('a[href^="#"]').on('click', function(e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;
        // animate
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 85
        }, 300, function(){
            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
        });

    });

    $('body').stacks({
        body: '.maincontent',
        title: '.sectionheader',
        offset: 0,
        margin: 0
    });
});
