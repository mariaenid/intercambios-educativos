import React from 'react';
import MaterialTable from 'material-table';
import PropTypes from "prop-types";

export default function AddElements(props) {
  const { title, columns, onRowAdd, onRowUpdate, onRowDelete, data } = props;

  return (
    <MaterialTable
      title={title}
      columns={columns}
      data={data}
      editable={{
        onRowAdd: onRowAdd,
        onRowUpdate: onRowUpdate,
        onRowDelete: onRowDelete,
      }}
    />
  );
}

AddElements.PropTypes = {
    title: PropTypes.string,
    columns: PropTypes.array,
    onRowAdd: PropTypes.func,
    onRowUpdate: PropTypes.func,
    onRowDelete: PropTypes.func,
    data: PropTypes.array,
}
