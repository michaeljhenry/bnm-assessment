import StatCard from "./components/StatCard";
import TabPanel from "./components/TabPanel";
import TopBar from "./components/TopBar";
import React, { useState, useEffect } from "react";
import { CircularProgress, Typography } from "@mui/material";

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
  const [error, setError] = useState(false);

  const handleTabChange = (e, newValue) => {
    setTab(newValue);
  }
  useEffect(() => {
    const getData = async () => {
      fetch(`http://localhost:5000/api/routes/data`)
      .then(async (res) => {
        const dataJson = await res.json();
        setData(dataJson.data);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setData(null);
        setLoading(false);
        setError(true);
      });
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
        {!loading && data && <StatCard data = {data[tabToDataMap[tab]]} tab = {tab} />}
        {error && <Typography variant = 'h6'>Something went wrong. Please try again later.</Typography>}
      </div>
    </div>
  );
}

export default App;
