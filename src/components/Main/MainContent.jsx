import React from 'react'
import { Router } from "@reach/router"
import About from '../Content/About'
import Code from '../Content/Code'
import Layout from '../layout'
import Article from '../Content/Article'
import Study from '../Content/Study'
import Game from '../Content/Game'
import Music from '../Content/Music'


import '../../styles/css/MainContent.css'
import Freefire from '../Content/FreeFire/FreefireMain'
import FreeProfile from '../Content/FreeFire/Profile'


const MainContent = () => {
    return (
        <>
            <div>
                <div className="Content">
                    
                    <Router>
                        <Article path='/'></Article>
                        <Article path='app'></Article>
                        <About path='app/About'></About>
                        <Code path='app/Code'></Code>
                        <Study path='app/Study'></Study>
                        <Game path='app/Game'></Game>
                        <Music path='app/Music'></Music>
                        <Freefire path='app/Freefire'></Freefire>
                        <FreeProfile path='app/Freefire/Profile'></FreeProfile>

                    </Router>
                </div>
            </div>


        </>
    );
}

export default MainContent;