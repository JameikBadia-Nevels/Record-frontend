import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { editRecord, getRecord } from '../services/records-api'
import '../App.css'

export default function Edit(){
    const {id} = useParams()

    const nav = useNavigate()

    const [data, setData] = useState({})

    useEffect (() => {

        getRecord(id)

        .then(res => setData(res.data))

    }, [])

    const changeRecord = e => {

        const updatedRecord = {artist: e.target.artist.value, art: e.target.art.value, title: e.target.title.value, year: e.target.year.value, genre: e.target.genre.value}

        editRecord(id, updatedRecord)

        nav(`/${id}`)
    }

    return(

        <div>
            <h1>Edit Record</h1>

            <form onSubmit = {changeRecord}>
                
            Artist:<input  type = 'text' name = 'artist' defaultValue={data.artist}/> <br/>

            Album title:<input  type = 'text' name = 'title' defaultValue={data.title}/> <br/>

            Cover art:<input  type = 'text' name = 'art' defaultValue={data.art} /> <br/>

            Release year:<input  type = "number" name = 'year' defaultValue={data.year} /> <br/>

            Genre:<input  type = 'text' name = 'genre' defaultValue={data.genre} /> <br/>

            <input type = 'submit' />

            </form>
        </div>
    )
}