import React from "react"
import io from "socket.io-client"
import "./App.css"
import Elements from "./Components/elements"


const socket = io.connect('http://localhost:5000')
function App() {
return (
		<div className="App">
		<Elements socket={socket}/>
		</div>
	)
}

export default App
