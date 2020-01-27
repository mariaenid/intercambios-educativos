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

// TODO: esto vendrá de un contrato inteligente (o estará guardado en una ontología)
const certificatesTypesMock = {
  columns: [
    { title: "Name", field: "name", type: "string" },
    { title: "Tipo", field: "type", type: "string" }
    //TODO: agregar más detalles de la competencia, ver ejemplo Senescyt
  ],
  data: [
    {
      name: "Electronica y Telecomunicaciones",
      type: "competencias"
    },
    {
      name: "Medicina",
      type: "competencias"
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
  const [formulario, setFormulario] = React.useState({consorcio: {}, user: {}, competencias: {}});
  const { classes } = props;

  const getSteps = () => {
    return [
      "Selección de consorcio",
      "Selección de certificado",
      "Datos informativos",
      "Guardado"
    ];
  };

  const onClickAction = (event, rowEvent) => {
    console.log("rowEvent", rowEvent);
    setFormulario({ ...formulario, [rowEvent.type]: { ...rowEvent } });
    console.log(formulario);
    /*
    this.setState({consorcio: {
      contractAddress, name
    }}) */
  };

  const renderListSelection = (type, data) => {
    return (
      <div>
        {!!formulario[type] && (
          <main className={classes.content}>
            {Object.keys(formulario[type]).map(line => {
              if (line !== "tableData") {
                return (
                  <Typography className={classes.capitalize}>
                    {line}: {formulario[type][line]}
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

  const handleChangeInputs = event => {
    const type = "user";
    const keyLabel = event.target.name;
    const value = event.target.value;
    const previousValue = formulario[type] || {};
    setFormulario({
      ...formulario,
      [type]: { ...previousValue, [keyLabel]: value }
    });
    // TODO: agregar el valor del address del usuario
  };


  const renderForm = () =>
    Object.keys(formulario).map(keyName => (
      <Card className={classes.content}>
        <Typography gutterBottom variant="h5" component="h5" className={classes.capitalize}>
          {keyName.toLocaleLowerCase()}
        </Typography>
        {Object.keys(formulario[keyName]).map(keyItem => {
          if (keyItem !== "tableData") {
            return (
              <CardForm className={classes.drawerHeader} name={keyItem} text={formulario[keyName][keyItem]} />
            );
          }
        })}
      </Card>
    ));


  const getStepContent = (step) => {
    let type = "";
    switch (step) {
      case 0:
          type = "consorcio";
          return renderListSelection(type, consorciosMock);
      case 1:
        type = "competencias";
        return renderListSelection(type, certificatesTypesMock);
      case 2:
        type="user";
        const names = ["name", "address", "identificacion", "direccion"];
        const values = names.map(name => formulario[type][name] || '');

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

export default withStyles(styles)(CertificateEditContainer)