import React from 'react';


import './assets/css/custom.css';
import AppProvider from './core/AppProvider';

import renderRouters from './core/routersConfig';
import routers from './routers';

export let Context = React.createContext()

function App() {

  return (
    <AppProvider>
      {renderRouters(routers)}
    </AppProvider>

  );
}

export default App;
