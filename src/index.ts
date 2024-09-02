interface Config {
  host?: string;
  apiKey: string;
}

interface IndividualPlanProps {
  planId: string;
}

const Pensify = (config: Config) => {
  function loadIndividualPlan(individualPlanProps: IndividualPlanProps) {
    // TODO: load Individual plan page to planRoot div
  }

  function connectAccount() {
    // TODO: Create user account or login to existing account
  }

  return {
    loadIndividualPlan,
    connectAccount,
  };
};

export default Pensify;
