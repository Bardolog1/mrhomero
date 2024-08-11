import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import NavegacionDefault from './PlantillaDefault/NavegacionDefault'
import Spline from '../default/PlantillaDefault/prueba'


export default function Ingresar() {

  return (
    <div className="">
      <NavegacionDefault />
<<<<<<< HEAD
      <div className='container-fluid p-5 my-5 text-center border wipe-in-down' transition-style="in:wipe:up" style={{ borderRadius: '20px', width: '85%', boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.3)' }}>
=======
      <div className='container-fluid p-5 my-5 text-center border wipe-in-down' transition-style="in:circle:bottom-left" style={{ borderRadius: '20px', width: '85%', boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.3)' }}>
>>>>>>> e4e0345ca92af3276c90bb97b3ede8c02c073bfa
        <div className="row">
          <div className="col-12 col-sm-5 align-content-center align-items-center p-5" style={{ boxShadow: '0 0 10px 0 rgb(0, 0, 0, 0.2)' }}>
            <i className='display-1 bi bi-person-circle'></i>
            <div className="form-floating my-5">
              <input type="email" className="form-control" id="floatingInput" placeholder="email" />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating my-5">
              <input type="password" className="form-control" id="floatingInput" placeholder="Contraseña" />
              <label htmlFor="floatingInput">Contraseña</label>
            </div>
            <div className="text-center">
              <div className="d-flex justify-content-between my-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Recordarme
                  </label>
                </div>
                <Link to="/recuperar">¿Olvidaste tu contraseña?</Link>
              </div>
              <button className="btn btn-warning w-100 rounded-5 mb-2 py-2" onClick={() => {
                Swal.fire({
                  title: 'Iniciaste sesion',
                  text: 'Has iniciado sesion correctamente',
                  icon: 'success',
                  confirmButtonText: 'Continuar'
                })
              }}>Ingresar</button>
              <p className="text-center text-secondary"><small> ¿No tienes una cuenta? <Link to="/registrar">Registrarte</Link> </small></p>
            </div>
          </div>
<<<<<<< HEAD
          <div className="d-none d-sm-flex col-sm-7">
            <div className="my-auto text-center w-100">
              <Spline />
              <h1 className='text-end'>Mr. Homero</h1>
              <p className='text-end'>Si lo que buscas es sabor Mr. Homero es el mejor</p>
=======
          <div className="d-none d-sm-flex col-sm-7 text-center homero-font">
            <div className="row">
              <div className="col-12">
                <h1 className='display-4 text-warning'>Mr. Homero</h1>
                <p className='fs-3'>¡Si lo que buscas es sabor Mr. Homero es el mejor!</p>
              </div>
              <div className="col-12">
                <Spline />
              </div>
>>>>>>> e4e0345ca92af3276c90bb97b3ede8c02c073bfa
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
