import MenuBar from "components/MenuBar";
import React from "react";
import PropTypes from "prop-types";

class MainContainer extends React.Component {
  render() {
    const { handleDrawerOpen, handleDrawerClose, open } = this.props;

    return (
      <MenuBar
        title={process.env.REACT_APP_WEBSITE_NAME}
        navegacion={[{text: "Busqueda", to: "/"}, {text: "Registro", to: "/edit"}]}
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
    );
  }
}

MainContainer.propTypes = {
  handleDrawerOpen: PropTypes.func,
  handleDrawerClose: PropTypes.func,
  open: PropTypes.bool,
  navegacion: PropTypes.array
};

export default MainContainer;
