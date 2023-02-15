

const button = document.querySelector('#btn');

const Image = document.querySelector('#Img')

button.addEventListener('click',function(){

    console.log(Image.src);

    if(Image.src.match('off')){
        Image.src = "bulb-on.gif";
        button.innerHTML="Turn OFF";
    }else{
        Image.src = "bulb-off.png";
        button.innerHTML="Turn ON";
    }

})