import React from 'react'
import styles from '../../styles/fileModules/badge.module.css'

const badge = (props: any) => {
  return (
    <span className={`badge badge-${props.type}`}>
        {props.content}
    </span>
  )
}

export default badge