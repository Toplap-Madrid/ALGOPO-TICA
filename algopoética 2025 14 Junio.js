
/*
.-------------------------.
.   ALGOPOÉTICA - 2025    .
.   Poesía y algoritmos   .
| 14-15 Junio 2025, Madrid.
...........................
· 14 de Junio - La Brecha
·	C/ Picos de Europa 11, i
· <M> Nueva Numancia
·..........................
 18h: Workshop (Híbrido)
	Codework: Executable Code-Poetry
    	- Jessica A. Rodriguez

 20h: Actuaciones y charlas (con streaming)
	ORCUTUP - Retrokuplo
    Escalofríos y entrañas - Djeannette la loca
	& gislene
	Memorias - Jessica A. Rodriguez
  Carb ustion – nervousdata
	Prosetta - Milo Jacobs, Flynn Duniho
      and Nate Westfall

 22h: Spoken Noise Room (con streaming)
	Jam session abierta de poesía y ruidos
*/



speed = .1
osc(20,.2,.3).posterize(3).modulate(src(o0).rotate(()=>1+a.fft[0]*.2)).add(src(o0).luma(),.1)
  .mult(gradient(2).add(solid(1.20,.210,1.3))).luma(.2).sub(src(o0).scale(1.12),.47).scale(.63).out()

update = ()=>{
  const coms = document.getElementsByClassName("cm-comment")
  for (let i = 0; i < coms.length; i++) {
    coms[i].style.color = (i<6 || i== 10 || i == 14 || i == 23)?"#FF99FF":"white";
    coms[i].style.textShadow= (i<6 || i== 10 || i == 14 || i == 23)?"1px 1px 1px":"1px 1px 2px";
  }
}