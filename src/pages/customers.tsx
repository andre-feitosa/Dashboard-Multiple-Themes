import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../styles/fileModules/Home.module.css'

const SideBar = require('./components/sideBar').default
import Customers from './components/customersComponet'
import TopNav from './components/topnav'
import { selectColors } from './redux/colors'

const customers = () => {

  const { themeColor, backgroundColor } = useSelector(selectColors)

  return (
    <div className={styles.Layout + ' ' + themeColor + ' ' + backgroundColor}>
      <SideBar/>
      <div className={styles.Layout_content}>
        <TopNav />
        <div className={styles.Layout_content_main}>
          <Customers/>
        </div>
      </div>
    </div>
  )
}

export default customers