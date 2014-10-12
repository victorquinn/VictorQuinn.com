'use strict';

var em = document.getElementById('em'), var1 = 'ctorquinn.com', var2 = 'mai', var3 = 'l@vi';
em.innerHTML = var2 + var3 + var1;
em.href = var2 + 'lto:' + var2 + var3 + var1 + '?subject=Hello!';


var ph = document.getElementById('ph'), var4 = '3) 962', var5 = '(70', var6 = '-7234';
ph.innerHTML = var5 + var4 + var6;
ph.href = 'tel:14136872928';

$(function() {
    $('body').stacks({
        body: '.maincontent',
        title: '.sectionheader',
        offset: 0,
        margin: 0
    });
    console.log('stacks loaded');
});
