
/*
.-------------------------.
.   ALGOPOÉTICA - 2025    .
.   Poesía y algoritmos   .
| 14-15 Junio 2025, Madrid.
...........................
· 15 de Junio - EMMD Mª Dolores Pradera
· C/ Farmacia nº 13
· <M> Chueca / Tribunal
·..........................·
  10:30h: Workshop (presencial)
 	  Introduction to the Qiudanz Technique
		Computational Transformation of
		minimalist movement sequences - Sejo Vega

 12h: ALGORAVE (Actuaciones, con streaming)
	 Human Disorder - QBRNTHSS
   Feedback Loop: - Lara & Synk
   Amazin Poet - visual_punk_ltd
	 IMPACTOS - Sharon Díez & TACHA~
	 Rapaa - nico000000000000
*/



speed = .1
osc(20,.2,.3).posterize(3).modulate(src(o0).rotate(()=>1+a.fft[0]*.2)).add(src(o0).luma(),.1)
  .mult(gradient(2).add(solid(1.20,.210,1.3))).luma(.2).sub(src(o0).scale(1.12),.47).scale(.63).out()

update = ()=>{
  const coms = document.getElementsByClassName("cm-comment")
  for (let i = 0; i < coms.length; i++) {
    coms[i].style.color = (i<6 || i== 10 || i == 14 || i == 24)?"#FF99FF":"white";
    coms[i].style.textShadow= (i<6 || i== 10 || i == 14 || i == 24)?"1px 1px 1px":"1px 1px 2px";
  }
}	