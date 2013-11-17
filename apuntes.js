/*crear una variable que almacene el canvas*/
var canvas = document.getElementById("micanvas");
/*para referenciar el contexto del canvas se hace un llamado al getContext es un parametro del metodo canvas, actualmente es 2D*/
/*NOTA: no es necesario crear tantos objetos referenciando el contexto del canvas yo lo hice por comodida
asi recordar que parte del lienzo estoy trabajando*/
var humo1 = canvas.getContext('2d');
var humo2 = canvas.getContext('2d');
var humo3 = canvas.getContext('2d');
var humo4 = canvas.getContext('2d');
var fuegoR = canvas.getContext('2d');
var cohete = canvas.getContext('2d');
/*con esto ya puedo empezar a crear formas en el objeto canvas que posee el id "micanvas"*/

/*arc(x, y, radius, startAngle, endAngle, anticlockwise)  dibuja puntos sobre un trazado, formando el arco
descrito por la circunferencia del círculo definido por los argumentos (coordenadas x e y del centro 
y el radio, en pixels), empezando desde el ángulo indicado por startAngle y finalizando 
en el punto indicado en endAngle, siguiendo la dirección indicada en el último argumento (sentido horario o anti horario).*/

/*el Humo de fondo sera el humo 4*/
humo4.beginPath();
humo4.fillStyle = "rgb(137, 137, 137)";
humo4.arc(335, 495, 23, 0, 2*Math.PI, true);
humo4.fill();

humo4.beginPath();
humo4.fillStyle = "rgb(137, 137, 137)";
humo4.arc(395, 470, 30, 0, 2*Math.PI, true);
humo4.fill();

humo4.beginPath();
humo4.fillStyle = "rgb(137, 137, 137)";
humo4.arc(370, 495, 20, 0, 2*Math.PI, true);
humo4.fill();

humo4.beginPath();
humo4.fillStyle = "rgb(137, 137, 137)";
humo4.arc(410, 435, 20, 0, 2*Math.PI, true);
humo4.fill();

humo4.beginPath();
humo4.fillStyle = "rgb(137, 137, 137)";
humo4.arc(420, 410, 20, 0, 2*Math.PI, true);
humo4.fill();

humo4.beginPath();
humo4.fillStyle = "rgb(137, 137, 137)";
humo4.arc(425, 380, 35, 0, 2*Math.PI, true);
humo4.fill();

humo4.beginPath();
humo4.fillStyle = "rgb(137, 137, 137)";
humo4.arc(560, 430, 40, 0, 2*Math.PI, true);
humo4.fill();

humo4.beginPath();
humo4.fillStyle = "rgb(137, 137, 137)";
humo4.arc(520, 400, 40, 0, 2*Math.PI, true);
humo4.fill();

/*aqui ira la creacion del fue del cohete, debe estar por debajo del humo3*/
fuegoR.fillStyle = "rgb(230, 126, 52)";
fuegoR.fillRect(425, 223, 18, 120);

fuegoR.fillStyle = "rgb(230, 126, 52)";
fuegoR.fillRect(450, 228, 18, 120);

fuegoR.fillStyle = "rgb(241, 183, 58)";
fuegoR.fillRect(443, 228, 18, 120);

fuegoR.fillStyle = "rgb(255, 231, 47)";
fuegoR.fillRect(429, 227, 10, 120);

fuegoR.fillStyle = "rgb(255, 231, 47)";
fuegoR.fillRect(447, 228, 10, 120);

/*este es el humo3 va antes del humo1 por que la idea es que quede debajo de humo1*/
humo3.beginPath();
humo3.fillStyle = "rgb(175, 175, 173)";
humo3.arc(475, 450, 55, 0, 2*Math.PI, true);
humo3.fill();

humo3.beginPath();
humo3.fillStyle = "rgb(175, 175, 173)";
humo3.arc(425, 465, 25, 0, 2*Math.PI, true);
humo3.fill();

humo3.beginPath();
humo3.fillStyle = "rgb(175, 175, 173)";
humo3.arc(460, 380, 45, 0, 2*Math.PI, true);
humo3.fill();

humo3.beginPath();
humo3.fillStyle = "rgb(175, 175, 173)";
humo3.arc(435, 350, 25, 0, 2*Math.PI, true);
humo3.fill();

