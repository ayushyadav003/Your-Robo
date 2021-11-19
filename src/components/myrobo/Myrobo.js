import React, { useState } from 'react'
import RoboDetail from './RoboDetail';
import './Myrobo.css'

export default function Myrobo({ name }) {
    const[details,setDetails] = useState(true);

    const onRoboclick = () =>{
        setDetails(!details)
    }

    return (
        <div onClick={onRoboclick}>
            {
            details?
            <div>
                <div className='tc bg-transparent grow  pa3 ma2 mb5 dib bw2 shadow-5'>
                    <img alt='robots' src={`https://robohash.org/${name}}?size=200x200`} />
                    <p className="white">{name.toUpperCase()}</p>
                </div>
            </div>
                    :<div className="detailCard">
                        <div className="rob">
                            <div className='tc grow br3 bw2 shadow-5'>
                                <img alt='robots' src={`https://robohash.org/${name}}?size=200x200`} />
                                <p className="white">{name.toUpperCase()}</p>
                            </div>
                            <div className="detailback dib">
                                <RoboDetail name={name} />
                            </div>
                        </div>
                    </div>  
                    
                }

        </div>
    )
}