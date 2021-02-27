'use strict';

document.querySelector('.fo').addEventListener('click', function(){
    if (!document.querySelector('#name').value=='' && !document.querySelector('#contact').value=='' && !document.querySelector('#email').value=='' && !document.querySelector('#address').value=='') {
        alert('Details Submitted will contact shortly.')
    }
})
