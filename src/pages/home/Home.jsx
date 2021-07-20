import React from 'react';
import Leftbar from '../../components/leftbar/Leftbar';
import Topbar from '../../components/topbar/Topbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';
import './home.css';
function Home() {
    return (
        <>
        <Topbar/>
        <div className="homeContainer">
            <Leftbar/>
            <Feed/>
            <Rightbar/>
        </div>
        </>
    );
}

export default Home
