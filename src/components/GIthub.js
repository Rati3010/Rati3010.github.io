import React from 'react'
import ReactGitHubCalendar from 'react-ts-github-calendar';
const Github = () => {
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(1,1fr)',justifyContent:'center'}}>
        <h1 style={{textAlign:"center",fontSize:"25px",marginBottom:"20px"}}>Github</h1>
        <ReactGitHubCalendar userName='Rati3010' responsive={true} />
        <h1 style={{textAlign:"center",fontSize:"25px",marginBottom:"20px"}}>Github Status</h1>
        <p style={{margin:"auto"}}>&nbsp;<img align="center" src="https://github-readme-stats-sigma-five.vercel.app/api?username=rati3010&show_icons=true&count_private=true&theme=react" alt="rati3010" /></p>
    </div>
  )
}

export default Github