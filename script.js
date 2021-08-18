function ClickMe(){
    var image=document.getElementById('img');
    var text=document.getElementById('btn');

    if(image.src.match('bulbon')){
        image.src="./pic_bulboff.gif";
        text.innerText="On This Bulb";
    }else{
        image.src="./pic_bulbon.gif";
        text.innerText="Off This Bulb";
    }

}