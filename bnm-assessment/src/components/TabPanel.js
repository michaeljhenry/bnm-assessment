import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import '../styles/TabPanel.css'

const TabPanel = ({ tab, handleTabChange} ) => {


  return (
    <Box sx={{ width: '100%' }} className = 'tabs-row'>
    <Tabs
      className = 'tabs'
      style = {{height: "30px"}}
      value = {tab}
      onChange = {handleTabChange}
      TabIndicatorProps={{
        style: {
          backgroundColor: "#a1db81"
        }
      }}
    >
      <Tab className = 'tab' style = {{backgroundColor: tab === 0 ? "#a1db81" : "grey", marginLeft: "50px"}} label = "Overview" />
      <Tab className = 'tab' style = {{backgroundColor: tab === 1 ? "#a1db81" : "grey"}} label = "Traffic" />
      <Tab className = 'tab' style = {{backgroundColor: tab === 2 ? "#a1db81" : "grey"}} label = "Site Performance" />
    </Tabs>
    </Box>
  )
}

export default TabPanel