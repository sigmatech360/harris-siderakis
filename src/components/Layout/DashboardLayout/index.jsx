import React from 'react'
import { Sidebar } from '../Sidebar'
import DefaultLayout from '../DefaultLayout'
import './style.css'

const DashboardLayout = () => {
  return (
    <DefaultLayout registerLogin={true} headerClass=" bg-dark">
        <div className='dashboard-content container'>
            <Sidebar/>

        </div>
    </DefaultLayout>
  )
}

export default DashboardLayout
