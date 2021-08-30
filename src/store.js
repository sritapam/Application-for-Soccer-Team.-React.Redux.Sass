//aca almaceno la data de la app.
import { createStore } from 'redux';

// createStore recibe como parametro una funcion reductora
//action te da los cambios que queremos hacer al estado y asi retornarlo

const initialstate= {
    jugadores: [
        {
            id: 1,
            nombre: "Ivi",
            foto: "https://lh3.googleusercontent.com/hhuhaAyAq6FPQH5--yaYpcebs7RVa1o04tfrKhNZ6al4mBLogh2yWyXH2KwfOBWjUyGBIg=s85"
        },
        {
            id: 2,
            nombre: "Yani",
            foto: "https://lh3.googleusercontent.com/NV4ZspBsuF9lUa4FoqqMPOtVGt0PBorDbYiQ3zKFXGj6gcy5CEXOHZJ8gdvrJ93CP8XIYg=s85"
        },
        {
            id: 3,
            nombre: "Migue",
            foto: "https://lh3.googleusercontent.com/tMpblaGYhXGFPEdkKZHSqik36RPoEa8qckfoVf2McT0PffIImSC1-FPqLVr_QjtMLNCQWA=s85"
        },
        {
            id: 4,
            nombre: "Carlos",
            foto: "https://lh3.googleusercontent.com/ZqLd-uxTPRu-pROgMstjN0h5ulkM7OCvksq8nsqoSCuxZ_meHLPNSZxtq-8F_D03zr3NoA=s85"
        },
        {
            id: 5,
            nombre: "Jesuan",
            foto: "https://lh3.googleusercontent.com/xuVhVZjQurIGsXS_tpWAlBZT4oVrljR62vwICOyNFjz_q02eNDcdfjmHLTeoZixuhrBvcA=s85"
        },
        {
            id: 6,
            nombre: "Martin",
            foto: "https://lh3.googleusercontent.com/tkK51sgw4D0sogG0_65cKmOQyOoJkpbw2AQov7zPGmw4ipqR2hwqWxL2c3B370jh9CId=s85"
        },
        {
            id: 7,
            nombre: "Ana",
            foto: "https://lh3.googleusercontent.com/NGYBw_2p628-0xo6AAkj7v_SAeJnhLrKoAmpLtxbRbRgG6DbLkrM5fO2qYyVa19OAXyDug=s85"
        },
        {
            id: 10,
            nombre: "Pame",
            foto: "https://lh3.googleusercontent.com/4r1Lyk3h47ynbamTODaCW0UjBMA7-hONs4nwxgWK5lvOABdmlKbT6fGnh_u2grpRN5S_8A=s85"
        },
    ],
    titulares: [],
    suplentes:[],
}
const reducerEntrenador = (state = initialstate, action) => {
    if (action.type === 'AGREGAR_TITULAR'){
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j=> j.id !== action.jugador.id) //para que no se me repitan
        }
    }if (action.type === 'AGREGAR_SUPLENTE'){
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j=> j.id !== action.jugador.id) 
        }
    } if (action.type === 'QUITAR_TITULAR'){
        return{
            ...state,
            titulares: state.titulares.filter(j=> j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
            

    } if (action.type === 'QUITAR_SUPLENTE'){
        return{
            ...state,
            suplentes: state.suplentes.filter(j=> j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
            

    }
    
    return state
}



export default createStore(reducerEntrenador)