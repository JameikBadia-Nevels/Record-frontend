import { useNavigate } from "react-router-dom"
import { createRecord } from "../services/records-api"
import '../App.css'

export default function Create(){
    const nav = useNavigate()

    const addRecord = () => {
        let create = {artist: document.querySelector('#artist').value, title: document.querySelector('#title').value, art: document.querySelector('#art').value, year: document.querySelector('#year').value, genre: document.querySelector('#genre').value }
        console.log(create)
        createRecord(create)
        nav('/')
    }

    return (

        <div>
            <h1> Add Album </h1>
            <form>

                Artist:<input id = 'artist' type = 'text'/> <br/>

                Album title:<input id = 'title' type = 'text'/> <br/>

                Cover art:<input id = 'art' type = 'text'/> <br/>

                Release year:<input id = 'year' type = "number" /> <br/>

                Genre:<input id = 'genre' type = 'text'/> <br/>

                <button onClick = {addRecord}>Create Album</button>

            </form>
        </div>
    )
}