import React from "react";
class Notificacion extends React.Component {
  handleClick = e =>{
    document.getElementById("notificacion").style.display = "none";
  }
  render() {
    return (
      <div id="notificacion" className={"alert alert-dismissible fade fixed-top "+this.props.clases} role="alert">
      {this.props.mensaje}
      <button type="button" className="close" onClick={this.handleClick}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    );
  }
}
export default Notificacion;