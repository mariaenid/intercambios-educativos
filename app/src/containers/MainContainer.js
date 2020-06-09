import MenuBar from "components/MenuBar";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {fetchEntities} from '../actions';
import { useDispatch } from "react-redux";
import Bar from "components/Bar";

const MainContainer = (props) => {
    const { handleDrawerOpen, handleDrawerClose, open } = props;
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchEntities());
    },[])

    return (
      <React.Fragment>
        <MenuBar
          title={process.env.REACT_APP_WEBSITE_NAME}
          navegacion={[{text: "My Account", to: "/my_account"}, {text: "Search", to: "/"}, {text: "Register", to: "/edit"}]}
          handleDrawerOpen={handleDrawerOpen}
          open={open}
          handleDrawerClose={handleDrawerClose}
        />
      </React.Fragment>

  );
}

MainContainer.propTypes = {
  handleDrawerOpen: PropTypes.func,
  handleDrawerClose: PropTypes.func,
  open: PropTypes.bool,
  navegacion: PropTypes.array
};

export default MainContainer;