import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

import Steps from "components/Steps";
import Table from "components/Table";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import ColorTextFields from "components/form";
import CardForm from "../components/CardForm";
import { Card } from "@material-ui/core";
import AddElements from "../components/AddElements";

const consorcioMock = {
  columns: [
    { title: "Name", field: "name" },
    { title: "Tipo", field: "type" }
  ]
};

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
    competencias: []
  });

  const { classes } = props;

  const getSteps = () => {
    return ["Datos informativos", "Competencias", "Guardado"];
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

  const onRowAdd = newData =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
        setState(prevState => {
          const competencias = [...prevState.competencias];
          competencias.push(newData);
          return { ...prevState, competencias };
        });
      }, 600);
    });

  const onRowUpdate = (newData, oldData) =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
        if (oldData) {
          setState(prevState => {
            const competencias = [...prevState.competencias];
            competencias[competencias.indexOf(oldData)] = newData;
            return { ...prevState, competencias };
          });
        }
      }, 600);
    });

  const onRowDelete = oldData =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
        setState(prevState => {
          const competencias = [...prevState.competencias];
          competencias.splice(competencias.indexOf(oldData), 1);
          return { ...prevState, competencias };
        });
      }, 600);
    });

  const renderCompetencias = () => (
    <AddElements
      title={"Competencias disponibles"}
      columns={consorcioMock.columns}
      onRowAdd={onRowAdd}
      onRowUpdate={onRowUpdate}
      onRowDelete={onRowDelete}
      data={state.competencias}
    />
  );

  const getStepContent = step => {
    let type = "consorcio";
    switch (step) {
      case 0:
          const names = ["name", "address", "direccion"];
          const values = names.map(name => state[type][name] || '')
        console.log(values)
        return (
          <ColorTextFields
            names={names}
            handleChange={handleChangeInputs}
            values={values}
          ></ColorTextFields>
        );
      case 1:
        type = "competencias";
        return renderCompetencias(type);
      default:
        return "Complete...";
    }
  };
  console.log("state", state);
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
