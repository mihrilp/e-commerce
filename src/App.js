import "./App.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Products, Contact, Login, SignUp } from "../src/pages";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box>
          <Navbar />
        </Box>
        <Box backgroundColor="#ebebec" height="100vh">
          <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
