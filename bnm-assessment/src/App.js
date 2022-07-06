import StatCard from "./components/StatCard";
import TabPanel from "./components/TabPanel";
import TopBar from "./components/TopBar";
import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";

import "./styles/App.css"

const tabToDataMap = {
  0: 'overview',
  1: 'traffic',
  2: 'sitePerformance'
}

function App() {
  const [data, setData] = useState([]);
  const [tab, setTab] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleTabChange = (e, newValue) => {
    setTab(newValue);
  }
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(`http://localhost:5000/api/routes/data`)
      const dataJson = await data.json();
      setData(dataJson.data);
      setLoading(false);
    }
    getData()
  }, [])

  return (
    <div className="App">
      <TopBar />
      <TabPanel tab = {tab} handleTabChange = {handleTabChange} />
      {loading && (
        <div className = 'progress-bar__row'>
          <CircularProgress />
        </div>
      )}
      <div className = 'cards-container'>
        {!loading && <StatCard data = {data[tabToDataMap[tab]]} tab = {tab} />}
      </div>
    </div>
  );
}

export default App;
