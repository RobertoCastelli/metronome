import React, { useState } from 'react'
import click1 from './sound/click1.wav'

function Main() {

    const [range, setRange] = useState(60)
    const [playingState, setPlayingState] = useState(false)
    
    const primaryClick = new Audio(click1)
    let metronome;

    const handleRange = e => setRange(e.target.value)

    // DANY IL PROBLEMA È IN QUESTA FUNZIONE
    const handleTempo = e => {
        if (playingState) { 
            clearInterval(metronome) // NON SI FERMA IL METRONOMO QUANDO 'PLAYINGSTATE' MUTA STATO
            setPlayingState(false)
        } else {
            e.preventDefault()
            metronome = setInterval(() => primaryClick.play(), (60 / range) * 1000);
            setPlayingState(true)
        }
    }
    
    return (
        <div>
            <input className="slider" onInput={handleRange} type="range" min="60" max="240"/>
            <h2 className="range-value">{range} bmp</h2>
            <button onClick={handleTempo}>{playingState ? 'STOP' : 'START'}</button>
        </div>
    )
}
export default Main