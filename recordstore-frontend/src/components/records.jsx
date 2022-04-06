import { getRecords } from "../services/records-api"
import { useEffect, useState } from "react"

export default function Records() {
    const [records, setRecords] = useState([])

    useEffect (() =>{
        getRecords()
        .then( res => setRecords (res.data))
    }, [])

    return(
        <div>
            <h1>Albums</h1>
            <h3> <a href = '/studio'> Add an Album!</a></h3>
            <div className="og">
                {records.map ((records, i) => {
                    return (
                        <div key = {i} className="albums" >

                            <img className="albumCover" src = {records.art} width= '170' height = '152'/>
                        

                            <a className="tag" href= {`/${records._id}`}> {records.title} </a>
                            
                            <br/>
                            <br/>
                        </div> 
                        
                    )
                })}
            </div>
        </div>
    )

}