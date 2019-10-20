import React from "react";
import {
    AccountData,
    ContractData,
    ContractForm,
  } from "drizzle-react-components";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default ({accounts})=> (
    <div>
        <div className="section">
            <h2>Usuario con la cuenta</h2>
            <AccountData accountIndex="0"
                         units="ether"
                         precision="3"
            />
        </div>
        <p>
            <strong>Datos del contrato inteligente: </strong>
            <ContractData
            contract="CompetenciaAcademica"
            method="get"
            />
        </p>
    </div>
);