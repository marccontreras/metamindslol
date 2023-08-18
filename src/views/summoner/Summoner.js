import React, { useEffect, useState } from 'react'
import Match from './Match'
import { useLocation } from 'react-router-dom'
import { CButton, CCol, CContainer, CListGroup, CRow } from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'

const Summoner = () => {
  const [matchList, setMatchList] = useState([])
  //const temporalSummoner = 'simply me' // Replace with your desired summoner name

  // Access the location object using useLocation()
  const location = useLocation()

  // Access the 'summoner' object from the location state
  const { summoner } = location.state

  // Destructure 'summoner' object to get 'name' and 'summonerPlatform'
  const { name, platform } = summoner

  console.log(platform)
  console.log(name)
  const handleFetchMatchList = () => {
    fetch(`http://localhost:8080/match/${platform}/matches/summoner/${name}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        return response.json()
      })
      .then((data) => {
        setMatchList(data)
        console.log('Match list:', data) // Log the data received from the API
        window.location.reload() // Refresh the page after fetching the data
      })
      .catch((error) => console.error('Error fetching match list:', error))
  }

  useEffect(() => {
    //fetch(`http://localhost:8080/match/EUW/recentMatch/summoner/${temporalSummoner}`)
    fetch(`http://localhost:8080/match/EUW/summoner/${name}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        return response.json()
      })
      .then((data) => {
        setMatchList(data)
        console.log('Match list:', data) // Log the data received from the API
      })
      .catch((error) => console.error('Error fetching match list:', error))
  }, [name])

  // Sort the matchList array by gameEndTimestamp in descending order
  const sortedMatchList = matchList.sort((a, b) => b.gameEndTimestamp - a.gameEndTimestamp)

  // Calculate the number of games won and lost
  const { wins, loses } = sortedMatchList.reduce(
    (accumulator, match) => {
      const firstTeam = match.teams[0]
      const teamWinner = firstTeam.win === true ? firstTeam.teamId : match.teams[1].teamId
      const summonerTeam = match.participants.find(
        (participant) => participant.summonerName === name,
      )?.team

      if (teamWinner === summonerTeam) {
        accumulator.wins += 1
      } else {
        accumulator.loses += 1
      }

      return accumulator
    },
    { wins: 0, loses: 0 },
  )

  // Custom plugin to display text inside the doughnut chart
  const doughnutTextPlugin = {
    id: 'doughnutTextPlugin',
    beforeDraw: function (chart) {
      console.log('doughnutTextPlugin')
      const width = chart.chartArea.width
      const height = chart.chartArea.height
      const ctx = chart.ctx

      ctx.restore()
      const fontSize = (height / 110).toFixed(2)
      ctx.font = fontSize + 'em sans-serif'
      ctx.textBaseline = 'middle'

      const winrate = ((wins * 100) / (wins + loses)).toFixed(1) // Calculate the winrate
      const text = winrate + '%' // Separate data1 and data2 with horizontal line
      const textWidth = ctx.measureText(text).width // Calculate the width of the text

      // Calculate the x position to center the text horizontally
      const textX = (width - textWidth) / 2
      const textY = height / 2 + chart.legend.height + chart.titleBlock.height

      ctx.fillText(text, textX, textY) // Adjust vertical position

      ctx.save()
    },
  }
  return (
    <div>
      <CContainer fluid className="d-flex justify-content-sm-start">
        <CCol>
          <CRow>
            <CCol sm="auto">
              <CRow>
                <img
                  style={{ height: '100px', width: '100px' }}
                  className="ms-2 p-0"
                  src={'/assets/images/profileicon/' + summoner.profileIconId + '.png'}
                  alt={summoner.profileIconId}
                />
              </CRow>
              <CRow className="justify-content-center">LvL {summoner.summonerLevel}</CRow>
              <CRow className="mb-3">
                {' '}
                {/* Add the button that triggers the fetch call and page refresh */}
                <CButton color="success" onClick={handleFetchMatchList}>
                  Update
                </CButton>
              </CRow>
            </CCol>
            <CCol>
              <CRow className="mx-2">
                <h1 style={{ whiteSpace: 'nowrap' }}>{name}</h1>
              </CRow>
              <CRow className="mx-5">
                {/* Conditionally render the chart only when the sum of wins and losses is greater than 0 */}
                {wins + loses > 0 && (
                  <CContainer sm="auto" className="m-0" style={{ height: '20%', width: '20%' }}>
                    <CChart
                      type="doughnut"
                      data={{
                        labels: ['Wins', 'Loses'],
                        datasets: [
                          {
                            backgroundColor: ['#41B883', '#DD1B16'],
                            data: [wins, loses],
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
                          legend: {
                            labels: {
                              color: getStyle('--cui-body-color'),
                            },
                          },
                        },
                      }}
                      plugins={[doughnutTextPlugin]} // Add the plugin here
                    />
                  </CContainer>
                )}
              </CRow>
            </CCol>
          </CRow>
        </CCol>
      </CContainer>
      <div>
        {Array.isArray(sortedMatchList) && sortedMatchList.length > 0 ? (
          sortedMatchList.map((match) => {
            const firstTeam = match.teams[0]
            const teamWinner = firstTeam.win === true ? firstTeam.teamId : match.teams[1].teamId
            // Calculate the value of summonerWon based on the comparison
            const summonerWon =
              match.participants.find((participant) => participant.summonerName === name)?.team ===
              teamWinner
            return (
              // Add the return statement here
              <CListGroup key={match.id}>
                <Match match={match} summonerName={name} summonerWon={summonerWon} />
              </CListGroup>
            )
          })
        ) : (
          <p>No games found, try updating</p>
        )}
      </div>
    </div>
  )
}

export default Summoner
