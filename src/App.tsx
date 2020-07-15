import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideBar from './components/sidebar/Sidebar';
// import { getVehiclesRequest } from './redux/vehicles/requests';
// import { getVehicleTypesRequest } from './redux/vehicle-types/requests';
// import { useDispatch } from 'react-redux';

const App = () => {
  // const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch(getVehicleTypesRequest());
  // }, [dispatch]);

  return (
    <Provider store={store}>
      <div className='app'>
        <SideBar />
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/vehicles' component={Vehicles} />
              <Route path='/locations' component={Locations} />
              <Route path='/drivers' component={Drivers} />
              <Route path='/messages' component={Messages} />
              <Route path='/dashboard' component={Dashboard} />
              <Route component={PageNotFound} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    </Provider>
  );
};

export default App;

const Home = () => <div>Home</div>;
const Vehicles = () => <div>Vehicles</div>;
const Locations = () => <div>Locations</div>;
const Drivers = () => <div>Drivers</div>;
const Messages = () => <div>Messages</div>;
const Dashboard = () => <div>Dashboard</div>;
const PageNotFound = () => <div>Page not found. Click here to go home.</div>;
