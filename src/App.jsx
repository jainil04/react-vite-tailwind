import { useState } from 'react'
import SideNav from './components/SideNav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <div>
        {/* https://www.youtube.com/watch?v=22CxRxryQFE&ab_channel=CodeCommerce */}
        <SideNav />
        <Main />
        <Work />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
