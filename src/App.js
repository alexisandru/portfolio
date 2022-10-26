import React, {useState} from 'react'

import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ThemeChanger from './components/ThemeChanger'

import { ThemeProvider } from 'styled-components'
import {lightTheme, darkTheme} from './components/Theme'

function App() {

  const [theme, setTheme] = useState('light')
  const [accentColor, setAccentColor] = useState('#b39ddb')



  return (
    <ThemeProvider theme={theme === 'light' ? {...lightTheme, accentColor} : {...darkTheme, accentColor}}>
    <div>
      <ThemeChanger changeTheme={setTheme} changeAccentColor={setAccentColor}/>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
    </ThemeProvider>
  );
}

export default App;
