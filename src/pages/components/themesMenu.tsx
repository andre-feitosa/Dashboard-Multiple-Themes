import React, { useEffect, useRef, useState } from 'react'

import styles from '../../styles/fileModules/themesMenu.module.css'
import { ColorSwatchIcon, XIcon, CheckIcon} from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'
import { replaceBackground, replaceThemes, selectColors } from '../redux/colors'

const mode_settings = [
    {
        id: 'light',
        name: 'Light',
        background: 'light-background',
        class: 'theme-mode-light'
    },
    {
        id: 'dark',
        name: 'Dark',
        background: 'dark-background',
        class: 'theme-mode-dark'
    }
]

const color_settings = [
    {
        id: 'blue',
        name: 'Blue',
        background: 'blue-color',
        class: 'theme-color-blue'
    },
    {
        id: 'red',
        name: 'Red',
        background: 'red-color',
        class: 'theme-color-red'
    },
    {
        id: 'cyan',
        name: 'Cyan',
        background: 'cyan-color',
        class: 'theme-color-cyan'
    },
    {
        id: 'green',
        name: 'Green',
        background: 'green-color',
        class: 'theme-color-green'
    },
    {
        id: 'orange',
        name: 'Orange',
        background: 'orange-color',
        class: 'theme-color-orange'
    },
]

const clickOutsideRef = (content_ref: any, toggle_ref: any) => {
    document.addEventListener('mousedown', (e) => {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active')
        } else {
            // user click outside toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active')
            }
        }
    })
}

const themesMenu = () => {

    const dispatch = useDispatch()

    const [ openItem, openState ] = useState(false)

    const openMenu = (val: any, state: any) => {
        if(val == false) {
            state(true)
        } else if (val == true) {
            state(false)
        }
    }

    const { themeColor, backgroundColor } = useSelector(selectColors)

  return (
    <div>
        <button className={styles.dropdown_toggle} onClick={()=>{openMenu(openItem, openState)}}>
            <ColorSwatchIcon width={30}/>
        </button>
        { openItem ?<div className={styles.theme_menu}>
            <h4>Theme-menu</h4>
            <button className={styles.theme_menu_close}>
                <XIcon width={30} onClick={()=>{openMenu(openItem, openState)}}/>
            </button>
            <div className={styles.theme_menu_select}>
                <span>
                    Choose mode
                </span>
                <ul className={styles.mode_list}>
                    {
                        mode_settings.map((item, key) => {
                            return (
                            <li key={key} onClick={()=>{dispatch(replaceBackground(item.class))}}>
                                <div className={`${item.name}`}>
                                    { backgroundColor == item.class ? <CheckIcon style={{width: "25px"}}/> : <p style={{width: "25px", height: "25px", opacity : "0"}}>.</p> }
                                </div>
                                <span>{item.name}</span>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className={styles.theme_menu_select}>
                <span>
                    Choose Color
                </span>
                <ul className={styles.mode_list}>
                    {
                        color_settings.map((item, key) => {
                            return (
                            <li key={key} onClick={()=>{dispatch(replaceThemes(item.class))}}>
                                <div className={`${item.name}`}>
                                   { themeColor == item.class ? <CheckIcon style={{width: "25px"}}/> : <p style={{width: "25px", height: "25px", opacity : "0"}}>.</p> }
                                </div>
                                <span>{item.name}</span>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>: null }
    </div>
  )
}

export default themesMenu