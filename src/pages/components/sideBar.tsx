import React from 'react'
import style from '../../styles/fileModules/SideBar.module.css'
import sidebar_items from '../assets/json/sidebar_routes.json'
import { selectColors } from '../redux/colors'

import logo from '../assets/images/logo.png'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const sideBar = () => {
  const { themeColor, backgroundColor } = useSelector(selectColors)

  return (
    <>
      <div className={style.sidebar}>
        <div className={style.sidebar_logo}>
          <img src={logo.src} style={{height: "45px"}} alt="Company Logo" />
        </div>
        {
          sidebar_items.map((item, key) => {
            return (
            <>
              <div key={key}>
                <Link href={item.route}>
                    <div className={style.sidebar_item}>
                      <div className={style.sidebar_item_inner}>
                        <i className={item.icon}></i>
                        <span>
                          {item.display_name}
                        </span>
                      </div>
                    </div>
                  </Link>
              </div>
            </>
            )
          })
        }
      </div>
    </>
  )
}

export default sideBar
