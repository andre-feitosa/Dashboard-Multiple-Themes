import React from 'react'

import StatusCards from '../assets/json/status-card-data.json'
import StatusCard from './statuscard'
import Table from './table'

import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { ApexOptions } from 'apexcharts'
import Link from 'next/link';

const options: ApexOptions = {
  series: [{
    name: "Online Customers",
    data: [40,70,20,90,36,80,30,91,60]
  }, {
    name: "Store Customers",
    data: [40,30,70,80,40,16,40,20,51]
  }],
    colors: ['#6ab04c', '#2980b9'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },
    legend: {
      position: 'top'
    },
    grid: {
      show: false
    }
  }

const topCustomers = {
  head: [
    'user',
    "total orders",
    "total spending"
  ],
  body: [
    {
        "username": "john doe",
        "order": "490",
        "price": "$15,870"
    },
    {
        "username": "frank iva",
        "order": "250",
        "price": "$12,251"
    },
    {
        "username": "anthony baker",
        "order": "120",
        "price": "$10,840"
    },
    {
        "username": "frank iva",
        "order": "110",
        "price": "$9,251"
    },
    {
        "username": "anthony baker",
        "order": "80",
        "price": "$8,840"
    }
  ]
}

const styleObj = {
  textTransform: "capitalize",
  padding: "15px 10px"
}

const renderCusomerHead = (item: any , index: any) => (
  <th key={index} >{item}</th>
)

const renderCusomerBody = (item: any, index: any) => (
  <tr key={index}>
      <td>{item.username}</td>
      <td>{item.order}</td>
      <td>{item.price}</td>
  </tr>
)

const latestOrders = {
  header: [
      "order id",
      "user",
      "total price",
      "date",
      "status"
  ],
  body: [
      {
          id: "#OD1711",
          user: "john doe",
          date: "17 Jun 2021",
          price: "$900",
          status: "shipping"
      },
      {
          id: "#OD1712",
          user: "frank iva",
          date: "1 Jun 2021",
          price: "$400",
          status: "paid"
      },
      {
          id: "#OD1713",
          user: "anthony baker",
          date: "27 Jun 2021",
          price: "$200",
          status: "pending"
      },
      {
          id: "#OD1712",
          user: "frank iva",
          date: "1 Jun 2021",
          price: "$400",
          status: "paid"
      },
      {
          id: "#OD1713",
          user: "anthony baker",
          date: "27 Jun 2021",
          price: "$200",
          status: "refund"
      }
  ]
}

const orderStatus = {
  "shipping": "primary",
  "pending": "warning",
  "paid": "success",
  "refund": "danger"
}

const renderOrderHead = (item: any, index: any) => (
  <th key={index}>{item}</th>
)

const renderOrderBody = (item: any, index: any) => (
  <tr key={index}>
      <td>{item.id}</td>
      <td>{item.user}</td>
      <td>{item.price}</td>
      <td>{item.date}</td>
      <td>
          <span>{item.status}</span>
      </td>
  </tr>
)

const dashboard = () => {
  return (
    <div>
      <h2>dashboard</h2>
      <div className="row">
        <div className="col_6">
          <div className="row" style={{gridTemplateColumns: "auto auto", display: "grid", width: "500px"}}>
            {
              StatusCards.map((item, key)=>{
                return (
                  <div className="col_6" style={{width: "200px"}}>
                    {
                      <StatusCard
                        count={item.count}
                        title={item.title}
                      />
                    }
                  </div>
                )
              })
            }
          </div>
          <div className="col_6">
            <div className="card full_height">
              <Chart
                options={options}
                series={options.series}
                type='line'
                style={{marginTop: "-30px"}}
              />
            </div>
          </div>
          <div className="col_4" >
            <div className="card_4" >
              <div className="card_header">
                <h3>Top Customers</h3>
              </div>
              <div className="card_body">
              <Table
                  headData={topCustomers.head}
                  renderHead={(item: any, index: any) => renderCusomerHead(item, index)}
                  bodyData={topCustomers.body}
                  renderBody={(item: any, index: any) => renderCusomerBody(item, index)} limit={undefined}                />
              </div>
              <div className="card_footer">
                <Link href='/'>
                  view all
                </Link>
              </div>
            </div>
          </div>
          <div className="col_8">
            <div className="card_8">
              <div className="card_header">
                <h3>Latest Orders</h3>
              </div>
              <div className="card_body">
              <Table
                  headData={latestOrders.header}
                  renderHead={(item: any, index: any) => renderOrderHead(item, index)}
                  bodyData={latestOrders.body}
                  renderBody={(item: any, index: any) => renderOrderBody(item, index)} limit={undefined}                />
              </div>
              <div className="card_footer">
                <Link href='/'>
                  view all
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default dashboard