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
          title="List"
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

export default withStyles(styles)(Table);
