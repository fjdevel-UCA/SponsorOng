import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";

class register extends Component {
    render() {
      return (
        <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edit Profile"
                content={
                    <form>
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "Nombre",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Ejem: Juan Perez",
                        },
                        {
                          label: "Telefono de contacto",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Ejem: 21222122",
                        },
                        {
                          label: "Documento de identificación",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Dui/Pasaporte"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-5", "col-md-7"]}
                      //Por el momento lo dejare como tipo texto, más tarde lo cambiare al componente para este input
                      properties={[
                        {
                          label: "País",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Seleccione su país de origen",
                        },
                        {
                          label: "Dirección de residencia",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Ejem: Calle Cienfuego, pasaje 20 #23, San Salvador ",
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "Organización que representa",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Teleton"
                        },
                        {
                          label: "E-mail",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "example@exa.com"
                        }
                      ]}
                    />  
                    <Button bsStyle="info" pullRight fill type="submit">
                      Registrarme
                    </Button>
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>     
                          
    );
}
}

export default register;
                