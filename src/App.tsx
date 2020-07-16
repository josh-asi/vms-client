import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import SideBar from './components/sidebar/Sidebar';
import Container from './components/container/Container';
import Fallback from './components/fallback/Fallback';
import 'react-toastify/dist/ReactToastify.min.css';
import { server } from './redux/helpers';

const Home = lazy(() => import('./components/home/Home'));
const Vehicles = lazy(() => import('./components/vehicles/Vehicles'));
const Locations = lazy(() => import('./components/locations/Locations'));
const Drivers = lazy(() => import('./components/drivers/Drivers'));
const Messages = lazy(() => import('./components/messages/Messages'));
const Dashboard = lazy(() => import('./components/dashboard/Dashboard'));

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
  <Container title='Page Not Found'>
    Please click an item on the sidebar
  </Container>
);

const routes = [
  { path: '/', Component: HomeComponent },
  { path: '/vehicles', Component: VehiclesComponent },
  { path: '/locations', Component: LocationsComponent },
  { path: '/drivers', Component: DriversComponent },
  { path: '/messages', Component: MessagesComponent },
  { path: '/dashboard', Component: DashboardComponent },
];

const App = () => {
  React.useEffect(() => {
    const testConnection = async () => {
      await axios
        .get(`${server}/health`)
        .catch(() => toast.error('No connection to the remote server'));
    };
    testConnection();
  }, []);

  return (
    <Provider store={store}>
      <main className='app'>
        <Router>
          <SideBar />
          <Suspense fallback={<Fallback />}>
            <Switch>
              {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                  <Component />
                </Route>
              ))}
              <Route component={PageNotFound} />
            </Switch>
          </Suspense>
        </Router>
        <ToastContainer
          position={'bottom-center'}
          pauseOnFocusLoss={false}
          limit={8}
        />
      </main>
    </Provider>
  );
};

export default App;
