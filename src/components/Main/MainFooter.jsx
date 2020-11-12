import React from 'react'
import { Link } from 'gatsby'

const MainFooter = () => {
    return (
        <>
            <div>
                © {new Date().getFullYear()}
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>&Rude_zoo
            </div>

        </>
    );
}

export default MainFooter;