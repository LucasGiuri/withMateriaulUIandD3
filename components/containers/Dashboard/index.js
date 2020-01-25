import Title from '../../UI/Title/Title';
import * as operations from '../../../store/operations';
import PieChart from '../Charts/PieChart';
import BarChart from '../Charts/BarChart';
import { Fragment } from 'react';

const Dashboard = ({isLoading, dashboardProducts}) => {
  const loading = "Loading...";

  return (
    <Fragment>
      {isLoading ?
        <Title text={loading} isBold={true} centered={true} /> : 
        <Fragment>
          <PieChart data={dashboardProducts} />
          {dashboardProducts.map(product => {
            const { name, id } = product;
            return (
              <div key={id}>
                <Title text={name} isBold={true} centered={true} /> : 
                <BarChart data={product} />
              </div>
            )
          })}
        </Fragment>
      }
    </Fragment>
  );
}

Dashboard.getInitialProps = async ({store}) => {
  await store.dispatch(operations.getDashboardData());
  return {};
};

export default Dashboard;