import {FunctionComponent} from 'react';
import AppRouter from './AppRouter';
import {BrowserRouter} from "react-router-dom";

const App: FunctionComponent = () => {
  return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
  );
};

export default App;