humo3.beginPath();
humo3.fillStyle = "rgb(175, 175, 173)";
humo3.arc(460, 320, 35, 0, 2*Math.PI, true);
humo3.fill();

humo3.beginPath();
humo3.fillStyle = "rgb(175, 175, 173)";
humo3.arc(430, 325, 10, 0, 2*Math.PI, true);
humo3.fill();

humo3.beginPath();
humo3.fillStyle = "rgb(175, 175, 173)";
humo3.arc(440, 305, 20, 0, 2*Math.PI, true);
humo3.fill();

humo3.beginPath();
humo3.fillStyle = "rgb(175, 175, 173)";
humo3.arc(445, 285, 15, 0, 2*Math.PI, true);
humo3.fill();

humo3.beginPath();
humo3.fillStyle = "rgb(175, 175, 173)";
humo3.arc(470, 285, 15, 0, 2*Math.PI, true);
humo3.fill();

humo3.beginPath();
humo3.fillStyle = "rgb(175, 175, 173)";
humo3.arc(455, 265, 17, 0, 2*Math.PI, true);
humo3.fill();

humo3.beginPath();
humo3.fillStyle = "rgb(175, 175, 173)";
humo3.arc(445, 250, 5, 0, 2*Math.PI, true);
humo3.fill();

humo3.beginPath();
humo3.fillStyle = "rgb(175, 175, 173)";
humo3.arc(453, 248, 5, 0, 2*Math.PI, true);
humo3.fill();

humo3.beginPath();
humo3.fillStyle = "rgb(175, 175, 173)";
humo3.arc(448, 244, 5, 0, 2*Math.PI, true);
humo3.fill();

humo3.beginPath();
humo3.fillStyle = "rgb(175, 175, 173)";
humo3.arc(455, 244, 7, 0, 2*Math.PI, true);
humo3.fill();

humo3.beginPath();
humo3.fillStyle = "rgb(175, 175, 173)";
humo3.arc(455, 238, 5, 0, 2*Math.PI, true);
humo3.fill();

/*creando el humo1, utilize circulos*/
humo1.beginPath();
humo1.fillStyle = "rgb(197, 197, 197)";
humo1.arc(600, 550, 140, 0, 2*Math.PI, true);
humo1.fill();

humo1.beginPath();
humo1.fillStyle = "rgb(197, 197, 197)";
humo1.arc(510, 430, 40, 0, 2*Math.PI, true);
humo1.fill();

humo1.beginPath();
humo1.fillStyle = "rgb(197, 197, 197)";
humo1.arc(500, 390, 20, 0, 2*Math.PI, true);
humo1.fill();

humo1.beginPath();
humo1.fillStyle = "rgb(197, 197, 197)";
humo1.arc(435, 537, 70, 0, 2*Math.PI, true);
humo1.fill();

humo1.beginPath();
humo1.fillStyle = "rgb(197, 197, 197)";
humo1.arc(260, 470, 45, 0, 2*Math.PI, true);
humo1.fill();

/*creando el humo2 siempre con las mismas propiedades*/
humo2.beginPath();
humo2.fillStyle = "rgb(240, 380, 239)";
humo2.arc(680, 500, 40, 0, 2*Math.PI, true);
humo2.fill();

/*aqui se comienza a poner un poco complicado, vamos con la creacion del cohete*/

/*crearemos los escapes que seran unos triangulos los cuales seran cubiertos por la parte blanca y naranja de la nave, recuerden que canvas trabaja en capas*/
cohete.fillStyle="rgb(150,150,150)";
cohete.beginPath();
/*el punto de inicio del triangulo(primer vertice)*/
cohete.moveTo(425, 223);
/*segundo vertice*/
cohete.lineTo(443,223);
/*tercer vertice*/
cohete.lineTo(434,177);
/*punto de finalizacion(debe ser el mismo que el primer punto)*/
cohete.lineTo(425,223);
cohete.fill();

cohete.fillStyle="rgb(150,150,150)";
cohete.beginPath();
cohete.moveTo(430,227);
cohete.lineTo(440,227);
cohete.lineTo(433,150);
cohete.lineTo(429,227);
cohete.fill();

cohete.fillStyle="rgb(130,130,130)";
cohete.beginPath();
cohete.moveTo(436,227);
cohete.lineTo(440,227);
cohete.lineTo(436,210);
cohete.lineTo(436,227);
cohete.fill();

