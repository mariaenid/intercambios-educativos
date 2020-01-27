import React from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/styles";

import PropTypes from "prop-types";
import SideNavegation from "components/SideNavegation";
import Typography from "@material-ui/core/Typography";

import Table from "components/Table";
import { withRouter } from 'react-router-dom';

const drawerWidth = 240;

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

class SearchContainer extends React.Component {
  completeData = {
    certificados: {
      columns: [
        { title: "Name", field: "name", type: "string" },
        { title: "Address", field: "addressContract", type: "string" },
        { title: "Tipo", field: "type", type: "string" },
        { tittle: "Titulo obtenido", field: "nameCompentece", type: "string" }
      ],
      data: [
        {
          name: "Maria Pineda",
          addressContract: "0xba4308DA79Ed16F8e69949E3c587d62d2283d9B4",
          type: "certificado",
          nameCompentece: "Ingeniera en Electrónica"
        }
      ]
    },
    consorcios: {
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
    }
  };

  routeChange = (event, rowData) => {
    console.log('event', event, rowData);
    let path = `${rowData.type.toLowerCase()}/${rowData.addressContract}`;
    this.props.history.push(path);
  }

  renderTable = ({ data, columns, key }) => <Table data={data} columns={columns} contractType={key} onClickAction={this.routeChange}/>;

  render() {
    const { classes, open } = this.props;
    const options = [{title: "Consorcios", key: "consorcios"}, {title: "Certificados", key: "certificados"}];
    const data = options.reduce((acc, {title, key}) => acc = {[key]: this.renderTable({key, ...this.completeData[key]}), ...acc}, {});

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

SearchContainer.propTypes = {
  history: PropTypes.func,
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool
};

export default withRouter(withStyles(styles)(SearchContainer));
