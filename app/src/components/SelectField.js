import React  from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types';

class SelectField extends React.Component {
    static PropTypes = {
        label: PropTypes.string,
        options: PropTypes.array,
        defaultValue: PropTypes.object,
        handleChange: PropTypes.func,
        type: PropTypes.string
    }

    groupBadgeStyles = {
        backgroundColor: '#EBECF0',
        borderRadius: '2em',
        color: '#172B4D',
        fontSize: 12,
        fontWeight: 'normal',
        lineHeight: '1',
        minWidth: 1,
        padding: '0.16666666666667em 0.5em',
        textAlign: 'center',
    };

    groupStyles = {
        'width': '80%'
    };

    formatGroupLabel = data => (
        <div>
            <span>{data.label}</span>
            <span style={this.groupBadgeStyles}>{data.options.length}</span>
        </div>
    );

    render(){
        const { label, options, defaultValue, handleChange } = this.props;

        return(
            <div style={this.groupStyles}>
              <label>{label}</label>
              <Select
                defaultValue={defaultValue}
                options={options}
                onChange={handleChange}
                formatGroupLabel={this.formatGroupLabel}
              />
            </div>
        );
    }

}

export default SelectField;