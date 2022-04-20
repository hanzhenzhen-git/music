import React, { memo } from 'react';
import { renderRoutes, } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import routes from '@/router';

import HZZAppHeader from '@/components/app-header';
import HZZAppFooter from '@/components/app-footer';

const App = memo(() => {
  return (
    <HashRouter>
      <HZZAppHeader />
      {renderRoutes(routes)}
      <HZZAppFooter />
    </HashRouter>
  )
})

export default App