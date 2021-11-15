
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
// import Footer from './Pages/Home/Footer/Footer';
import Explores from './Pages/Explores/Explores';
import Login from './Pages/Login/Login';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/DashBoard/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Home/Purchase/Purchase';
import NotFound from './Pages/NotFound/NotFound';




function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/explore">
              <Explores></Explores>
            </PrivateRoute>
            <PrivateRoute exact path="/purchase/:purchaseId">
              <Purchase></Purchase>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
             <NotFound></NotFound>
            </Route>

          </Switch>
          {/* <Footer></Footer> */}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
