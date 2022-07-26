var btn = document.getElementById('btns');
var div = document.getElementById('footer');
var main = document.getElementById('main');

btn.addEventListener('click', e => {
    if(div.style.display == "inline-block"){
        div.style.display =  "none";
        main.style.width = "100%";
    }
    else{
        div.style.display = "inline-block";
        div.style.width = "300px";
        main.style.width = "1066px";
    }
});