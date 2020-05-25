import React from "react";
import {
  AccountData,
} from "drizzle-react-components";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Table from "components/Table";

import logo from "./logo.png";

export default ({ accounts, certificate }) => {
  console.log("Certificates", certificate)

  const routeChange = (event, rowData) => {
    console.log('event', event, rowData);
    let path = `${rowData.type.toLowerCase()}/${rowData.ca}`;
    this.props.history.push(path);
  }

  const dataDoc = {
    columns: [
      { title: "Name", field: "name", type: "string" },
      { title: "Address", field: "address", type: "string" },
      { title: "Tipo", field: "type", type: "string" }
      //TODO: agregar más detalles de la competencia, ver ejemplo Senescyt
    ],
    data: certificate.filter(c => c.address === accounts[0])
  }
  const renderTable = ({ data, columns, key }) => <Table data={data} columns={columns} contractType={"certificados"} onClickAction={routeChange}/>;


  return (
    <div className="App">
      <ToastContainer />
      <div>
        <img src={logo} alt="account-logo" className="my_account" />
        <h1>My Wallet</h1>
      </div>

      <div className="section">
        <h2>Active Account</h2>
        <p>{accounts[0]}</p>
      </div>

      <div className="section">
        <h2>Certificates</h2>
        {renderTable(dataDoc)}
      </div>
    </div>
  );
}
