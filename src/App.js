import { Switch, Route } from "react-router-dom";
import Demo1 from "./pages/demo1";
function App() {
  return (
    <Switch>
      <Route path="/demo1">
        <Demo1 />
      </Route>
    </Switch>
  );
}

export default App;
