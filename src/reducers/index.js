import {combineReducers} from 'redux';

const songsReducers =()=>{
    return [
        {title:'No SCrups', duration:'4:04'},
        {title:'Macarena', duration:'3:27'},
        {title:'No air', duration:'2:04'},
        {title:'I wanted it that way', duration:'3:15'}
    ]
}


const selectedSongReducer =(selectedSong=null,action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs:songsReducers,
    selectedSong:selectedSongReducer
})


