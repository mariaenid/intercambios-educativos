
import React from "react";
import PropTypes from 'prop-types';

import InputField from 'components/InputField';
import Button from "components/Button";
import SelectField from "components/SelectField";

class SimpleForm extends React.Component {

    handleChange = event => {
        // si sabes el name, sabes el field a modificar
        if(event.type === 'select') {
          [event.target] = event;
          this.props.handleChange(event);
        }

        this.props.handleChange(event);

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

    renderInput = (props) => {
      return(
        <InputField
        style={this.groupStyles}
        label={props.label}
        type="text"
        name={props.name}
        handleChange={this.handleChange}
      />)
    }

    renderSelect = ( props ) => {
      return(
        <SelectField
        style={this.groupStyles}
        label={props.label}
        type="select"
        options={props.options}
        defaultValue={props.defaultValue}
        handleChange={this.handleChange}
      />)
    }

    renderButton = ( props ) => {
      return(
        <div className="col-12">
          <Button
            label={props.label}
            handleClick={(e) => props.handleSubmit(e)}
          />
        </div>
      )

    }

    render() {
      const { typeField } = this.props;
      if(typeField === 'select') {
        return this.renderSelect(this.props);
      }

      if(typeField === 'button') {
        return this.renderButton(this.props);
      }

      return this.renderInput(this.props);

    }

  }

  SimpleForm.propTypes = {
    handleChange: PropTypes.func,
    label: PropTypes.string,
    name: PropTypes.string,
    typeField: PropTypes.string,
    handleSubmit: PropTypes.func,
    defaultValue: PropTypes.object,
    options: PropTypes.array,
    value: PropTypes.value
};

export default SimpleForm;