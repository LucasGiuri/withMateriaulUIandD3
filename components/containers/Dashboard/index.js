import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
import * as operations from '../../../store/operations';
import BarChart from '../Charts/BarChart';
import VerticalChart from '../Charts/VerticalChart';
import Title from '../../UI/Title/Title';
import Tabs from '../../UI/Tabs/Tabs';

const Dashboard = ({isLoading, dashboardProducts}) => {
  const loading = "Loading...";
  const [tab, setTab] = useState(1);

  return (
    <Fragment>
      <Tabs setTab={setTab} tabSelected={tab} />
      {isLoading ?
        <Title text={loading} isBold={true} centered={true} /> : 
        <Fragment>
          {tab === 1 ?
            <Fragment>
            {dashboardProducts.map(product => {
              const { name, id } = product;
              return (
                <div key={id}>
                  <Title text={name} isBold={true} centered={true} /> : 
                  <BarChart data={product} />
                </div>
              )
            })}
          </Fragment> :
          <VerticalChart data={dashboardProducts} />
          }
        </Fragment>
      }
    </Fragment>
  );
};

Dashboard.getInitialProps = async ({store}) => {
  await store.dispatch(operations.getDashboardData());
  return {};
};

Dashboard.propTypes = {
  isLoading: PropTypes.bool,
  dashboardProducts: PropTypes.array
};

Dashboard.defaultProps = {
  dashboardProducts: []
};

export default Dashboard;