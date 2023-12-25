import React, { useState } from 'react'
import sendsvg from '../../public/send.svg'
import { sendMessages } from './openai';
import ScrollToBottom from 'react-scroll-to-bottom';

const Content = () => {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            text: "I'm ChatGPT, an AI language model designed by OpenAI. I'm here to help answer questions, provide information, assist with tasks, or just have a chat! How can I assist you today?",
            isBot: true,
        }
    ]);

    const handleSubmitMsg = async () => {

        const text = input;
        setInput('');
        sendMessages([
            ...messages,
            { text, isBot: false }
        ])
        const res = await sendMessages(input);
        setMessages([...messages,
        {
            text,
            isBot: false
        },
        {
            text: res,
            isBot: true
        }]);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmitMsg();
        }
    };

    return (
        <>
            <div className='content-container'>

                <ScrollToBottom className='response-div'>
                    {/* <div className='chatting-msg response'>
                        <div className='user-img'>
                            <img src='./logo.webp' />
                        </div>

                        <div className='message'>
                            <p>Lorem aperiam nihilsequuntur quia fuga numquam eius eum</p>
                        </div>
                    </div> */}

                    {messages.map((message, index) => (
                        <>
                            <div className={message.isBot ? 'chatting-msg  response' : 'chatting-msg'}>
                                <div className='user-img'>
                                    <img src={message.isBot ? './logo.webp' : './user-icon.png'} />
                                </div>

                                <div className='message'>
                                    <p>{message.text}</p>
                                </div>
                            </div>
                        </>
                    ))}


                </ScrollToBottom>

                <div className='search-div'>
                    <div className='search-bar'>
                        <input
                            type='text'
                            placeholder='Type your prompt...'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button onClick={handleSubmitMsg}><img src={sendsvg} /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content