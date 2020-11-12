import React, { useState, useCallback } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MainHeader from "../components/Main/MainHeader"
import MainContent from "../components/Main/MainContent"
import '../styles/css/app.css'
import MainFooter from "../components/Main/MainFooter"
import { useSpring } from 'react-spring';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

/* const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
) */

const App = () => {

  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }))

  const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), [])
  const onScroll = useCallback(e => set({ st: e.target.scrollTop / 30 }), [])

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <div className="Main" onMouseMove={onMove} onScroll={onScroll}>
          <div className="blur">

            <MainHeader></MainHeader>
            <MainContent></MainContent>
            <MainFooter></MainFooter>
          </div>
        </div>
      </ThemeProvider>

    </>
  );
}

export default App;