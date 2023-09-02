import React from 'react'

import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CImage,
  CProgress,
  CRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'
import {
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cibTwitter,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  const progressExample = [
    { title: 'Players below Gold', value: '', percent: 50, color: 'danger' },
    { title: 'Players in Gold and Platinum', value: '', percent: 35, color: 'warning' },
    { title: 'Players between Gold and Dia', value: '', percent: 47, color: 'info' },
    { title: 'Players below Diamond', value: '', percent: 85, color: 'danger' },
    {
      title: 'Players in Diamond and above',
      value: '',
      percent: 3,
      color: 'success',
    },
  ]

  return (
    <>
      <CCard className="mb-0 mt-0">
        <CCardHeader>
          <CRow className="justify-content-center">
            <CImage src="/assets/images/brand/logo.png" className="w-25"></CImage>
          </CRow>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="Rank Ladder" className="card-title mb-0">
                Rank Ladder
              </h4>
              <div className="small text-medium-emphasis">August 2023</div>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: [
                'Iron',
                'Bronze',
                'Silver',
                'Gold',
                'Platinum',
                'Emerald',
                'Diamond',
                'Master',
                'GrandMaster',
                'Challenger',
              ],
              datasets: [
                {
                  label: 'Solo Queue',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [8.6, 21, 21, 20, 15, 9.3, 2.6, 0.54, 0.037, 0.015],
                  fill: true,
                },
                {
                  label: 'Flex Queue',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [9.6, 23, 22, 20, 14, 6.9, 2.1, 0.13, 0.017, 0.0043],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 10,
                    stepSize: 5,
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>
    </>
  )
}

export default Dashboard
