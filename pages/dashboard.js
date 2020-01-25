import { connect } from 'react-redux';
import * as operations from '../store/operations';
import * as selectors from '../store/selectors';
import Dashboard from '../components/containers/Dashboard';

const mapStateToProps = (state) => {
  return {
    dashboardProducts: selectors.getDashboardProducts(state),
    isLoading: selectors.isLoadingProducts(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(operations.getDashboardData())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);