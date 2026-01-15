var currentpage = window.location.pathname;

function gohome(){
    document.querySelector("header select").value = "inicio";
    setTimeout(() => {
        document.location.href = "/";
    }, 300);
}
if(!localStorage.getItem("cookies")){
    document.querySelector(".cookies").style.bottom = "5vw";
    setTimeout(() => {
        document.querySelector(".cookies").style.transition = "bottom 0.5s ease-in-out";
    }, 1000);
}

var biscuits = {
    generate: function(length){
        let randomStr = '';
        while (randomStr.length < length) {
            randomStr += Math.random().toString(36).substring(2); 
        }
        return randomStr.substring(0, length);
    },
    accept: function(){
        localStorage.setItem("cookies",  this.generate(64));
        document.querySelector(".cookies").style.bottom = "-50vw";
    },
    reject: function(){
        document.querySelector(".cookies").style.bottom = "-50vw";
    }
}

//when scrolling, if scrollY > 100, add class "scrolled" to header, else remove it
window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        document.querySelector("header").classList.add("scrolled");
    }
    else{
        document.querySelector("header").classList.remove("scrolled");
    }
});
window.addEventListener("load", () => {
    document.querySelector("header select").value = currentpage.replaceAll("/", "") || "inicio";
    document.querySelector("#collapsed-menu option[value='" + (currentpage.replaceAll("/", "") || "inicio") + "']").disabled = true;
    
    if(currentpage != "/"){
        document.querySelector("#collapsed-menu option[value='inicio']").disabled = false;
    }
});

function headerselectionpage(val){
    switch (val) {
        case "inicio":
            document.location.href = "/";
            gohome();
            break;
        case "eventos":
            document.location.href = "/eventos";
            break;
        case "rankings":
            document.location.href = "/rankings";
            break;
        case "redes":
            document.location.href = "/redes";
            break;
        case "apuestas":
            document.location.href = "/apuestas";
            break;
        default:
            document.location.href = "/";
            gohome();
            break;
    }
}
