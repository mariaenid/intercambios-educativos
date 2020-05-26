import MyComponent from "MyComponent";
import { drizzleConnect } from "drizzle-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToPropsDrizzle = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
  };
};

const mapStateToProps = state => {
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

const MyContainer = drizzleConnect(MyComponent, mapStateToPropsDrizzle);

export default connect(mapStateToProps)(withRouter(MyContainer));
