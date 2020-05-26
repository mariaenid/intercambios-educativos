import React from "react";
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'
import Table from "components/Table";

import logo from "./logo.png";

export default ({ accounts, certificate, history }) => {

  const routeChange = (event, rowData) => {
    console.log('event', rowData);

    let path = `certificate/${rowData.address}`;
    history.push(path);
  }

  const dataDoc = {
    columns: [
      { title: "Address", field: "controlsAccount", type: "string" },
      { title: "Contract Address", field: "address", type: "string" }
      //TODO: agregar más detalles de la competencia, ver ejemplo Senescyt
    ],
    data: certificate.filter(c => c.controlsAccount === accounts[0])
  }
  const renderTable = ({ data, columns, key }) => <Table data={data} columns={columns} contractType={"certificados"} onClickAction={routeChange}/>;


  return (
    <div className="App">
      <ToastContainer />
      <div>
        <img src={logo} alt="account-logo" className="my_account" />
        <h1>Wallet</h1>
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
