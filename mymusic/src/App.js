import React, { memo } from 'react';
import { Provider } from 'react-redux'
import { renderRoutes, } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import routes from '@/router';
import store from '@/store'

import HZZAppHeader from '@/components/app-header';
import HZZAppFooter from '@/components/app-footer';
import HZZAppPlayerBar from './pages/player/app-player-bar';

const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <HZZAppHeader />
        {renderRoutes(routes)}
        <HZZAppFooter />
        <HZZAppPlayerBar/>
      </HashRouter>
    </Provider>
  )
})

export default App