import React from "react";
import { useEffect,createRef } from "react";
import { connect } from "react-redux";

const Jugadores = ({jugadores,agregarTitular,agregarSuplente})=> {
    
    const gridJugadores = createRef()

    useEffect(()=> { 
        setScrollContainer()
        document.addEventListener('click', setScrollContainer)}, [])

//Tamano del grid
const setScrollContainer = (desktop = true) => {
    let container = gridJugadores.current
    if (container) {
      const generatedGrid = () => {
        let items = container.getElementsByClassName('jugador')
        let itemsLength = items.length
        let bp = window.matchMedia("(min-width: 640px)").matches ? window.matchMedia("(min-width: 1024px)").matches ? 4 : 2 : 1

        const getWidth = () => {
          let n = bp + (itemsLength > bp ? 0.3 : 0)
          return (itemsLength / n) * 100
        }
        return `
                display: grid;
                grid-template-columns: repeat(${itemsLength}, 225px);
                grid-gap: 1rem;
                width : ${getWidth()}%;
              `
      }
      let styles = !desktop && window.matchMedia("(min-width: 1024px)").matches ? `display: grid; grid-row-gap: 1rem;` : generatedGrid()
      container.setAttribute('style', styles)
    }
  }

return (
    <section>
        <h2>Jugadores</h2>
        <div className='contenedor-jugadores'>
            <div ref={gridJugadores} onClick={() => setScrollContainer.bind(this)}>
            {
                jugadores.map(j =>(
                    <article className='jugador' key={j.id}>
                        <img src={j.foto} alt={j.nombre}/>
                            <h3>{j.nombre}</h3>
                            <div>
                            <button onClick = {()=> agregarTitular(j)}>Titular</button>
                            <button onClick = {()=> agregarSuplente(j)}>Suplente</button>
                        </div>
                </article>
                ))
            }
            </div>
        </div>
    </section>
)
}

//convierte el componente en prop y lo puedo pasr a Jugadores 
const mapStateToProps = state => ({
    jugadores: state.jugadores,
});

//convierte las funciones en acciones para ser reidas y cambiar el estado
//ESTE DISPATCH {} ES UNA ACTION Y LA LLEVO A MI REDUCER 
const mapDispatchProps = dispatch => ({
    agregarTitular(jugador){
        dispatch({
            type:'AGREGAR_TITULAR',
            jugador,
        });
    },
    agregarSuplente(jugador){
        dispatch({
            type:'AGREGAR_SUPLENTE',
            jugador,
        });
    }
})

export default connect(mapStateToProps, mapDispatchProps)(Jugadores) //componente de orden superior

/*
connect recibe dos parametros. es una funcion de coneccion y recibe otra funcion.
la primera mapea lo del estado y lo convierte en propiedades, si no la uso puedo pasar un objeto vacio
por cada jugador que tenga hago un map y recorro el article
*/