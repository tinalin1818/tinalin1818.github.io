const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top: ' + e.clientY+'px; left: ' + e.clientX+'px')
})