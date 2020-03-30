import React from "react";
import MaterialTable from "material-table";
import {PropTypes } from "prop-types";
import { withStyles } from "@material-ui/styles";

const styles = () => ({
  root: {
    flexGrow: 1
  }
});

 class Table extends React.Component {

  render() {
    const { classes, columns, data, onClickAction, icon, tooltip } = this.props;

    return (
      <React.Fragment>
        <MaterialTable
          className={classes.root}
          title="Listado"
          columns={columns}
          data={data}
          actions={[
            {
              icon: icon,
              tooltip: tooltip,
              onClick: onClickAction
            }
          ]}
        />
      </React.Fragment>
    );
  };
};

Table.defaultProps = {
  icon: "link",
  tooltip: 'Ir'
}

Table.PropTypes = {
  icon: PropTypes.any,
  tooltip: PropTypes.string,
  classes: PropTypes.object.isRequired,
  columns: PropTypes.object,
  data: PropTypes.Array,
  contractType: PropTypes.string,
  onClickAction: PropTypes.func
}

export default withStyles(styles)(Table);
