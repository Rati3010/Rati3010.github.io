import React from 'react'
import ReactGitHubCalendar from 'react-ts-github-calendar';
const Github = () => {
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(1,1fr)',justifyContent:'center'}}>
        <h1 style={{textAlign:"center",fontSize:"25px",marginBottom:"20px"}}>Github</h1>
        <ReactGitHubCalendar userName='Rati3010' responsive={true} />
        <p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=Rati3010&show_icons=true&count_private=true" alt="rati3010" /></p>
    </div>
  )
}

export default Github