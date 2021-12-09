import React from 'react'
import './EnterRoom.css'

const EnterRoom = ({onClickX,onSubmit,setRoomName,setPassword}) => {
    return (
        <div >
            <div>
                <div className="close-button">
                    <label draggable="false" onClick={onClickX} >X</label>
                </div>
                <div className="enter-bubble">
                    <form className='enter-room-form' onSubmit={onSubmit}>
                        <label>Enter Room Id</label>
                        <input onChange={(e)=>setRoomName(e.target.value)} ></input>
                        <label>Enter Password</label>
                        <input onChange={(e)=>setPassword(e.target.value)} ></input>
                        <button className="submit-button" type="submit">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EnterRoom

