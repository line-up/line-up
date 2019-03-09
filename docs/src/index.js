import React, { Fragment, useState } from 'react';
import { render } from 'react-dom';

// TODO: Fix workspace link
import { Button, ThemeProvider } from '../../packages/web';

function App() {
  const [ theme, setTheme ] = useState('default');
  return (
    <Fragment>
      <select value={theme} onChange={value => setTheme(value)}>
        <option value='default'>Default</option>
        <option value='carbon'>Carbon</option>
        <option value='pristine'>Pristine</option>
      </select>
      <ThemeProvider theme={theme}>
        <Button>My Great Button</Button>
      </ThemeProvider>
    </Fragment>
  );
}

render(<App/>, document.querySelector('#root'));
