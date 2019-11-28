import React from "react";

export default class RegistrarOng extends React.Component {
    state = {
        form:{
            ongname:""
        },
    }
  handleSubmit = e => {};
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3>Formulario para registrar una ong</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Nombre de la ONG a registrar</label>
                <input
                  type="text"
                  className="form-control"
                  name="ongname"
                  onChange={this.handleChange}
                  value={this.state.form.ongname}
                  required
                />
              </div>
              <div className="form-group">
                <label>Nombre completo del representante legal</label>
                <input
                  type="text"
                  className="form-control"
                  name="namerepresentante"
                  onChange={this.handleChange}
                  value={this.state.form.namerepresentante}
                  required
                />
              </div>
              <div className="form-group">
                <label>Direccion</label>
                <input
                  type="text"
                  className="form-control"
                  name="direccion"
                  onChange={this.handleChange}
                  value={this.state.form.direccion}
                  required
                />
              </div>
              <div className="form-group">
                <label>Telefono de contacto</label>
                <input
                  type="text"
                  className="form-control"
                  name="telefono"
                  onChange={this.handleChange}
                  value={this.state.form.telefono}
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
