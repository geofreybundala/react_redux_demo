import {combineReducers} from 'redux';

const initialsongs =[
        {title:'No SCrups', duration:'4:04'},
        {title:'Macarena', duration:'3:27'},
        {title:'No air', duration:'2:04'},
        {title:'I wanted it that way', duration:'3:15'}
]

const songsReducers =(songs=initialsongs,action)=>{
    if(action.type==='ADD_SONG'){
       let oldsongs =songs
        return [...oldsongs,action.payload]
    }

    return songs
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


