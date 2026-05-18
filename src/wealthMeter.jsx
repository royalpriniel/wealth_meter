import { useState } from 'react';

const MAX_WEALTH = 10000;

const CONTAINER_STYLE = {
  textAlign: 'center',
  width: "20rem",
  minHeight: "50vh",
  margin: "auto",
  backgroundColor: "#ab0",
  position: "relative",
  top: "20px",  
  padding: "0.7%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: 'center',
  justifyContent: 'center'
};

const INNER_STYLE = {
  display: "flex",
  alignItems: "center",
  width: "95%",
  margin: "2% auto",
  border: "2px solid black",
  backgroundColor: "#052",
  height: "6vh",
};

const BAR_BASE_STYLE = {
  height: "100%",
  transition: "width 0.3s ease-out, background-color 0.3s ease-out",
  borderRadius: "3px",
};

const getWealthColor = (currentWealth) => {
  if (currentWealth > 6000) return 'green';
  if (currentWealth > 2000) return 'gold';
  return 'red';
};

const getCoinsAmount = (currentWealth) => {
  if (currentWealth >= 8000) return "💰💰💰💰💰";
  if (currentWealth >= 6000) return "💰💰💰💰";
  if (currentWealth >= 4000) return "💰💰💰";
  if (currentWealth >= 2000) return "💰💰";
  return "💰";
};

export function WealthMeter() {
  const [wealth, setWealth] = useState(0);

  // Calculate percentage dynamically
  const barWidth = `${(wealth / MAX_WEALTH) * 100}%`;
  
  const dynamicBarStyle = {
    ...BAR_BASE_STYLE,
    width: barWidth,
    backgroundColor: getWealthColor(wealth),
  };
  
  const barAdd = () => setWealth(prev => Math.min(MAX_WEALTH, prev + 80));
  const barSubtract = () => setWealth(prev => Math.max(0, prev - 80));

  return (
    <div style={CONTAINER_STYLE}>
      <h2> <span>{getCoinsAmount(wealth)}</span> Treasure: {wealth}</h2>
      <div style={INNER_STYLE}>
        <div style={dynamicBarStyle}></div>
      </div>
      <div style={{textAlign:'center', margin: 'auto'}}>
        <button onClick={barAdd} disabled={wealth === MAX_WEALTH} style={{margin: '5px', padding: '10px'}}>
          Add Gain (+80)
        </button>
        <button onClick={barSubtract} disabled={wealth === 0} style={{margin: '5px', padding: '10px'}}>
          Withdraw (-80)
        </button>
        <button onClick={() => setWealth(0)} disabled={wealth === 0} style={{margin: '5px', padding: '10px'}}>
          Withdraw All
        </button>
      </div>
    </div>
  );
}
