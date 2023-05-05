import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip"
import React from "react";

function Calender() {
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 8;
      
        return contributions.filter(day => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      }
  return (
    <div align="center"
      // style={{align:"center",marginLeft:"10%",marginRight:"5%"}}
    >
      <h2>GitHub Contributions</h2>
      <GitHubCalendar
        username="Rati3010"
        color="#4b0f83"
        blockSize={17}
        fontSize={20}
        
        
      />
      <ReactTooltip delayShow={20} />
    </div>
  );
}

export default Calender;
