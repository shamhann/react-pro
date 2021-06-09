import React from 'react';

function NotFound(props) {
    return (
        <div className='notFound'>
           <div className='notFoundTitle'>
               Ошибка 404.
           </div>
           <div className='notFoundText'>
               страница не дооступна
           </div>
        </div>
    );
}

export default NotFound;