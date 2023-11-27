import React, { createContext, useState } from 'react'
export const SidebarContext = createContext()

const SidebarContextProvider = ({ children }) => {
  // -------------handle elderly back button and elderly trends click------------
  const [innerOverView, setinnerOverView] = useState(true)
  const [activeTrend, setActiveTrend] = useState('')

  const [show, setShow] = useState(false)
  const [overView, setOverView] = useState(true)
  const [overViewActive, setOverViewActive] = useState("")
  const contextInfo = {
    show,
    setShow,
    overView,
    setOverView,
    overViewActive,
    setOverViewActive,
    setinnerOverView,
    innerOverView,
    activeTrend,
    setActiveTrend
  }

  return (
    <SidebarContext.Provider value={contextInfo}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContextProvider