import React from "react";
import { connect } from "react-redux";

const Suplentes= ({suplentes, quitarSuplente})=>(
        <section>
           <h2>Suplentes</h2>
           <div className='banco'>
            {
                suplentes.map(j =>(
                    <article className='suplentes' key={j.id}>
                        <div>
                        <img src={j.foto} alt={j.nombre}/>
                        <button onClick={()=>{quitarSuplente(j)}}>X</button>
                        </div>
                        <p>{j.nombre}</p>
                    </article>
                ))
            }   
            </div> 
        </section>
)

const mapStateToProps = state => ({
    suplentes: state.suplentes,
});

const mapDispatchProps = dispatch => ({
    quitarSuplente(jugador){
       dispatch({
           type: 'QUITAR_SUPLENTE',
           jugador,
       }) 
    }
})

export default connect(mapStateToProps,mapDispatchProps)(Suplentes)