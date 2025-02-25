import React, { useState } from 'react'
import { assets } from '../../assets/assets.js'
import './Sidebar.css'


const Sidebar = () => {
    const [extended, setExtended] = useState(false);

    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} src={assets.menu_icon} className='menu'></img>
                <div className="new-chat">
                    <img src={assets.plus_icon}></img>
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        <div className="recent-entry">
                            <img src={assets.message_icon}></img>
                            {extended ? <p>What is React ...</p> : null}
                        </div>
                    </div>
                    : null
                }

            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon}></img>
                    {extended ? <p>Help</p> : null}
                </div>

                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon}></img>
                    {extended ? <p>Activity</p> : null}
                </div>

                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon}></img>
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar