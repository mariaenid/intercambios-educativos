import competenciasComponent from "./competenciasComponent";
import { drizzleConnect } from "drizzle-react";

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    SimpleStorage: state.contracts.SimpleStorage,
    TutorialToken: state.contracts.TutorialToken,
    drizzleStatus: state.drizzleStatus,
  };
};

const CompetenciasContainer = drizzleConnect(competenciasComponent, mapStateToProps);
export default CompetenciasContainer;


//  this.context.drizzle.addContract(contractConfig, events)

/*

class PointOfContactFormContainer extends React.Component {
  static propTypes = {
    contactName: PropTypes.string.isRequired,
    contactEmails: PropTypes.string,
    contactPhone: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleTagsInputChange: PropTypes.func.isRequired,
    fieldErrors: PropTypes.object
  };

  // going to rework this to be array
  static defaultProps = {
    contactEmails: null
  };

  render() {
    const {
      contactEmails,
      fieldErrors,
      contactName,
      contactPhone,
      handleChange
    } = this.props;

    return (
      <PointOfContactForm
        handleChange={handleChange}
        handleTagsInputChange={this.props.handleTagsInputChange}
        contactName={contactName}
        contactEmails={contactEmails}
        contactPhone={contactPhone}
        fieldErrors={fieldErrors}
      />
    );
  }
}

export default PointOfContactFormContainer;

*/