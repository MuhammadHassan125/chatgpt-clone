import React, { useEffect } from 'react'
import './Preloader.scss'
import { preLoaderAnim } from '../../animations'

const Preloader = () => {

    useEffect(() => {
        preLoaderAnim()
    }, [])
    return (
        <>
            <main className='preloader'>
                <div className='texts-container'>
                    <span data-text="ChatGPT Clone..." className="preloader-text">ChatGPT Clone...</span>
                </div>
            </main>
        </>
    )
}

export default Preloader