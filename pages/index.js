import { connect } from 'react-redux';
import * as operations from '../store/operations';
import * as selectors from '../store/selectors';
import Home from '../components/containers/Home';

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
    sortBySomething: (key) => dispatch(operations.sortBySomething(key)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);