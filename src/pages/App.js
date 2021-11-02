import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Home from './Home';
import Project from './Project';
import {Nav, Navbar, NavLink, StyledLink, SecondaryText, PrimaryText} from './style';

function App() {
  return (
    <Router>
        <Navbar>
          <div style={{marginLeft: '50px'}}>
            <PrimaryText>David <SecondaryText>William</SecondaryText></PrimaryText>
          </div>
          <Nav>
            <NavLink>
              <Link to="/" style={StyledLink} exact>Home</Link>
            </NavLink>
            <NavLink>
              <Link to="/project" style={StyledLink}>Project</Link>
            </NavLink>
            <NavLink>
              <Link to="/about" style={StyledLink}>About</Link>
            </NavLink>
          </Nav>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/project">
          <Project />
          </Route>
          <Route path="/">
          <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
