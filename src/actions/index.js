
//Action creator
export const selectSong = (song)=>{
    return {
        type:'SONG_SELECTED',
        payload:song
    };
};   


export const addSong = (song)=>{
    console.log(song)
    return {
        type:'ADD_SONG',
        payload:song
    };
}; 