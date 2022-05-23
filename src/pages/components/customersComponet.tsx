import React from 'react'
import styles from '../../styles/fileModules/customers.module.css'

import Table from './table'
import customerList from '../assets/json/customers-list.json'

const customerTableHead = [
    '',
    'name',
    'email',
    'phone',
    'total orders',
    'total spend',
    'location'
]

const renderHead = (item: any, index: any) => <th key={index}>{item}</th>

const renderBody = (item: any, index: any) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_orders}</td>
        <td>{item.total_spend}</td>
        <td>{item.location}</td>
    </tr>
)


const Customers = () => {
  return (
    <div>
        <h2>
            customers
        </h2>
        <div className={styles.row}>
            <div className={styles.col_12}>
                <div className={styles.card}>
                    <div className={styles.card_body}>
                        <Table
                            limit='10'
                            headData={customerTableHead}
                            renderHead={(item: any, index: any) => renderHead(item, index)}
                            bodyData={customerList}
                            renderBody={(item: any, index: any) => renderBody(item, index)}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Customers