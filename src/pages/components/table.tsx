import React from 'react'

import styles from '../../styles/fileModules/table.module.css'
import ThemesMenu from './themesMenu'

interface AppProps {
    headData: any
    renderHead: any
    bodyData: any
    renderBody: any
    limit: any
}

const Table = (props: AppProps) => {

  return (
    <div>
        <div className={styles.table_wrapper}>
        <table style={{width: "100%", minWidth: "400px", borderSpacing: "0"}}>
            {
               props.headData && props.renderHead ? (
                    <thead style={{backgroundColor: "var(--second-bg)"}}>
                        <tr style={{textAlign: "left"}}>
                            {
                                props.headData.map((item: any, index: any) => props.renderHead(item, index))
                            }
                        </tr>
                    </thead>
                ) : null
            }
            {
                props.bodyData && props.renderBody ? (
                    <tbody>
                        {
                            props.bodyData.map((item: any, index: any) => props.renderBody(item, index))
                        }
                    </tbody>
                ) : null
            }
                </table>
        </div>
    </div>
  )
}

export default Table