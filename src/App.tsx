import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideBar from './components/sidebar/Sidebar';
import Container from './components/container/Container';

const Home = lazy(() => import('./components/home/Home'));
const Vehicles = lazy(() => import('./components/vehicles/Vehicles'));
const Locations = lazy(() => import('./components/locations/Locations'));
const Drivers = lazy(() => import('./components/drivers/Drivers'));
const Messages = lazy(() => import('./components/messages/Messages'));
const Dashboard = lazy(() => import('./components/dashboard/Dashboard'));

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
        <Router>
          <SideBar />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path='/' component={HomeComponent} />
              <Route path='/vehicles' component={VehiclesComponent} />
              <Route path='/locations' component={LocationsComponent} />
              <Route path='/drivers' component={DriversComponent} />
              <Route path='/messages' component={MessagesComponent} />
              <Route path='/dashboard' component={DashboardComponent} />
              <Route component={PageNotFound} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    </Provider>
  );
};

export default App;

const HomeComponent = () => (
  <Container title='Welcome'>
    <Home />
  </Container>
);
const VehiclesComponent = () => (
  <Container title='Vehicles'>
    <Vehicles />
  </Container>
);
const LocationsComponent = () => (
  <Container title='Locations'>
    <Locations />
  </Container>
);
const DriversComponent = () => (
  <Container title='Drivers'>
    <Drivers />
  </Container>
);
const MessagesComponent = () => (
  <Container title='Messages'>
    <Messages />
  </Container>
);
const DashboardComponent = () => (
  <Container title='Dashboard'>
    <Dashboard />
  </Container>
);
const PageNotFound = () => (
  <Container title='Page Not Found'>Click here to go home.</Container>
);
