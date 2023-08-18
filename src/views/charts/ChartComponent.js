import React from 'react'
import PropTypes from 'prop-types'
import { CChart } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'

const ChartComponent = ({ data1, data2, label1, label2, title }) => {
  // Custom plugin to display text inside the doughnut chart
  const doughnutTextPlugin = {
    id: 'doughnutTextPlugin',
    beforeDraw: function (chart) {
      console.log('doughnutTextPlugin')
      const width = chart.chartArea.width
      const height = chart.chartArea.height
      const ctx = chart.ctx

      ctx.restore()
      const fontSize = (height / 114).toFixed(2)
      ctx.font = fontSize + 'em sans-serif'
      ctx.textBaseline = 'middle'

      const text = `${data1}\n-------------------\n${data2}` // Separate data1 and data2 with horizontal line
      //const textWidth = ctx.measureText(data1).width // Calculate the width of the text

      // Calculate the x position to center the text horizontally
      //const textX = Math.round((width - textWidth) / 2)
      const textY = height / 2 + chart.legend.height + chart.titleBlock.height

      const lines = text.split('\n')
      lines.forEach((line, index) => {
        const lineWidth = ctx.measureText(line).width // Calculate the width of the current line
        const lineX = Math.round((width - lineWidth) / 2) // Center the line horizontally
        ctx.fillText(line, lineX, textY + (index - 1) * 20) // Adjust vertical position
      })

      ctx.save()
    },
  }

  return (
    <div key={data1} className="m-2" style={{ width: '31%' }}>
      <CChart
        type="doughnut"
        data={{
          labels: [label1, label2],
          datasets: [
            {
              backgroundColor: ['#41B883', '#DD1B16'],
              data: [data1, data2],
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            title: {
              display: true,
              text: title,
              font: {
                size: 25,
              },
            },
            legend: {
              labels: {
                color: getStyle('--cui-body-color'),
              },
            },
          },
        }}
        plugins={[doughnutTextPlugin]} // Add the plugin here
      />
    </div>
  )
}

ChartComponent.propTypes = {
  data1: PropTypes.number.isRequired,
  data2: PropTypes.number.isRequired,
  label1: PropTypes.string.isRequired,
  label2: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ChartComponent