cohete.fillStyle="rgb(150,150,150)";
cohete.beginPath();
cohete.moveTo(443, 228);
cohete.lineTo(468,228);
cohete.lineTo(456,210);
cohete.lineTo(443,228);
cohete.fill();

/*comenzamos con la nave, la parte blanca donde van los astronautas xD*/
cohete.fillStyle = "rgb(243, 243, 243)";
cohete.fillRect(425, 145, 18, 70);

cohete.beginPath();
cohete.moveTo(425, 200);
cohete.lineTo(415,215);
cohete.lineTo(425,210);
cohete.fill();

cohete.beginPath();
cohete.moveTo(425, 200);
cohete.lineTo(417,210);
cohete.lineTo(415,215);
cohete.lineTo(425,200);
cohete.fill();

cohete.fillStyle = "rgb(0, 0, 0)";
cohete.fillRect(440, 145, 3, 70);

/*una de los mejores metodos para el dibujo en canvas seguramente es el bezierCurveTo que imita a la pluma en las herramientas de disenio 
grafico, bezierCurveTo (cp1x, cp1y, cp2x, cp2y, x, y)  añade el punto dado al trazado actual, conectado con el anterior mediante una curva 
Bèzier cúbica con los puntos de control especificados.*/
cohete.fillStyle = "rgb(243, 243, 243)";
cohete.beginPath();
cohete.moveTo(425, 145);
cohete.bezierCurveTo(433, 125, 443, 125, 443, 145);
cohete.fill();

/*lineas negras del cohete*/
cohete.lineWidth=5;
cohete.beginPath();
cohete.moveTo(437, 132.5);
cohete.bezierCurveTo(435.5, 132, 440, 130, 440.5, 145);
cohete.stroke();

cohete.fillStyle = "rgb(0, 0, 0)";
cohete.fillRect(438, 144, 5, 5);

cohete.fillStyle = "rgb(0, 0, 0)";
cohete.fillRect(428, 138, 2, 8);
/*pequenio triangulo negro en la cabina de los astronautas*/
cohete.fillStyle="rgb(0, 0, 0)";
cohete.beginPath();
cohete.moveTo(428, 138);
cohete.lineTo(430,138);
cohete.lineTo(430,135);
cohete.fill();

/*parte naranja del cohete que son unos tanques contendores*/
cohete.fillStyle = "rgb(231, 150, 87)";
cohete.fillRect(445, 130, 22, 85);

cohete.beginPath();
cohete.fillStyle = "rgb(231, 150, 87)";
cohete.arc(456, 128, 11, 0, 2*Math.PI, true);
cohete.fill();

cohete.fillStyle = "rgb(231, 150, 87)";
cohete.fillRect(450, 215, 12, 5);

cohete.fillStyle="rgb(231, 150, 87)";
cohete.beginPath();
cohete.moveTo(445, 215);
cohete.lineTo(450,220);
cohete.lineTo(450,215);
cohete.fill();

cohete.fillStyle="rgb(231, 150, 87)";
cohete.beginPath();
cohete.moveTo(462, 215);
cohete.lineTo(462,220);
cohete.lineTo(467,215);
cohete.fill();


/*cohete blanco y delgado*/
cohete.fillStyle = "rgb(243, 243, 243)";
cohete.fillRect(452, 140, 5, 90);

cohete.fillStyle = "rgb(243, 243, 243)";
cohete.beginPath();
cohete.moveTo(452, 140);
cohete.lineTo(457,140);
cohete.lineTo(455,135);
cohete.lineTo(452,140);
cohete.fill();

cohete.fillStyle = "rgb(243, 243, 243)";
cohete.beginPath();
cohete.moveTo(450, 235);
cohete.lineTo(459,235);
cohete.lineTo(455,220);
cohete.lineTo(450,235);
cohete.fill();

/*listo! ahora para finalizar escribire mi nombre como autor siempre en canvas!*/
cohete.fillStyle = "rgb(0, 0, 0, 0.1)";
cohete.font = '22px "Tahoma"';
cohete.fillText("Viktor Carranza", 30, 40);

cohete.font = '14px "Tahoma"';
cohete.fillText("https://github.com/Vktor", 33, 60);
cohete.fillText("@VktorCarranza", 33, 80);