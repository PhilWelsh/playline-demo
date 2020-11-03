import React, { useState, useEffect } from "react";
import axios from "axios"
import LoadingBar from "./LoadingBar"

const dataEndPoint =
  "https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json";

const errorEndPoint =
"https://wrongURL.json" //for testing

const PlayWindow = () => {
  const [playerRoster, setPlayerRoster] = useState({players:[]});
  const [loadingValue, setLoadingValue] = useState()
  const proxyurl = "https://cors-anywhere.herokuapp.com/";  //to deal with CORS issue
  
  async function getPlayerData(){
    setLoadingValue("loading")
    axios
      .get((proxyurl + dataEndPoint), {headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "X-Requested-With",'Access-Control-Allow-Credentials':true}})
      .then(res => {
        setPlayerRoster({players: res.data.players}); 
        setLoadingValue("loaded")
      })
      .catch(err =>{
        console.log(err)
        setLoadingValue("error")
      })
  }

  const renderPlayerRoster = playerRoster.players.map((player, i) => {return(
    <div key={i} className="player to-upper">
      <img alt="face" src={`/assets/headshots/${player.last_name}.png`}/>
      <div><span>{player.last_name}</span></div>
      <div className="points-bubble morganfont"><span>{player.points}</span></div>
      <span>PTS</span>
    </div>
  )})

  useEffect(() => {
    getPlayerData()
  }, [])

  return (
    <nav className="play-window">
      <LoadingBar loadingValue={loadingValue}/>
      <div id="response-message" className="morganfont">
        <h2>Your Playline is set!</h2>
        <h3>Come back @ 7:30 to track it live!</h3>
        <hr/>
      </div>
      <p id="hint">ProTip: You can manage your PlayLine's until they go live in the <a href="/upcoming" >Upcoming area</a></p>
      <div id="team-roster">
        {playerRoster.players.length ? renderPlayerRoster : ""}  
      </div>
      <div className="action-buttons">
        <a id="notify" className="button" href="https://app.playline.com/"><img src="/assets/icons/notify-me.svg" srcSet="/assets/icons/notify-me@2x.png 2x, /assets/icons/notify-me@3x.png 3x" alt="bell" /><span>Notify Me</span></a>
        <a id="deposit" className="button" href="https://app.playline.com/"><img src="/assets/icons/money-bag.svg" srcSet="/assets/icons/money-bag@2x.png 2x, /assets/icons/money-bag@3x.png 3x" alt="money" /><span>Deposit</span></a>
      </div>
      <hr style={{opacity:0.1}}/>
      <div className="app-download">
      <div className="message" className="to-upper"><p>Download the App</p></div>
      <div id="download-buttons">
        <a className="app-button" href="https://play.google.com/store/"><img src="/assets/icons/ios-app.svg" srcSet="/assets/icons/ios-app@2x.png 2x, /assets/icons/ios-app@3x.png 3x" alt="ios app" /></a>
        <a className="app-button" href="https://www.apple.com/ca/app-store/"><img src="/assets/icons/google-play.svg" srcSet="/assets/icons/google-play@2x.png 2x, /assets/icons/google-play@3x.png 3x" alt="google play" /></a>
        </div>
      </div>
    </nav>
  );
};
export default PlayWindow;
