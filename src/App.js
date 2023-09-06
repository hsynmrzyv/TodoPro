// Components
import Container from "./Components/Container";
import Header from "./Components/Header";

// Pages
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Add from "./Pages/Add";

// React Router
import { Route, Switch, useHistory } from "react-router-dom";

// Hooks
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);

  const getUser = (data) => {
    setUser(data);
  };

  const getTodos = (data) => {
    setTodos(data);
  };

  return (
    <Container>
      <Header user={user} getUser={getUser} getTodos={getTodos} />
      <Switch>
        <Route path="/sign-in">
          <SignIn getUser={getUser} />
        </Route>
        <Route path="/sign-up">
          <SignUp getUser={getUser} />
        </Route>
        <Route path="/add">
          <Add user={user} />
        </Route>
        <Route path="/">
          <Home user={user} getTodos={getTodos} todos={todos} />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
