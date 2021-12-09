import React from 'react'
import './EnterName.css'

const EnterName = ({onSubmit,setName}) => {
    return (
        <div >
            <form className='enter-name' onSubmit={onSubmit}>
                <label>Enter username</label>
                <input onChange={(e)=>setName(e.target.value)} ></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EnterName
