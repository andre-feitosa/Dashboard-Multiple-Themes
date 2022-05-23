import React from 'react'

import styles from '../../styles/fileModules/statuscard.module.css'

interface AppProps {
    count: string,
    title: string
}

const StatusCard = (props: AppProps) => {
  return (
    <div className={styles.status_card}>
        <div className={styles.status_card_icon}>
            {/** icon */ }
        </div>
        <div className={styles.status_card_info}>
            <h4>{props.count}</h4>
            <span>{props.title}</span>
        </div>
    </div>
  )
}

export default StatusCard