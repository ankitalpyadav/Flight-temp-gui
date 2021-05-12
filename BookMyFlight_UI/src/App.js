import { Route, Switch } from 'react-router';
import Home from './components/Home';
import Booking from './components/Booking';
import Login from './components/Login';
import Register from './components/Register';
import Payment from './components/Payment';
import ErrorWorld from './components/ErrorWorld';
import Passengers from './components/Passengers';
import Ticket from './components/Ticket'

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/booking" component={Booking} />
        <Route path="/passengers" component={Passengers} />
        <Route path="/Ticket" component={Ticket} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/payment" component={Payment} />
        <Route component={ErrorWorld} />
      </Switch>
    </main>
  );
}

export default App;
