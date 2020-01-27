import React from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/styles";

import PropTypes from "prop-types";
import SideNavegation from "components/SideNavegation";
import Typography from "@material-ui/core/Typography";

import CertificateEditContainer from "containers/CertificateEditContainer";
import ConsorcioEditContainer from "./ConsorcioEditContainer";
import CompetenciasEditContainer from 'containers/CompetenciasEditContainer';

const styles = theme => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    // marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class EditContainer extends React.Component {

  renderForm = (key) =>
    key === 'certificados' ? <CertificateEditContainer /> : key === 'consorcios' ?<ConsorcioEditContainer />:  <CompetenciasEditContainer />;

  render() {
    const { classes, open } = this.props;
    const options = [{title: "Consorcios", key: "consorcios"}, {title: "Certificados", key: "certificados"}, {title: "Competencias", key: "competencias"}];
    const data = options.reduce((acc, {title, key}) => acc = {[key]: this.renderForm(key), ...acc}, {});

    return (
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
          <SideNavegation options={options} data={data}/>
        </Typography>
      </main>
    );
  }
}

EditContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool
};

export default withStyles(styles)(EditContainer);
