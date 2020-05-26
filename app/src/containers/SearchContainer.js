import React from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/styles";
import { withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import SideNavegation from "components/SideNavegation";
import Typography from "@material-ui/core/Typography";

import Table from "components/Table";
import { connect } from "react-redux";

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
  static propTypes = {
    history: PropTypes.func,
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool,
    consortium: PropTypes.array
  };

  static defaultProps = {
    consortium: []
  };

  routeChange = (event, rowData) => {
    console.log('event', event, rowData);
    let path = `${rowData.type.toLowerCase()}/${rowData.ca}`;
    this.props.history.push(path);
  }

  renderTable = ({ data, columns, key }) => <Table data={data} columns={columns} contractType={key} onClickAction={this.routeChange}/>;

  render() {
    const { classes, open } = this.props;
    const { consortium, certificate } = this.props;
    const completeData = {
      certificados: {
        columns: [
          { title: "Name", field: "name", type: "string" },
          { title: "Address Owner", field: "address", type: "string" },
          { title: "Name Compentece", field: "title", type: "string" }
        ],
        data: certificate
      },
      consorcios: {
        columns: [
          { title: "Name", field: "name", type: "string" },
          { title: "Address", field: "address", type: "string" },
        ],
        data: consortium
      }
    };
    const options = [{title: "Institutes", key: "consorcios"}, {title: "Certificates", key: "certificados"}];
    const data = options.reduce((acc, {title, key}) => acc = {[key]: this.renderTable({key, ...completeData[key]}), ...acc}, {});

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

const mapStateToProps = (state) => {
  const consortium = (state.consortium && state.consortium.data) || [];
  const certificate = (state.certificate && state.certificate.data) || [];
  const person = (state.person && state.person.data) || [];

  const filteredCertificate = certificate.filter(p => p.isTypeOf === "AcademicCertificate");

  return ({consortium: consortium.map(row => {
    const {hasAccount: address, hasDigitalRegister: ca, ...rest} = row;
    return ({...rest, address, ca, type: 'institute'})}),

    certificate: filteredCertificate.map(row => {
      const { address, controlsAccount, hasTitle, ...rest} = row;
      const {name} = person.find(({hasAccount}) => hasAccount === controlsAccount)
      return ({...rest, address, ca: address, name, title: hasTitle, type: 'certificate'})
    })
  })
}

export default connect(mapStateToProps)(withRouter(withStyles(styles)(SearchContainer)));
