import React from 'react'
import AddSong from './AddSong'
import SongDetail from './SongDetail'
import SongList from './SongList'


const App = () => {
    return (
        <div className="ui container grid">
          <div className="ui row">
                <div className="column eight wide">
                <SongList/>
                </div>
                <div  className="column eight wide">
                    <SongDetail/>
                </div>
                <div className="column eight wide">
                    <AddSong/>
                </div>
          </div>
        </div>
    )
}

export default App
