import React from "react"
import { Switch, Route } from 'react-router';
import Layout from "./containers/Layout/Layout"
import Homepage from "./containers/Homepage/Homepage"
import FindSchools from "./containers/FindSchools/FindSchools"
import Apply from "./containers/Apply/Apply"
import Dashboard from "./containers/Dashboard/Dashboard"

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/apply" component={Apply} />
          <Route path="/find-schools" component={FindSchools} />
          <Route path="/" component={Homepage} />
        </Switch>

      </Layout>
    </div>
  );
}

export default App;
