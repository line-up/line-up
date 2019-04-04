import React, {Fragment, useState} from 'react';
import {render} from 'react-dom';

// TODO: Fix workspace link
import {
  Base,
  Button,
  Container,
  Grid,
  Flex,
  Page,
  Heading,
  Text,
  Image,
  DebugBaseLine,
  GlobalStyles,
  Background,
} from '../../packages/web';
import {ThemeProvider, dark, light} from '../../packages/themes';

const themeMap = {dark, light};

function App() {
  const [theme, setTheme] = useState('light');
  const [baseline, setBaseline] = useState(true);
  return (
    <Fragment>
      <GlobalStyles />
      <DebugBaseLine show={baseline} id="page" />

      <ThemeProvider theme={themeMap[theme]}>
        <Page id="page">
          <Flex alignItems="center">
            <Text>
              Theme Select:
              <select onChange={ev => setTheme(ev.target.value)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </Text>
            <Text>
              Show Baseline Grids:
              <select onChange={ev => setBaseline(ev.target.value)}>
                <option value={true}>Show</option>
                <option value={false}>Hide</option>
              </select>
            </Text>
          </Flex>
          <Container pt={8 * 10} pb={8 * 10}>
            <Base pt={8 * 10} mb={8 * 10}>
              <Heading tag="h1" textStyle="h1">
                Heading 1
              </Heading>
              <Heading tag="h2" textStyle="h2">
                Heading 2
              </Heading>
              <Heading tag="h3" textStyle="h3" mb={3}>
                Heading 3
              </Heading>
              <Heading textStyle="h4" mb={24}>
                Heading 4
              </Heading>
              <Text maxWidth={8 * 80}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <Image
                treatment="cover"
                src="https://source.unsplash.com/random"
                width="100%"
                mt={8 * 10}
                minHeight={8 * 60}
              />
            </Base>
            <Grid
              gridGap="4em"
              gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 2fr)']}
            >
              <Base>
                <Heading textStyle="h4" mb={24}>
                  Heading 4
                </Heading>
                <Text maxWidth={8 * 80}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </Base>
            </Grid>
          </Container>
        </Page>
      </ThemeProvider>
    </Fragment>
  );
}

render(<App />, document.querySelector('#root'));
