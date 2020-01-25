import { connect } from 'react-redux';
import * as operations from '../store/operations';
import * as selectors from '../store/selectors';
import Dashboard from '../components/containers/Dashboard';

const mapStateToProps = (state) => {
  return {
    products: selectors.getAllProducts(state),
    isLoading: selectors.isLoadingProducts(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(operations.getData()),
    searchByName: (name) => dispatch(operations.searchByName(name)),
    sortByName: (key) => dispatch(operations.sortByName(key)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);