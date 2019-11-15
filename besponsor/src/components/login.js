import React, { Component } from 'react';


export default class login extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {
        return (
                <main role="main" class="container my-auto">
            <div class="row">
            <div id="login" class="col-lg-4 offset-lg-4 col-md-10 offset-md-3 col-12">
                <h2 class="text-center">Bienvenido</h2>
                <img class="img-fluid mx-auto d-block rounded"
                    src="http://emser.es/wp-content/uploads/2016/08/usuario-sin-foto.png" width="100px" />

                <form>
                    <div class="form-group">
                        <label for="correo">Correo</label>
                        <input id="correo" name="correo"
                            class="form-control" type="email"
                            placeholder="Correo electrónico"></input>
                    </div>
                    <div class="form-group">
                        <label for="palabraSecreta">Contraseña</label>
                        <input id="palabraSecreta" name="palabraSecreta"
                            class="form-control" type="password"
                            placeholder="Contraseña"></input>
                    </div>

                    <div class="btn btn-default">
                        <button type="submit" class="btn btn-danger">Iniciar Sesion</button>
                    </div>
                    <div class="btn btn-default">
                        <button type="submit" class="btn btn-danger">Register</button>
                    </div>
                        </form>
                    </div>
                </div>

            </main>
 );
                    }
}
