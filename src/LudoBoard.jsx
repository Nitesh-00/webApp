import { useState } from "react"

export default function LudoBoard(){
    let [moves,setMoves] = useState({blue:0,red:0,green:0,yellow:0})
    let [arr,setArr] = useState(["no moves"])
    function updateBlue(){
        setMoves({...moves,blue:moves.blue += 1})
        setArr([...arr," Blue moved"])
    }

    function updateRed(){
        setMoves({...moves,red:moves.red += 1})
    }
    function updateGreen(){
        setMoves({...moves,green:moves.green += 1})
    }
    function updateYellow(){
        setMoves({...moves,yellow:moves.yellow += 1})
    }
    
    return (
        <div>
            <p>Game Begins!</p>
            <div>
                <p>Blue Moves = {moves.blue}</p>
                <p>{arr}</p>
                <button onClick={updateBlue} style={{backgroundColor:"blue"}}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button onClick={updateRed} style={{backgroundColor:"red"}}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button onClick={updateGreen} style={{backgroundColor:"green"}}>+1</button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button onClick={updateYellow} style={{backgroundColor:"yellow"}}>+1</button>
            </div>
        </div>
    )
}