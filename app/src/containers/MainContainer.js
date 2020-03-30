import MenuBar from "components/MenuBar";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {fetchEntities} from '../actions';
import { useDispatch } from "react-redux";

const MainContainer = (props) => {
    const { handleDrawerOpen, handleDrawerClose, open } = props;
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchEntities());
    },[])

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

MainContainer.propTypes = {
  handleDrawerOpen: PropTypes.func,
  handleDrawerClose: PropTypes.func,
  open: PropTypes.bool,
  navegacion: PropTypes.array
};

export default MainContainer;