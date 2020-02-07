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
import ContractFormContainer from "../containers/ContractFormContainer";
import { ACADEMIC_CONSORTIUM_FIELDS } from "../constants.js/StaticFields";

const competenciasMock = {
  columns: [
    { title: "Name", field: "name" },
    { title: "Tipo", field: "type" }
  ]
};

const consorciosMock = {
  columns: [
    { title: "Name", field: "name", type: "string" },
    { title: "Address", field: "addressContract", type: "string" },
    { title: "Tipo", field: "type", type: "string" }
    //TODO: agregar más detalles de la competencia, ver ejemplo Senescyt
  ],
  data: [
    {
      name: "UTPL",
      addressContract: "0xd994F90Bd30E1E033FC1Bba4C5B2Ad8747922c91",
      type: "consorcio"
    }
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

function CompetenciasEditContainer(props) {
  const [state, setState] = React.useState({
    consorcio: {},
    competencias: []
  });

  const { classes } = props;

  const getSteps = () => {
    return ["Datos informativos", "Competencias", "Guardado"];
  };

  const onClickAction = (event, rowEvent) => {
    console.log("rowEvent", rowEvent);
    setState({ ...state, [rowEvent.type]: { ...rowEvent } });
    console.log(state);
    /*
    this.setState({consorcio: {
      contractAddress, name
    }}) */
  };

  const renderListSelection = (type, data) => {
    return (
      <div>
        {!!state[type] && (
          <main className={classes.content}>
            {Object.keys(state[type]).map(line => {
              if (line !== "tableData") {
                return (
                  <Typography className={classes.capitalize}>
                    {line}: {state[type][line]}
                  </Typography>
                );
              }
            })}
          </main>
        )}
        <Table
          columns={data.columns}
          data={data.data}
          tooltip={"Select"}
          onClickAction={onClickAction}
          icon={() => <AddIcon />}
        />
      </div>
    );
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
      columns={competenciasMock.columns}
      onRowAdd={onRowAdd}
      onRowUpdate={onRowUpdate}
      onRowDelete={onRowDelete}
      data={state.competencias}
    />
  );

  const renderEditContainer = () =>
  <ContractFormContainer
    contractName='AcademicCertificate'
    method='set'
    labels={ACADEMIC_CONSORTIUM_FIELDS.map(field => field.key)}
    values={[
      '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      'Universidad Tecnica Particular de Loja',
      '0',
      'Ingeniera en Sistemas',
      '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      'Maria Pineda',
      '1105148595'
    ]}
  />

  const getStepContent = step => {
    let type = "consorcio";
    switch (step) {
      case 0:
          type = "consorcio";
          return renderListSelection(type, consorciosMock);
      case 1:
        type = "competencias";
        return renderCompetencias(type);
      default:
        return renderEditContainer();
    }
  };

  console.log(state)

  return (
    <Steps
      className={classes.content}
      getSteps={getSteps}
      getStepContent={getStepContent}
    ></Steps>
  );
}

CompetenciasEditContainer.PropTypes = {
  open: PropTypes.bool,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CompetenciasEditContainer);
