let moon = document.getElementById("cover")
let texto = document.getElementById("texto")

window.addEventListener('scroll', function(){
    let value = window.scrollY
    
    moon.style.top = value * 0.6 + 'px';
    texto.style.bottom = value * 0.1 + 'px';
});