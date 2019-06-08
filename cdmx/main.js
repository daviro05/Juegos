
const countdown = document.querySelector(".countdown");
const mensaje = document.querySelector(".mensaje");
const titulo = document.querySelector(".description");

var fotos = ["1.jpg", "2.jpg", "3.jpg","4.jpg", "5.jpg", "6.jpg","7.jpg",
             "8.jpg", "9.jpg","10.jpg", "11.jpg", "12.jpg","13.jpg", "14.jpg", 
             "15.jpg","16.jpg", "17.jpg", "18.jpg"];

// Dia del viaje
const launchDate = new Date("Jul 19, 2019 23:25:00").getTime();

const intvl = setInterval(() => {
  const now = new Date().getTime();

  const daysLeft = launchDate - now;

  const days = Math.floor(daysLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (daysLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((daysLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((daysLeft % (1000 * 60)) / 1000);

  countdown.innerHTML = `
    <div><strong>${days}</strong><span>Días</span></div>
    <div><strong>${hours}</strong><span>Horas</span></div>
    <div><strong>${minutes}</strong><span>Minutos</span></div>
    <div><strong>${seconds}</strong><span>Seg</span></div>
  `;

  if(days > 30)
    document.getElementById("imgmex").src="./imagenes/"+fotos[0];
  else
    document.getElementById("imgmex").src="./imagenes/"+fotos[days-1];

  if(days <0 && hours<0 && minutes <0 && seconds<0){
    clearInterval(intvl)
    countdown.innerHTML = `¡EL VIAJE PERFECTO!`;
    titulo.innerHTML=`Gracias por cada aventura a tu lado`;
    mensaje.innerHTML=``;
    document.getElementById("imgmex").src="./imagenes/"+fotos[0];
  }
}, 1000);