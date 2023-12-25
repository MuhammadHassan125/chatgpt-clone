import React from 'react'
import './style.scss';
import Sidebar from './Sidebar';
import Content from './Content';

const Page = () => {
    return (
        <>
            <section className='main-section'>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='content'>
                    <Content />
                </div>
            </section>
        </>
    )
}

export default Page