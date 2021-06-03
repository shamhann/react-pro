import React from 'react';
import {useSelector} from "react-redux";
import Photo from "./Photo";

function Photos(props) {
    const photos = useSelector(state => state.photos);
    const selectedAlbumId = useSelector(state => state.selectedAlbumId);

    const filteredPhoto = photos
        .filter(photo => photo.albumId === selectedAlbumId);
        return false

    return (
        <div className='photos'>
           <ul>
               {filteredPhoto.map(photo => {
                   return <Photo photo={photo} key={photo.id}/>
               })}
           </ul>
        </div>
    );
}

export default Photos;