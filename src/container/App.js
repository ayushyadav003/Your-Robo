import React, { useEffect, useState } from 'react'
import './App.css'
import SearchBox from '../components/search/SearchBox'
import CardList from '../components/card/CardList'
import Myrobo from '../components/myrobo/Myrobo';
import Navbar from '../components/navbar/NavBar';

export default function App() {

    const[robots, setRobots] = useState([]);
    const[name,setName] = useState('Admin')

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {setRobots(users)});
    },[])

    const onSearchChange = (event) => {
        setName(event.target.value)
    }
    

    return(
         !robots.length ?
            <h1>Loading</h1> :
        <div className="tc">
            <Navbar />
            <h1 className='f1 white'>Your Robot</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Myrobo name={name.toLowerCase()}/>
            <CardList robots={robots}/>
        </div>
    )
}