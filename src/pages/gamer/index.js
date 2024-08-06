import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'

const index = () => {

    const onSuccess=()=>{
        console.log('value of the Data')
    }
    const {isLoading,data,isError,error,}=useQuery('super-heros',()=>{
        return axios.get('http://localhost:4000/superheros')
    },{
        onSuccess
    });

    if(isLoading){
        return <h2>Loading..</h2>
    }
    if(isError){
        return <h2>Err0...</h2>
    }

    return (
        <div>
            <h1>
             {data && data?.data.map((key)=>(<h1>{key.name}</h1>))}
            </h1> 
        </div>
    )
}

export default index
