import React,{useState} from 'react'
import {connect} from 'react-redux'
import {addSong} from '../actions'

const AddSong = (props) => {
    const [name,setName] =useState("")
    const [duration,setDuration] =useState("")
    const submitSong =()=>{
                    //get song details
        if(duration !=='' && name!==''){
            let newSong={title:name,duration:duration}
            props.addSong(newSong)
            setName('')
            setDuration('')
        }
    }
    return (
        <div>
           <form className="ui form">
            <h4 className="ui dividing header">Add new song</h4>
            <div className="field">
                <label>Song</label>
                <div className="two fields">
                <div className="field">
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="shipping" placeholder="Song Name"/>
                </div>
                <div className="field">
                    <input type="text" value={duration} onChange={(e)=>setDuration(e.target.value)} name="shipping[last-name]" placeholder="Song Duration"/>
                </div>
                </div>
            </div>
            <div className="ui button" onClick={submitSong} >Submit</div>
            </form>
        </div>
    )
}

const mapDispatchToProps ={addSong};
export default connect(null, mapDispatchToProps)(AddSong)
