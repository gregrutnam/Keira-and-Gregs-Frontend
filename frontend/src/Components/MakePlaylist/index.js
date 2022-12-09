import { useEffect, useState } from "react";

// take the inputs for name, description and private/public
    // import useState from react
// store them in useStates
    //declare the states as variables, empty string in the smoothies
    // using the onChange in the the input tag
    // event in the smoothies
    //target the event.target.value
// pass that to the function that makes the playlist - in the backend
// have the playlist created from the submit button



export default function MakePlaylist(){
 const [name, setName] = useState("")
 const [description, setDescription] = useState("")
 const [setting, setSetting] = useState("")

function playlistName(event){
    setName(event.target.value)
}
useEffect(()=>{
    console.log("playlist name", name)
},[name])

function playlistDescription(event){
    setDescription(event.target.value)
}
useEffect(()=>{
    console.log("playlist description", description)
},[description])

function handleSelect(event){
    setSetting(event.target.value)
}
useEffect(()=>{
    console.log("playlist setting", setting)
},[setting])

    return <div><h1>Make the playlist</h1>
    <p>Name</p>
    <input onBlur={playlistName}></input>
    <p>Description</p>
    <input onBlur={playlistDescription}></input>
    <p>Select a setting</p>
    <select onChange={handleSelect}><option>Public</option><option>Private</option></select>
    <form action="http://localhost:3000/add-songs">
        <input type="submit" value="Submit Playlist" />
    </form>


    </div>
}