import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { drizzleConnect } from "drizzle-react";
import { withStyles } from "@material-ui/styles";

import Steps from "components/Steps";
import Typography from "@material-ui/core/Typography";
import ColorTextFields from "components/form";
import CardForm from "../components/CardForm";
import { Card } from "@material-ui/core";
import ContractFormContainer from "../containers/ContractFormContainer";

import CERTIFICATE_PARAMS from "../templates/certificate.json"

// TODO: esto vendrá de un contrato inteligente (o estará guardado en una ontología)

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
  },
  capitalize: {
    'text-transform': 'capitalize',
  }

});

function CertificateEditContainer(props) {
  const [state, setState] = React.useState({ user: {} });
  const { classes } = props;

  const getSteps = () => {
    return [
      "Certificate Information",
      "Saved"
    ];
  };

  useEffect(() => {
    const prevUser = state["user"] || {};
    setState(prevState => ({
      ...prevState,
      ["user"]: { ...prevUser, "address": props.currentAccount }
    }));

  },[props.currentAccount])

  const handleChangeInputs = event => {
    const type = "user";
    const keyLabel = event.target.name;
    const value = event.target.value;
    const previousValue = state[type] || {};
    setState({
      ...state,
      [type]: { ...previousValue, [keyLabel]: value }
    });
    // TODO: agregar el valor del address del usuario
  };


  const renderForm = () =>
    <Card className={classes.content}>
        <Typography gutterBottom variant="h5" component="h5" className={classes.capitalize}>
          {"Edit Certificate"}
        </Typography>
        <React.Fragment>
          {Object.keys(state["user"]).map(keyItem => {
            if (keyItem !== "tableData") {
              return (
                <CardForm className={classes.drawerHeader} name={keyItem} text={state["user"][keyItem]} />
              );
            }
          })}
        </React.Fragment>
        <React.Fragment>
            {renderEditContainer()}
        </React.Fragment>
    </Card>;

const renderEditContainer = () =>
  <ContractFormContainer
    contractName='AcademicCertificate'
    labels={CERTIFICATE_PARAMS}
    inputs={CERTIFICATE_PARAMS.map((p) => {
        return state.user[p]
      })}
  />

  const getStepContent = (step) => {
    let type = "";
    switch (step) {
      case 0:
        type = "user";
        const names = CERTIFICATE_PARAMS;
        const values = names.map(name => state[type][name] || '');

        return (
          <ColorTextFields
            names={names}
            handleChange={handleChangeInputs}
            values={values}
          ></ColorTextFields>
        );
      default:
        return renderForm();
    }
  };

  return <Steps className={classes.content} getSteps={getSteps} getStepContent={getStepContent}></Steps>;
}

CertificateEditContainer.PropTypes = {
  open: PropTypes.bool,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    currentAccount: state.accounts[0]
  };
};

export default withStyles(styles)(drizzleConnect(CertificateEditContainer, mapStateToProps));