import React from 'react'
import Buscador from '../../components/Buscador'
import Swal from 'sweetalert2'
import img from '../../assets/img/img.png'


export default function Empleados() {
  function Empleado() {
    return (
      <div className="card p-2">
        <img src={img} height={200} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">Empleado</h3>
        </div>
        {/* boton de gestionar empleado*/}
        <button type="button" className="btn btn-warning ms-2" data-bs-toggle="modal" data-bs-target="#Gestionar"><i className="bi bi-plus-circle"></i> Gestionar</button>
        {/* Modal para gestionar Empleados */}
        <div className="modal fade" id="Gestionar" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog  modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Editar información Empleado</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-3">
                    <img src={img} height={200} className="card-img-top" alt="..." />
                  </div>
                  <div className="col row" >
                    <div className="col">
                      <label htmlFor="floatingInput">Nombre</label>
                      <input type="text" className="form-control my-2" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1"></input>
                      <label htmlFor="floatingInput">Telefono</label><input type="text" className="form-control my-2" placeholder="Telefono" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    <div className="col">
                      <label htmlFor="floatingInput">Email</label>
                      <input type="text" className="form-control my-2" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"></input>
                      <label htmlFor="floatingInput">Numero de documento</label>
                      <input type="text" className="form-control my-2" placeholder="Numero de documento" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    <div className="mt-2">
                      <label htmlFor="floatingInput">Fecha de ingreso</label>
                      <input disabled type="date" name="" id="" className="form-control my-2" />
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                  <button type="button" className="btn btn-warning" onClick={() => {
                    Swal.fire({
                      title: 'Empleado editado correctamente.',
                      text: 'El empleado fue editado correctamente.',
                      icon: 'success',
                      confirmButtonText: 'Hecho'
                    })
                  }}>Guardar cambios</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="container ps-2">
      <div className="row mt-3 ">
        <h1 className="col mt-2 ms-5 ">Empleados
        </h1>
        <div className="col d-flex justify-content-end align-items-center">
          <Buscador icon="bi bi-search" placeholder="Buscar" />
          <button type="button" className="btn btn-success ms-2" data-bs-toggle="modal" data-bs-target="#Añadir"><i className="bi bi-plus-circle"></i> Añadir</button>

          {/* Modal para añadir Empleados */}
          <div className="modal fade" id="Añadir" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog  modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo Empleado</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-3">
                      <img src={img} height={200} className="card-img-top" alt="..." />
                    </div>
                    <div className="col row" >
                      <div className="col">
                        <label htmlFor="floatingInput">Nombre</label>
                        <input type="text" className="form-control my-2" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1"></input>
                        <label htmlFor="floatingInput">Telefono</label><input type="text" className="form-control my-2" placeholder="Telefono" aria-label="Username" aria-describedby="basic-addon1"></input>
                      </div>
                      <div className="col">
                        <label htmlFor="floatingInput">Email</label>
                        <input type="text" className="form-control my-2" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"></input>
                        <label htmlFor="floatingInput">Numero de documento</label>
                        <input type="text" className="form-control my-2" placeholder="Numero de documento" aria-label="Username" aria-describedby="basic-addon1"></input>
                      </div>
                      <div className="mt-2">
                        <label htmlFor="floatingInput">Fecha de ingreso</label>
                        <input type="date" name="" id="" className="form-control my-2" />
                      </div>

                    </div>
                  </div>


                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-warning" onClick={() => {
                      Swal.fire({
                        title: 'Empleado añadido',
                        text: 'El empleado fue añadido correctamente.',
                        icon: 'success',
                        confirmButtonText: 'Hecho'
                      })
                    }}>Confirmar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row cols-2 mt-5 ms-2">
          <div className="col-4 my-2">
            {Empleado()}
          </div>
          <div className="col-4 my-2">
            {Empleado()}
          </div>
          <div className="col-4 my-2">
            {Empleado()}
          </div>
          <div className="col-4 my-2">
            {Empleado()}
          </div>
          <div className="col-4 my-2">
            {Empleado()}
          </div>
          <div className="col-4 my-2">
            {Empleado()}
          </div>
        </div>
      </div>
    </div>

  )
}
