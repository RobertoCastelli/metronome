import React, { useState } from 'react'
import click1 from './sound/click1.wav'

function Main() {

    const [range, setRange] = useState(60)
    const [playingState, setPlayingState] = useState(false)
    const [metronome, setMetronome] = useState()
    
    const primaryClick = new Audio(click1);
    
    const handleRange = e => {
        setRange(e.target.value)
        setPlayingState(false)
        clearInterval(metronome)
    }
        
    const handleTempo = e => {
        e.preventDefault()
        if (playingState) { 
                console.log('I am silent')
                clearInterval(metronome)
                setPlayingState(false)
            } else {
                console.log('I am playing')
                setMetronome(setInterval(() => primaryClick.play(), (60 / range) * 1000))
                setPlayingState(true)
            }
    }
    
    return (
        <div>
            <input className="slider" onInput={handleRange} type="range" min="60" max="240"/>
            <h2 className="range-value">{range} bmp</h2>
            <button onClick={handleTempo} >{playingState ? 'STOP' : 'START'}</button>
        </div>
    )
}

export default Main