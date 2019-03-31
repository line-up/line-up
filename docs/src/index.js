import React, {Fragment, useState} from 'react';
import {render} from 'react-dom';

// TODO: Fix workspace link
import {Base, Button, Grid, Heading, Text} from '../../packages/web';
import {ThemeProvider, dark, light} from '../../packages/themes';

const themeMap = {dark, light};

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <Fragment>
      <p>
        Theme Select:
        <select onChange={ev => setTheme(ev.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </p>
      <div
        className="container"
        style={{backgroundColor: theme !== 'light' ? '#000' : '#fff'}}>
        <ThemeProvider theme={themeMap[theme]}>
          <Base mb={24}>
            <Heading tag="h1" textStyle="h1">
              Heading 1
            </Heading>
            <Heading tag="h2" textStyle="h2">
              Heading 2
            </Heading>
            <Heading tag="h3" textStyle="h3">
              Heading 3
            </Heading>
            <Heading textStyle="h4">Heading 3</Heading>
            <Text>Text</Text>
          </Base>
          <Grid
            gridGap="2em"
            gridTemplateColumns={[
              'repeat(1, 1fr)',
              'repeat(2, 2fr)',
              'repeat(3, 3fr)',
            ]}>
            <Button variant="primary">My Great Button</Button>
            <Button variant="primary">My Great Button</Button>
            <Button variant="primary">My Great Button</Button>
            <Button variant="primary">My Great Button</Button>
            <Button variant="primary">My Great Button</Button>
            <Button variant="primary">My Great Button</Button>
          </Grid>
        </ThemeProvider>
      </div>
    </Fragment>
  );
}

render(<App />, document.querySelector('#root'));
