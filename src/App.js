import logo from './logo.svg';
import './App.css';
import Input from './component/Input/Input';
import { useQuery, gql, useMutation } from "@apollo/client"
import { CREATE_USER } from './component/GraphQL/mutaion';
import Students from './component/Students/Students';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Barrier from "./component/HomaPage/Barrrier.js"
import Main from './component/HomaPage/Main/Main';
import Subjects from './component/HomaPage/Subjects/Subjects';
import UpdateStudent from './component/UpdateStudent/UpdateStudent';
import { createContext } from 'react';
import { useState } from 'react';


export const MainContext = createContext()
function App() {

  const [updatedId,setUpdatedId]=useState("")

  return (
    <div className="App">
      <MainContext.Provider value={{updatedId,setUpdatedId}} >
      <Router>
        <Switch>
          <Route exact path="/">
            <Barrier/>
          </Route>
          <Route path="/input">
          <Input />
          </Route>
          <Route path="/student">
          <Main />
          </Route>
          <Route path="/subject">
            <Subjects />
          </Route>
          <Route path="/update">
            <UpdateStudent />
          </Route>
          <Route path="*">
            <h3 className="text-center mt-5 text-dark">
              404! Page Not found
            </h3>
         </Route>
        </Switch>
      </Router>
      </MainContext.Provider>
      </div>
  );
}

export default App;
