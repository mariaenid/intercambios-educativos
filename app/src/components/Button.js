import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const ButtonStyled = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  align-items: center;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
class Button extends React.Component {
  static PropTypes = {
    label: PropTypes.string,
    handleClick: PropTypes.func
  };

  render() {
    // This syntax ensures `this` is bound within handleClick
    const { label, handleClick } = this.props;

    return (
      <ButtonStyled primary onClick={handleClick}>
        {label}
      </ButtonStyled>
    );
  }
}

export default Button;
