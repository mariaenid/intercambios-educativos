import React from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/styles";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import SideNavegation from "components/SideNavegation";
import Typography from "@material-ui/core/Typography";

import CertificateEditContainer from "containers/CertificateEditContainer";
import ConsorcioEditContainer from "./ConsorcioEditContainer";
// import CompetenciasEditContainer from 'containers/CompetenciasEditContainer';

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
    key === 'certificados' ? <CertificateEditContainer /> : <ConsorcioEditContainer />;

  render() {
    const { classes, open } = this.props;
    const options = [{title: "Consorcios", key: "consorcios"}, {title: "Certificados", key: "certificados"}];
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

const mapStateToProps = (state) => {
  const consortium = (state.consortium && state.consortium.data) || [];
  const certificate = (state.certificate && state.certificate.data) || [];
  const person = (state.person && state.person.data) || [];

  const filteredCertificate = certificate.filter(p => p.isTypeOf === "AcademicCertificate");

  return ({consortium: consortium.map(row => {
    const {hasAccount: address, hasDigitalRegister: ca, ...rest} = row;
    return ({...rest, address, ca, type: 'institute'})}),

    certificate: filteredCertificate.map(row => {
      const { address, controlsAccount, ...rest} = row;
      const {name} = person.find(({hasAccount}) => hasAccount === controlsAccount)
      return ({...rest, address, ca: address, name, type: 'certificate'})
    })
  })
}

export default connect(mapStateToProps)(withRouter(withStyles(styles)(EditContainer)));
