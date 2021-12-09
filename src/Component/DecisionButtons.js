import React from 'react'
import './DecisionButtons.css'

const DecisionButtons = ({onCreate,onEnter}) => {
    return (
        <div className = "btn-container">
            <button onClick={onEnter}>
                Enter Room
            </button>
            <button onClick = {onCreate}>
                Create Room
            </button>
        </div>
    )
}

export default DecisionButtons
