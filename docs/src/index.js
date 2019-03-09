import React, { Fragment, useState } from 'react';
import { render } from 'react-dom';

// TODO: Fix workspace link
import { Button } from '../../packages/web';
import { ThemeProvider, dark, light } from '../../packages/themes';

const themeMap = {dark, light};

function App() {
  const [ theme, setTheme ] = useState('light');
  return (
    <Fragment>
      <p>
        Theme Select:
        <select onChange={ev => setTheme(ev.target.value)}>
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
        </select>
      </p>
      <div className='container'>
        <ThemeProvider theme={themeMap[theme]}>
          <Button>My Great Button</Button>
        </ThemeProvider>
      </div>
    </Fragment>
  );
}

render(<App/>, document.querySelector('#root'));
