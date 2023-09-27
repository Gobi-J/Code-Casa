const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
if(bar)
{
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}
const close = document.getElementById('close');
if(close)
{
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

var mainImg = document.getElementById("mainimg");
var smallimg = document.getElementsByClassName("small-img");
for (let i = 0; i < smallimg.length; i++) {
  smallimg[i].onclick = function () {
    mainImg.src = smallimg[i].src;
  };
}
