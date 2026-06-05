const bgm = document.getElementById("bgm");

bgm.volume = 0.25;

function startMusic(){
    bgm.play().catch(()=>{});
}

document.addEventListener(
    "click",
    startMusic,
    {once:true}
);

document.addEventListener(
    "touchstart",
    startMusic,
    {once:true}
);

const links =
document.querySelectorAll(".menu a");

links.forEach(link=>{

    link.addEventListener(
        "mouseenter",
        ()=>{

            link.style.textShadow=
            "0 0 15px rgba(255,255,255,.8)";
        }
    );

    link.addEventListener(
        "mouseleave",
        ()=>{

            link.style.textShadow=
            "none";
        }
    );

});
