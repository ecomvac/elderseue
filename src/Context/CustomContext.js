import React, { createContext, useState } from 'react'

export const SidebarContext = createContext()

const SidebarContextProvider = ({children}) => {
    const [show,setShow] = useState(false)
    const [overView,setOverView] = useState(true)
    const [overViewActive,setOverViewActive] = useState("")
    const contextInfo={
      show,
      setShow,
      overView,
      setOverView,
      overViewActive,
      setOverViewActive
    }

  return (
    <SidebarContext.Provider value={contextInfo}>
        {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContextProvider