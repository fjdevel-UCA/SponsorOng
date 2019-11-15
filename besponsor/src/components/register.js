 import React, {Component} from 'react';

 
export default class register extends React.Component {
  render() {
    return (
        <div className="container">
          <div className="row">
              <h3>Registration</h3>
              <hr />
              <form action="" method="post">
    <div>
        <label for="name">Nombre Donante:</label>
        <input type="text" id="name" name="nombre_donante" />
    </div>
    <div>
        <label for="org">Organizacion a Financiar:</label>
        <input type="text" id="org" name="org_financiar"/>
    </div>
    <div>
        <label for="pasaport">Pasaporte:</label>
        <input type="text" id="pasaport" name="pasaporte"/>
    </div>
    <div>
        <label for="pais">Pais Origen:</label>
        <input type="text" id="pais" name="pais_origen"/>
    </div>
    <div>
        <label for="dir">Direccion Residencia:</label>
        <input type="text" id="dir" name="direccion"/>
    </div>
    <div>
        <label for="tel">Telefono Contacto:</label>
        <input type="text" id="tel" name="telefono"/>
    </div>
    <div>
        <label for="organizacion">Organizacion que Representa:</label>
        <input type="text" id="organizacion" name="org_presenta"/>
    </div>
    <div>
        <label for="mail">E-mail:</label>
        <input type="email" id="mail" name="user_email" />
    </div>
    
    
    <div class="button">
        <button type="submit">Send </button>
    </div>
</form>
            </div>
          </div>
    );
  }
}

