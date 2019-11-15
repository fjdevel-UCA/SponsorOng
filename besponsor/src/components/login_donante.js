import React, { Component } from 'react';


export default class login_donante extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {
        return (
                <main role="main" class="container my-auto">
            <div class="row">
            <div id="login" class="col-lg-4 offset-lg-4 col-md-10 offset-md-3 col-12">
                <img class="img-fluid mx-auto d-block rounded"
                    src="http://emser.es/wp-content/uploads/2016/08/usuario-sin-foto.png" width="100px" />
                     <h2 class="text-center">Inicio de Sesion</h2>

                <form>
                    <div class="form-group">
                        <label for="organizacion">Ingrese Nombre de la Organizacion</label>
                        <input id="nombre_org" name="organizacion"
                            class="form-control" type="text"
                            placeholder="Nombre Organizacion "></input>
                    </div>
                   

                    <div class="btn btn-default">
                        <button type="submit" class="btn btn-danger">Continuar</button>
                    </div>
                    <div class="btn btn-default">
                        <button type="submit" class="btn btn-danger">Registrar ONG</button>
                    </div>
                        </form>
                    </div>
                </div>

            </main>
 );
                    }
}
