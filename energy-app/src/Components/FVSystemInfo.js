import React, { useState, useEffect } from 'react';
import axios from 'axios';
import energyApi from '../api/energyApi'

function FVSystemInfo() {
  const [fvData, setFvData] = useState(null);

  useEffect(() => {
    // Načítanie dát z API
    energyApi.get('/fv-data')
      .then(response => {
        setFvData(response.data);
      })
      .catch(error => {
        console.error('Error fetching FV system data:', error);
      });
  }, []);

  if (!fvData) {
    return <p>Loading data...</p>;
  }

  return (
    <div>
      <h1>Aktuální FV výkon: {fvData.fvPerformance}</h1>
      <p>Energie z FV systému dnes: {fvData.energyToday}</p>
      <p>Energie z FV systému celkovo: {fvData.totalEnergy}</p>
      <p>Eliminace CO2 dnes: {fvData.co2Today}</p>
      <p>Celková eliminace CO2: {fvData.co2Total}</p>

      {/* Zobrazenie informácií o FV systéme */}
      <h2>Informace o FV systému:</h2>
      <ul>
        <li><strong>Výkon FV systému:</strong> {fvData.systemInfo['PV system power']}</li>
        <li><strong>Jmenovitá kapacita baterie:</strong> {fvData.systemInfo['Nominal battery capacity']}</li>
      </ul>
    </div>
  );
}

export default FVSystemInfo;
