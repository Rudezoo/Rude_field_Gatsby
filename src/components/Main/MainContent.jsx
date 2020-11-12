import React from 'react'
import { Router } from "@reach/router"
import About from '../Content/About'
import Code from '../Content/Code'
import Layout from '../layout'
import Article from '../Content/Article'
import Study from '../Content/Study'
import Game from '../Content/Game'
import Music from '../Content/Music'
import FreeFire from '../Content/Freefire'

import '../../styles/css/MainContent.css'

const MainContent = () => {
    return (
        <>
            <div>
                <div className="Content">
                    
                    <Router>
                        <Article path='/'></Article>
                        <About path='/app/About'></About>
                        <Code path='/app/Code'></Code>
                        <Study path='/app/Study'></Study>
                        <Game path='/app/Game'></Game>
                        <Music path='/app/Music'></Music>
                        <FreeFire path='/app/Freefire'></FreeFire>
                    
                    </Router>
                </div>
            </div>


        </>
    );
}

export default MainContent;