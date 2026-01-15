function gohome(){
    document.querySelector("header select").value = "inicio";
    setTimeout(() => {
        document.location.href = "/";
    }, 300);
}
document.body.addEventListener("scroll", (e) => {
    alert("hola")
})
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
