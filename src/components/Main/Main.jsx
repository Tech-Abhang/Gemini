import React from 'react'
import './Main.css'
import {assets} from "../../assets/assets.js"

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon}></img>
        </div>

        <div className="main-container">
            <div className="greet">
                <p><span>Hello , Abhang</span></p>
                <p>How can I help you?</p>
            </div>
        </div>

        <div className="cards">

            <div className="card">
                <p>Suggest beutiful places to see on an upcoming trip</p>
                <img src={assets.compass_icon}></img>
            </div>

            <div className="card">
                <p>Briefly summarize this concept : urban planning</p>
                <img src={assets.bulb_icon}></img>
            </div>

            <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon}></img>
            </div>

            <div className="card">
                <p>Improve the readability of the following <code></code></p>
                <img src={assets.code_icon}></img>
            </div>

        </div>

        <div className="main-bottom">
            <div className="search-box">
                <input type='text' placeholder='Enter a prompt here'></input>
                <div>
                    <img src={assets.gallery_icon} />
                    <img src={assets.mic_icon} />
                    <img src={assets.send_icon} />
                </div>
                <p className="bottom-info"></p>
            </div>
        </div>

    </div>
  )
}

export default Main