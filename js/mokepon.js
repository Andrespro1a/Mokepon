let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego()
{
let sectionSeleccionarReiniciar = document.getElementById("boton-reiniciar")
    sectionSeleccionarReiniciar.style.display = "none"
    
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let botonMascotajugador = document.getElementById("boton-mascota")
    let AtaqueJugadorMascota =document.getElementById("imagen-jugador")
    let AtaqueJugadorEnemigo =document.getElementById("mascota-enemigo")
    botonMascotajugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego   = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click",ataqueFuego )

    let botonAgua    = document.getElementById("boton-agua")
    botonAgua.addEventListener("click",ataqueAgua )

    let botonTierra  = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click",ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click",rieniciarJuego)

}

function seleccionarMascotaJugador()
{
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"
    
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"

    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    let AtaqueJugadorMascota =document.getElementById("imagen-jugador")
   

    if (inputHipodoge.checked)
    {
        spanMascotaJugador.innerHTML = "Hipodoge"
        AtaqueJugadorMascota.src="./js/h.png"    
    }

    else if (inputCapipepo.checked)
    {
        spanMascotaJugador.innerHTML = "Capipepo"
        AtaqueJugadorMascota.src="./js/c.png"
    }

    else if (inputRatigueya.checked)
    {
        spanMascotaJugador.innerHTML = "Ratigueya"
        AtaqueJugadorMascota.src="./js/r.png"
    }

    else
    {
        alert("Selecciona una mascota:)")
    }

    seleccionarMascotaEnemigo() 

}

function seleccionarMascotaEnemigo() 
{
  let AtaqueJugadorEnemigo =document.getElementById("imagen-enemigo")
  let mascotaAlatorioEnemigo = aleatorio(1,3)
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

  if (mascotaAlatorioEnemigo == 1 )
  {
    spanMascotaEnemigo.innerHTML = "Hipodoge "
    AtaqueJugadorEnemigo.src="./js/h.png"
  }

  else if (mascotaAlatorioEnemigo == 2)
  {
    spanMascotaEnemigo.innerHTML = "Capipepo"
    AtaqueJugadorEnemigo.src="./js/c.png" 
  }

  else 
  {
    spanMascotaEnemigo.innerHTML = "Ratigueya" 
    AtaqueJugadorEnemigo.src="./js/r.png" 
  }

}

function ataqueFuego()
{
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueAgua()
{
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

function ataqueTierra()
{
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo()
{
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1)
    {
        ataqueEnemigo = "FUEGO"
    }

    else if (ataqueAleatorio == 2)
    {
        ataqueEnemigo = "AGUA"
    }

    else 
    {
        ataqueEnemigo = "TIERRA"
    }

    combate()
}

function combate()
{
    let spanVidasJugador = document.getElementById("vidas-jugadas")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
    

    

    if (ataqueEnemigo == ataqueJugador)
   {
    crearMensaje("EMPATE 😐😐")
   }
     
   else if ((ataqueJugador == "FUEGO"  && ataqueEnemigo == "TIERRA") || (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") || (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"))
   {
    crearMensaje(" Ganaste 😎 ")
    vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo 
   }
   
   else
   {
    crearMensaje("PERDISTE INTENTA DE NUEVO ☹️☹️")
    vidasJugador--
    spanVidasJugador.innerHTML = vidasJugador
   }

   revisarVidas()
}

function revisarVidas()
{
    if (vidasEnemigo == 0)
    {
        alert("FELICITACIONES! Ganaste SIUU 😎😎🎉")
        crearMensajeFinal("FELICITACIONES! Ganaste SIUU 😎😎🎉")
    }

    else if (vidasJugador == 0)
    {
        alert("PERDISTE WEY NOOooOOooO 😴😴")
        crearMensajeFinal("PERDISTE WEY NOOooOOooO 😴😴")
    }
}

function crearMensaje(resultado)
{
   let sectionMensajes  = document.getElementById("resultado")
   let ataqueDeljugador = document.getElementById("ataque-del-jugador")
   let ataqueDelEnemigo = document.getElementById("ataque-del-enemigo")

   let nuevoAtaqueDelJugador = document.createElement("p")
   let nuevoAtaqueDelEnemigo = document.createElement("p")

   sectionMensajes.innerHTML = resultado
   nuevoAtaqueDelJugador.innerHTML = ataqueJugador
   nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
   
   
   ataqueDeljugador.appendChild(nuevoAtaqueDelJugador)
   ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal)
{
   let sectionSeleccionarReiniciar = document.getElementById("boton-reiniciar")
    sectionSeleccionarReiniciar.style.display = "block"
   
   let sectionMensajes = document.getElementById("resultado")
   sectionMensajes = resultadoFinal 
   
   let botonFuego   = document.getElementById("boton-fuego")
   botonFuego.disabled = true

   let botonAgua    = document.getElementById("boton-agua")
   botonAgua.disabled = true

   let botonTierra  = document.getElementById("boton-tierra")
   botonTierra.disabled = true

    

}

function rieniciarJuego()
{
  location.reload()
}

function aleatorio(min, maxi)
{
   var resultado;
   resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
   return resultado;
}
 
window.addEventListener("load", iniciarJuego)

