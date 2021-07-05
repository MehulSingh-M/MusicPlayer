import React from 'react'

function Playlist() {

    testfun()
    {
        alert("hela")
    }

    return (
        <div>
            <h1>Profile</h1>
            <button onClick={()=>this.testfun}>click me</button>
            
        </div>
    )
}

export default Playlist
