import React, { useEffect, useState } from 'react'
import { Sidebar } from '../Sidebar'
import DefaultLayout from '../DefaultLayout'
import './style.css'

const DashboardLayout = ({children}) => {
  const [sideBarClass, setsideBarClass] = useState("");
  const [bodyClass, setbodyClass] = useState("");
  useEffect(() => {
    if (window.innerWidth <= 991) {
      setsideBarClass("collapsed");
      setbodyClass("expanded");
    } else {
      setsideBarClass("");
      setbodyClass("");
    }
    function handleResize() {
      if (window.innerWidth <= 991) {
        setsideBarClass("collapsed");
        setbodyClass("expanded");
      } else {
        setsideBarClass("");
        setbodyClass("");
      }
    }
    window.addEventListener("resize", handleResize);
  }, []);
  function sidebarToggle() {
    if (sideBarClass === "") {
      setsideBarClass("collapsed");
      setbodyClass("expanded");
    } else {
      setsideBarClass("");
      setbodyClass("");
    }
  }
  return (
    <DefaultLayout registerLogin={true} headerClass=" bg-dark">
        <div className='dashboard-main '>
          <div className="container">
            <div className="d-flex align-items-start">
              <Sidebar sideClass={sideBarClass} sidebarToggle={sidebarToggle} />
              {children}

            </div>

          </div>
        </div>
    </DefaultLayout>
  )
}

export default DashboardLayout
