import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { BellIcon, UserIcon } from '@heroicons/react/outline'
import style from '../../styles/fileModules/topnav.module.css'

import notificationsJson from '../assets/json/notification.json'
import ThemesMenu from './themesMenu'

const Notifications = () => {
  return (
    <div className={style.notification_json}>
      {
        notificationsJson.map((item, key) => {
          console.log(item)
          return (
            <div className={style.notification_json_item}>
              {
                item.content
              }
            </div>
          )
        })
      }
    </div>
  )
}

const TopNav = () => {
  const [notificationOff, notificationOn] = useState(false)

  return (
    <div className={style.topnav}>
      <div className={style.topnav_search}>
        <input type="text" placeholder='Search here...' />
        <SearchIcon className={style.icon}/>
      </div>
      <div className={style.topnav_right}>
        <div className={style.topnav_right_item}>
          <div className={style.dropdown}>
              <button className={style.dropdown_toggle} >
                {<UserIcon />}
                <span className={style.spanUser}>User</span>
              </button>
          </div>
        </div>
        <div className={style.topnav_right_item}>
          <div className={style.dropdown}>
                <button className={style.dropdown_toggle} onClick={()=>{notificationOff ? notificationOn(false): notificationOn(true) }}>
                  {<BellIcon />}
                  <span className={style.spanBell}>12</span>
                </button>
          </div>
        </div>
        <div className={style.notifications}>
          {notificationOff ? <Notifications /> : null}
        </div>
        <div className={style.topnav_right_item}>
          <div className={style.dropdown}>
            <ThemesMenu />      
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav