
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import GameDetail from "./components/GameDetail";
import SignUp from "./pages/SignUp";
import { AuthProvider } from '../src/providers/users/UserProvider'
import Nav from "./components/Nav";
import Profil from "./pages/Profil";
import ScrollToTop from "./components/ScrollToTop";



function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
      <ScrollToTop />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Switch>
          <Route path="/GameDetail" component={GameDetail} />
        </Switch>
        <Switch>
          <Route path="/SignUp" component={SignUp} />
        </Switch>
        <Switch>
          <Route path="/Profil" component={Profil} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
