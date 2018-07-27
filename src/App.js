import React, { Component } from 'react';
import './index.css';

import Layout from './components/Layout/Layout';
import WhatCook from './containers/WhatCook/WhatCook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <WhatCook />
        </Layout>
      </div>
    );
  }
}

export default App;
