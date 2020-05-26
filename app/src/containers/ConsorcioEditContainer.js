import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

import Steps from "components/Steps";
import ColorTextFields from "components/form";
import CardForm from "../components/CardForm";
import { Card } from "@material-ui/core";

import ContractFormContainer from "../containers/ContractFormContainer";

import INSTITUTE_PARAMS from "../templates/institute.json"

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
    })
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
    "text-transform": "capitalize"
  }
});

function ConsorcioEditContainer(props) {
  const [state, setState] = React.useState({
    consorcio: {},
  });

  const { classes } = props;

  const getSteps = () => {
    return ["Datos informativos", "Guardado"];
  };

  const handleChangeInputs = event => {
    const type = "consorcio";
    const keyLabel = event.target.name;
    const value = event.target.value;
    const prevConsorcio = state[type] || {};
    setState(prevState => ({
      ...prevState,
      [type]: { ...prevConsorcio, [keyLabel]: value }
    }));

    // TODO: agregar el valor del address del usuario
  };

  const renderForm = () =>
    <React.Fragment>
      {!!Object.keys(state.consorcio).length ?
        <Card className={classes.content}>
          {Object.keys(state.consorcio).map((keyName) =>
          <React.Fragment>
            <CardForm className={classes.drawerHeader} name={keyName} text={state.consorcio[keyName]} />
          </React.Fragment>)}
          <React.Fragment>
            {renderEditContainer()}
          </React.Fragment>
        </Card> : <Card>No Records Found</Card>}
    </React.Fragment>;

  const renderEditContainer = () =>
    <ContractFormContainer
      contractName='AcademicCertificate'
      method='set'
      labels={INSTITUTE_PARAMS}
      inputs={INSTITUTE_PARAMS.reduce((acc, p) => {
          acc[p] = state.consorcio[p]
          return acc
        }, {})}
    />

  const getStepContent = step => {
    let type = "consorcio";
    switch (step) {
      case 0:
          const names = INSTITUTE_PARAMS;
          const values = names.map(name => state[type][name] || '')
        console.log("statess", state)
        return (
          <ColorTextFields
            names={names}
            handleChange={handleChangeInputs}
            values={values}
          ></ColorTextFields>
        );
      default:
        return (renderForm());
    }
  };

  return (
    <Steps
      className={classes.content}
      getSteps={getSteps}
      getStepContent={getStepContent}
    ></Steps>
  );
}

ConsorcioEditContainer.PropTypes = {
  open: PropTypes.bool,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ConsorcioEditContainer);
