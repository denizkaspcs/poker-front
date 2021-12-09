import React from 'react'
import './CreateRoom.css'

const CreateRoom = ({onClickX,onSubmit,setRoomName, setPassword,setStartAmount,setBigBlind}) => {
    return (
        <div >
            <div>
                <div className="close-button">
                    <label draggable="false" onClick={onClickX} >X</label>
                </div>
                <div >
                    <form onSubmit={onSubmit} className="enter-bubble">
                        <label>Set Room Id</label>
                        <input onChange={(e)=>setRoomName(e.target.value)}></input>
                        <label>Set Password</label>
                        <input onChange={(e)=>setPassword(e.target.value)} type="password"></input>
                        <div className='blind'>
                            <label>$$: </label>
                            <input onChange={(e)=>setStartAmount(e.target.value)}></input>
                            <label>Bb: </label>
                            <input onChange={(e)=>setBigBlind(e.target.value)}></input>
                        </div>
                        <button type='submit' >Create Room</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateRoom

