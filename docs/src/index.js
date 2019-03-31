import React, { Fragment, useState } from "react";
import { render } from "react-dom";

// TODO: Fix workspace link
import { Button, Grid, Base } from "../../packages/web";
import { ThemeProvider, dark, light } from "../../packages/themes";

const themeMap = { dark, light };

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <Fragment>
      <p>
        Theme Select:
        <select onChange={ev => setTheme(ev.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </p>
      <div className="container">
        <ThemeProvider theme={themeMap[theme]}>
          <Base>Test</Base>
          <Grid
            gridGap="2em"
            gridTemplateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 2fr)",
              "repeat(3, 3fr)"
            ]}
          >
            <Button>My Great Button</Button>
            <Button>My Great Button</Button>
            <Button>My Great Button</Button>
            <Button>My Great Button</Button>
            <Button>My Great Button</Button>
            <Button>My Great Button</Button>
          </Grid>
        </ThemeProvider>
      </div>
    </Fragment>
  );
}

render(<App />, document.querySelector("#root"));
