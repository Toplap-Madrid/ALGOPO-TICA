
/*
.-------------------------.						.-------------------------.
.   ALGOPOÉTICA - 2025    .						.   ALGOPOÉTICA - 2025    .
.   Poesía y algoritmos   .						.   Poesía y algoritmos   .
| 14-15 Junio 2025, Madrid.						. 14-15 June 2025, Madrid |
.................................................................................................
· 14 de Junio - La Brecha						| 15 de Junio - EMMD Mª Dolores Pradera. 		·
· 	C/ Picos de Europa 11, i					| 	C/ Farmacia nº 13							·
· 	<M> Nueva Numancia							|  	<M> Chueca / Tribunal       				.
·...............................................................................................·
 18h: Workshop (Híbrido)                        | 10:30h: Workshop (presencial)					.
	Codework: Executable Code-Poetry			| 	Introduction to the Qiudanz Technique: 		.
    	- Jessica A. Rodriguez					|		Computational Transformation of 		.
    							           		|		minimalist movement sequences - Sejo Vega
         	                                    |
 20h: Actuaciones y charlas (con streaming)		| 12h: ALGORAVE (Actuaciones, con streaming)
	ORCUTUP - Retrokuplo						|	Human Disorder - QBRNTHSS
    Escalofríos y entrañas - Djeannette la loca	|   Feedback Loop: - Lara & Synk
	& gislene
	Memorias - Jessica A. Rodriguez				| 	Amazin Poet - visual_punk_ltd
	Carb ustion – Nervous Data					|	IMPACTOS - Sharon Díez & TACHA~
	Prosetta - Milo Jacobs, Flynn Duniho        |	Rapaa - nico000000000000
      and Nate Westfall							|
      											|
 22h: Spoken Noise Room (con streaming)			|
	Jam session abierta de poesía y ruidos		|
*/



speed = .1
osc(20,.2,.3).posterize(3).modulate(src(o0).rotate(()=>1+a.fft[0]*.2)).add(src(o0).luma(),.1)
  .mult(gradient(2).add(solid(1.20,.210,1.3))).luma(.2).sub(src(o0).scale(1.12),.47).scale(.63).out()

update = ()=>{
  const coms = document.getElementsByClassName("cm-comment")
  for (let i = 0; i < coms.length; i++) {
    coms[i].style.color = (i<6 || i== 10 || i == 15 || i == 24)?"#FF99FF":"white";
    coms[i].style.textShadow= (i<6 || i== 10 || i == 15 || i == 24)?"1px 1px 1px":"1px 1px 2px";
  }
}