const initialstate = {
    filter: "",
    selectedAlbumId: null,
    albums:[],
    photos: [],

    loadingPhotos: false,
    loadingAlbums:false,
}

export default  (state = initialstate, action) => {
    switch (action.type) {
        case 'albums/load/start':
            return {
                ...state,
                loadingAlbums: true
            }
        case 'albums/load/success':
            return {
                ...state,
                albums: action.payload,
                loadingAlbums: false
            }
        case 'album/select':
            return {
                ...state,
                selectedAlbumId: action.payload
            }
        case 'photos/load/start':
            return {
                ...state,
                loadingPhotos: true,
            }
        case 'photos/load/success':
            return {
                ...state,
                photos: action.payload,
                loadingPhotos: false
            }
        default:
            return state;;
    }
}
