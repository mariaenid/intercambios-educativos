import React from "react";
import PropTypes from 'prop-types';

class InputField extends React.Component {
    static propTypes = {
      handleChange: PropTypes.func,
      label: PropTypes.string,
      type: PropTypes.string,
      name: PropTypes.string,
      value: PropTypes.string
    };

    render() {
      const { handleChange, label, name, type, value } = this.props;
      return(
        <div className="row">
          <div className="col-3">
            <label> {label} </label>
          </div>
          <div className="col-9">
            <input
              type={type}
              name={name}
              value={value}
              onChange={handleChange}
            />
          </div>
        </div>
      )};
  }

export default InputField;