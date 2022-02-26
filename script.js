let hydra, hydraCanvas;
hydraCanvas = document.getElementById("myCanvas");
hydraCanvas.width = window.innerWidth
hydraCanvas.height = window.innerHeight
hydraCanvas.getContext("webgl", { preserveDrawingBuffer: true });
hydra = new Hydra({
  canvas: hydraCanvas,
  detectAudio: false,
  enableStreamCapture: false,
});

s0.initImage("https://i.ibb.co/SRpW3L2/photo-2022-01-27-15-59-15.jpg")

src(o0)
.hue(0.01)
.modulate(voronoi(10,1,0.5).luma(0.1),0.001)
.scrollY(-0.001)
.saturate(1.01)
.rotate(()=>mouse.y*0.0001)
.rotate(()=>mouse.x*-0.001)
.layer(
src(s0).scale(1,0.6).contrast(1.5).luma(0.2,0)).out()


render(o0)

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