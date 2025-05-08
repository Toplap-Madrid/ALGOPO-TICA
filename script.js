let hydra, hydraCanvas;
hydraCanvas = document.getElementById("myCanvas");
hydraCanvas.width = window.innerWidth
hydraCanvas.height = window.innerHeight
hydraCanvas.getContext("webgl", { preserveDrawingBuffer: true });
hydra = new Hydra({
  canvas: hydraCanvas,
  detectAudio: true,
  enableStreamCapture: false,
});


speed = .1
osc(20,.2,.3).posterize(3).modulate(src(o0).rotate(()=>1+a.fft[0]*.2)).add(src(o0).luma(),.1)
  .mult(gradient(2).add(solid(1.20,.210,1.3))).luma(.2).sub(src(o0).scale(1.12),.47).scale(.63).out()

 const coms = document.getElementsByClassName("cm-comment")
  for (let i = 0; i < coms.length; i++) {
    console.log(coms[i])
    coms[i].style.color = "white";
    coms[i].style.textShadow = "3px 3px 5px";
    coms[i].style.fontSize = "1.5em";
    coms[i].style.lineHeight = "1.2em";
    coms[i].style.fontFamily = "monospace,monospace";
    

}

/*
var newtext = document.createElement('div');
newtext.classList.add('showtext');
document.getElementById('editor-container').append(newtext);
//document.querySelector('.showtext').style.position="absolute";
document.querySelector('.showtext').style.zIndex="1";
document.querySelector('.showtext').style.fontSize="6vmax";
document.querySelector('.showtext').style.fontFamily="Monospace";
document.querySelector('.showtext').style.color="#fbf0f9";
document.querySelector('.showtext').style.backgroundColor="rgba(0,0,0,0.7)";
document.querySelector('.showtext').style.fontWeight="bold";
document.querySelector('.showtext').style.textShadow= "4px 4px 5px #000";
document.querySelector('.showtext').style.textAlign="right";
document.querySelector('.showtext').style.lineHeight="6vmax";
document.querySelector('.showtext').style.opacity="0.95";
document.querySelector('.showtext').style.padding="1vw 1vw";
document.querySelector('.showtext').innerHTML = "LIVECODERA \<br>\ a global live coding community gathering on International Women’s day!  \<br>\ <sub> 08.03.2022 </sub>";*/