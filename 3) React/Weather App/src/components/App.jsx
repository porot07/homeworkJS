import React from 'react';
import Form from './Form';
import Weather from './Weather';

const stylesForm = {
  margin: '50px auto',
  width: '50%',
};

const stylesWeather = {
  margin: '0 auto',
  width: '75%',
};

const App = () => (
  <div>
    <div style={stylesForm}>
      <Form />
    </div>
    <div style={stylesWeather}>
      <Weather />
    </div>
  </div>
);

export default App;
