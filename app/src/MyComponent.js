import React from "react";
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'
import Table from "components/Table";

import logo from "./logo.png";

export default ({ accounts, certificate, history, consortium }) => {

  const routeChangeCertificate = (event, rowData) => {
    // console.log('event', rowData);

    let path = `certificate/${rowData.ca}`;
    history.push(path);
  }
  // institute

  const routeChangeInstitute = (event, rowData) => {
    // console.log('event', rowData);

    let path = `institute/${rowData.ca}`;
    history.push(path);
  }
  const dataDoc = {
    certificate: {
      key: "certificate",
      columns: [
        { title: "Address", field: "controlsAccount", type: "string" },
        { title: "Contract Address", field: "address", type: "string" }
        //TODO: agregar más detalles de la competencia, ver ejemplo Senescyt
      ],
      data: certificate.filter(c => c.address === accounts[0]) || []
    },
    institute: {
      key: "institute",
      columns: [
        { title: "Name", field: "name", type: "string" },
        { title: "Address", field: "address", type: "string" },
      ],
      data: consortium.filter(c => c.address === accounts[0]) || []
    }
  }

  const renderTable = ({ data, columns, key }) => <Table data={data} columns={columns} contractType={"certificados"} onClickAction={key === "certificate" ? routeChangeCertificate : routeChangeInstitute}/>;

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

      {(dataDoc.certificate && !!dataDoc.certificate.data.length) && <div className="section">
        <h2>Certificates</h2>
        {renderTable(dataDoc.certificate)}
      </div>}
      {(dataDoc.institute && !!dataDoc.institute.data.length) && <div className="section">
        <h2>Institutes</h2>
        {renderTable(dataDoc.institute)}
      </div>}
    </div>
  );
}
