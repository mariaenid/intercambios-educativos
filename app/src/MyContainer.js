import MyComponent from "MyComponent";
import { drizzleConnect } from "drizzle-react";
import { connect } from "react-redux";

const mapStateToPropsDrizzle = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
  };
};

const mapStateToProps = state => {

  return {certificate: (state.certificate && state.certificate.data) || []}
}

const MyContainer = drizzleConnect(MyComponent, mapStateToPropsDrizzle);

export default connect(mapStateToProps)(MyContainer);
