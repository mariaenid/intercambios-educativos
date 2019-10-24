
import React from "react";
import PropTypes from 'prop-types';

import InputField from 'components/InputField';
import Button from "components/Button";
import SelectField from "components/SelectField";

class SimpleForm extends React.Component {

    handleChange = event => {
        // si sabes el name, sabes el field a modificar
        if(event.type === 'select') {
          console.log('event', event);
          return event;
        }

        const {type, checked, value, name} =  event.target;
        console.log("Hola", type, checked, value, name)
    }

    handleClick() {
        console.log('this is:', this);
    }

    colourOptions = [
      { value: 'ocean', label: 'Ocean', type: 'select' },
      { value: 'blue', label: 'Blue', type: 'select' },
      { value: 'purple', label: 'Purple', type: 'select' },
      { value: 'red', label: 'Red', type: 'select' },
      { value: 'orange', label: 'Orange', type: 'select'},
      { value: 'yellow', label: 'Yellow', type: 'select' },
      { value: 'green', label: 'Green', type: 'select' },
      { value: 'forest', label: 'Forest', type: 'select' },
      { value: 'slate', label: 'Slate', type: 'select' },
      { value: 'silver', label: 'Silver', type: 'select' },
    ];

    groupStyles = {
      'width': '80%',
      'margin-top': '20px',
      'margin-bottom': '20px',
      'align-text': 'center'
    };

    render() {
      return(
        <div className="container">
            <h4>
              Registro de Competencia Academica
            </h4>
            <InputField
              style={this.groupStyles}
              label="Name"
              type="text"
              name="nombre"
              handleChange={this.handleChange}
            />
            <InputField
              style={this.groupStyles}
              label="Identificacion"
              type="text"
              name="identificacion"
              handleChange={this.handleChange}
            />
            <SelectField
              style={this.groupStyles}
              label="TypeOptions"
              type="select"
              options={this.colourOptions}
              defaultValue={this.colourOptions[0]}
              handleChange={this.handleChange}
            />
            <div className="col-12">
              <Button
                label={"Submit"}
                handleClick={(e) => this.handleClick(e)}
              />
            </div>
        </div>
      )};
  }

export default SimpleForm;