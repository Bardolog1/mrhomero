import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import '../../css/style.css'
import img from '/img.png'
import Dropdown from '../../Plantilla/Dropdown'
import Swal from 'sweetalert2'
export default function Pedidos() {
  function card() {
    return (
      <div className="card text-center">
        <img src={img} height={75} className="card-img-top border-bottom border-1" alt="..." />
        <div className="card-body">
          <h5 className="card-title fs-sm-6">Categoria</h5>
        </div>
      </div>
    )
  }

  function cardProduct() {
    return (
      <tbody>
        <tr>
          <td>#</td>
          <td>Hamburguesa</td>
          <td>30.000</td>
          <td>-25%</td>
          <td><button type="button" className='btn btn-outline-danger' onClick={() => {
            Swal.fire({
              title: '¿Eliminar pedido?',
              text: '¡Se eliminara el pedido!',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: '¡Si, eliminar!',
              cancelButtonText: 'Cancelar'
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: '¡Eliminado!',
                  text: 'El pedido fue eliminado correctamente.',
                  icon: 'success',
                  confirmButtonText: "Hecho",
                  confirmButtonColor: '#FFC107'
                })
              }
            })
          }}><i className='bi bi-trash '></i></button></td>
        </tr>
      </tbody>
    )
  }

  function tr() {
    return (
      <tr>
        <th scope="row">#</th>
        <th scope="row">Bryam</th>
        <th scope="row">Castañeda Cuervo</th>
        <th scope="row">bryamccuervo2004@gmail.com</th>
        <th scope="row"><i className="bi bi-plus-circle btn btn-outline-success"></i></th>
      </tr>
    )
  }

  function card2() {
    return (
      <div className="card text-center">
        <img src={img} height={80} width={80} className="card-img-top border-bottom border-1" alt="..." />
        <div className="card-body">
          <h5 className="card-title fs-sm-6">Producto</h5>
        </div>
      </div>
    )
  }

  return (
    <div className='container'>
      <div className='container d-block d-sm-flex d-md-flex'>
        <h1 className="mt-3 mt-sm-5">Pedidos</h1>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          scrollbar={{ hide: true }}
          modules={[Scrollbar]}
          className="mySwiper p-2 w-100 ms-5"
        >
          <SwiperSlide>{card()}</SwiperSlide>
          <SwiperSlide>{card()}</SwiperSlide>
          <SwiperSlide>{card()}</SwiperSlide>
          <SwiperSlide>{card()}</SwiperSlide>
          <SwiperSlide>{card()}</SwiperSlide>
          <SwiperSlide>{card()}</SwiperSlide>
        </Swiper>
      </div>
      <div className='container border border-2 border-secondary p-3 mt-4'>
        <div className='row'>
          <div className='col'>
            <div className='row row-cols-auto'>
              <div className='col mt-2'>
                {card2()}
              </div>
              <div className='col mt-2'>
                {card2()}
              </div>
              <div className='col mt-2'>
                {card2()}
              </div>
              <div className='col mt-2'>
                {card2()}
              </div>
              <div className='col mt-2'>
                {card2()}
              </div>
              <div className='col mt-2'>
                {card2()}
              </div>
              <div className='col mt-2'>
                {card2()}
              </div>
              <div className='col mt-2'>
                {card2()}
              </div>
              <div className='col mt-2'>
                {card2()}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className='d-flex justify-content-between align-items-center'>
                <h5>(Nombre del usuario)</h5>
                <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#modalAddClient">
                  <i className="bi bi-plus-circle">  Añadir cliente</i>
                </button>
                {/* Modal añadir cliente*/}
                <div className="modal fade" id="modalAddClient" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Añadir cliente</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className="d-flex justify-content-between align-items-center pb-2">
                          <h4>Clientes</h4>
                          <Dropdown placeholder={"Buscar..."} icon={"bi bi-search"} title={"Atributo cliente"} actions={"Buscar por email"} actions2={"Buscar por letra"} actions3={"Buscar por puntos"} actions4={"Buscar por documento"} />
                        </div>
                        <div className='table-responsive border border-1'>
                          <table className='table table-striped table-hover'>
                            <thead>
                              <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombres</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Email</th>
                                <th scope="col">Añadir</th>
                              </tr>
                            </thead>
                            <tbody>
                              {tr()}
                              {tr()}
                              {tr()}
                              {tr()}
                              {tr()}
                              {tr()}
                              {tr()}
                              {tr()}
                              {tr()}
                              {tr()}
                              {tr()}
                              {tr()}
                              {tr()}
                              {tr()}
                              {tr()}
                              {tr()}
                              {tr()}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-outline-success">Entendido</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container pt-3">
                <div className="row">
                  <div className="col">
                    <div className="table-responsive" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                      <table className="table table-hover border border-1">
                        <thead>
                          <tr>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Descuento</th>
                            <th scope="col">Eliminar</th>
                          </tr>
                        </thead>
                        {cardProduct()}
                        {cardProduct()}
                        {cardProduct()}
                        {cardProduct()}
                        {cardProduct()}
                        {cardProduct()}
                        {cardProduct()}
                        {cardProduct()}
                        {cardProduct()}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container text-center">
                <h3 className='text-end p-3'>Total: $ 99999</h3>
                <button type='button' className='btn btn-success w-50 ms-auto p-2' data-bs-toggle="modal" data-bs-target="#modalSale"><i className='bi bi-cart-check fs-5'>  Realizar venta</i></button>
                {/*Modal ralizar venta*/}
                <div className="modal fade" id="modalSale" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Pedidos</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className="container">
                          <h3>Pedido #999</h3>
                          <div className="row">
                            <div className="col pt-3">
                              {/*Select sobre el tipo de pago*/}
                              <h3 className='text-start pb-2 ms-3'>Método de pago</h3>
                              <select className='form-select form-select-sm w-75 fs-5 ms-3' aria-label='Small'>
                                <option selected>Efectivo</option>
                                <option value='1'>Tarjeta</option>
                                <option value='2'>Credito</option>
                                <option value='3'>Debito</option>
                              </select>

                              {/*Botones de Cantidad de precio*/}
                              <div className='col pt-3 justify-content-start text-start'>
                                <div className='pt-3 ms-3'>
                                  <button className='btn btn-primary w-75 fs-4'><i className="bi bi-currency-dollar"></i> 10.000</button>
                                </div>
                                <div className='pt-3 ms-3'>
                                  <button className='btn btn-primary w-75 fs-4'><i className="bi bi-currency-dollar"></i> 20.000</button>
                                </div>
                                <div className='pt-3 ms-3'>
                                  <button className='btn btn-primary w-75 fs-4'><i className="bi bi-currency-dollar"></i> 30.000</button>
                                </div>
                                <div className='pt-3 ms-3'>
                                  <button className='btn btn-primary w-75 fs-4'><i className="bi bi-currency-dollar"></i> 50.000</button>
                                </div>
                                <div className='pt-3 ms-3'>
                                  <button className='btn btn-primary w-75 fs-4'><i className="bi bi-currency-dollar"></i> 100.000</button>
                                </div>
                              </div>
                            </div>
                            <div className="col pt-5">
                              {/*Input de cantidad a pagar*/}
                              <div className="input-group mb-3 pb-2">
                                <span className="input-group-text">Cantidad a pagar</span>
                                <input type="number" className="form-control" aria-label='Amount' step={50} min={0} />
                                <span className="input-group-text">$</span>
                                {/*Input de cantidad a recibir*/}
                              </div> <div className="input-group mb-3">
                                <span className="input-group-text">Cantidad a recibir </span>
                                <input type="number" className="form-control" aria-label='Amount' />
                                <span className="input-group-text">$</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                          <button type="button" className="btn btn-primary">Pedidos</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
