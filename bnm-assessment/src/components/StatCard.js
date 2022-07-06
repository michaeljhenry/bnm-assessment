import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import '../styles/StatCard.css';

const StatCard = ({ data }) => {

  return (
    <>
      {data.map((info) => (
        <Card key = {info.name} className = 'card' sx={{ width: "350px" }}>
        <div className = 'top-row'>
          <Typography variant = 'h6' style = {{fontSize: "14px"}}>{info.name.toUpperCase()}</Typography>
          
        </div>
        <div className = 'card-body'>
          <Typography variant = 'h4'>
            {isNaN(info.metricCount) ? info.metricCount : Number(info.metricCount).toLocaleString()}
          </Typography>
          <Typography variant = 'h4'> | </Typography>
          <Typography variant = 'h4' style = {{color: info.weekOverWeekChange[0] === '-' ? 'red' : 'green'}}>
            {info.percentile.slice(0, -2)}%
          </Typography>
          <div className = 'svg-box'>
            {info.weekOverWeekChange[0] === '-' ? 
                <img className = 'svg-icons' src = '/images/BNM_Metric_Down.svg' alt = 'down arrow' />
              :
                <img className = 'svg-icons' src = '/images/BNM_Metric_Up.svg' alt = 'up arrow' />
            }
            <div style = {{fontSize: "10px"}}>pctl</div>
          </div>
        </div>
        <div className = 'card-footer'>
          <Typography className = 'card-footer__text' variant = 'caption'>
            Your performance from last week 
            <Typography variant = 'caption' style = {{fontSize: "10px", color: info.weekOverWeekChange[0] === '-' ? '#d47a7a' : '#99c099'}}>
            {" "} {info.weekOverWeekChange[0] === "-" ? null : "+"}{info.weekOverWeekChange}%
            </Typography>
          </Typography>
        </div>
      </Card>
      ))}
    </>
  )
}

export default StatCard