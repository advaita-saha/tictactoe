import React from "react";
import "../App.css"

function Square({val, chooseSquare}){
    return (
        <div className="square" onClick={chooseSquare}>
            
            {val == "X" 
            ? <img className="img-s" src="https://pngimg.com/uploads/hammer/hammer_PNG1124.png" alt="X"/> 
            : val == "O" ? <img className="img-s" src="https://www.freeiconspng.com/uploads/soccer-ball-png-9.png" alt="O"/> : val }
        </div>
    )
}

export default Square;