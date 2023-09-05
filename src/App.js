// Components
import Add from "./Components/Add";
import Container from "./Components/Container";
import Header from "./Components/Header";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";

// React Router
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Container>
      <Header />
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <Add /> */}
      <Home />
    </Container>
  );
};

export default App;
