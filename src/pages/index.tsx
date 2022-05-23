import { useSelector } from 'react-redux'
import styles from '../styles/fileModules/Home.module.css'

const SideBar = require('./components/sideBar').default
import Dashboard from './components/dashboard'
import TopNav from './components/topnav'
import { selectColors } from './redux/colors'


const Home = () => {

  const { themeColor, backgroundColor } = useSelector(selectColors)

  return (
    <div className={styles.Layout + ' ' + themeColor + ' ' + backgroundColor}>
      <SideBar/>
      <div className={styles.Layout_content}>
        <TopNav />
        <div className={styles.Layout_content_main}>
          <Dashboard/>
        </div>
      </div>
    </div>
  )
}

export default Home
