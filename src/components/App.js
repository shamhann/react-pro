import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function App(props) {
    return (
        <div className='container text-center'>
           <div className='row'>
               <div className='col'>
                   <Header/>
                   <Main/>
                   <Footer/>
               </div>
           </div>
        </div>
    );
}

export default App;