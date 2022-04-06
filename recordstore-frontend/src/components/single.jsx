import {useState, useEffect } from 'react'
import { useNavigate, useParams} from 'react-router-dom' 
import { deleteRecord, getRecord } from '../services/records-api'

export default function Single(){

    const nav = useNavigate()

    const {id} = useParams()

    const [data, setData] = useState({})

    useEffect(() => {getRecord(id)
        .then(res => setData(res.data))
    }, [])

    const removeRecord = () => {
        deleteRecord(id)
        nav('/')
    }

    return (
        <div>

            <h1>{data.title}</h1>
            <br/>

            <img src = {data.art} width= '250' height = '400'/>
            <br/>

            <h3> 
            Artist: {data.artist} <br/>     
            Release Year: {data.year} <br/>
            Genre: {data.genre}     
            </h3>

            <button onClick = {() => {nav(`/${id}/edit`)}}> Edit Album </button>
            <button onClick={removeRecord}> Remove Album </button>

        </div>
    )
}