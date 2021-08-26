/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-cycle */
import { createContext, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Input from './component/Input/CreateStudent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barrier from './component/HomaPage/FirstPage';
import Main from './component/HomaPage/Main/Main';
import Subjects from './component/HomaPage/Subjects/Subjects';
import UpdateStudent from './component/UpdateStudent/UpdateStudent';

export const MainContext = createContext();
function App() {
  const [updatedId, setUpdatedId] = useState('');

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <MainContext.Provider value={{ updatedId, setUpdatedId }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Barrier />
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
