import React from 'react';
import Buttons from "./Buttons";

function HomePage(props) {
    return (
        <div>
            <div className='main'>
                <div className='title'>
                    Cover your page.
                </div>
                <div className='subTitle'>
                    Cover is a one-page template for building
                    simple and beautiful home <br/> pages.
                    Download, edit the text, and add your own
                    fullscreen <br/>background photo to make it your own.
                </div>
                <Buttons/>
            </div>
        </div>
    );
}

export default HomePage;