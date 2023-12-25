import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { AiFillHome } from "react-icons/ai";
import { HiSave } from "react-icons/hi";
import { ImRocket } from "react-icons/im";


const Sidebar = () => {
    return (
        <>
            <div className='sidebar-content'>
                <div className='sidebar-top'>
                    <div className='logo'>
                        <img src='../icon.png' /><h3>Chatgpt-Clone</h3>
                    </div>

                    <button className='new-chat'><FaPlus className='new-chat-icon' />New Chat</button>

                    <div className='sidebar-buttons'>
                        <button><LuMessageSquare className='new-chat-icon' />What is Programming?</button>
                        <button><LuMessageSquare className='new-chat-icon' />How to be a developer?</button>
                    </div>
                </div>

                <div className='sidebar-bottom'>
                    <button><AiFillHome className='new-chat-icon' />Home</button>
                    <button ><HiSave className='new-chat-icon' />Save</button>
                    <button><ImRocket className='new-chat-icon' />Upgrade</button>
                </div>
            </div>
        </>
    )
}

export default Sidebar