import React from 'react'
import './RoboDetail.css'

export default function RoboDetail({ name }) {
    return (
        <div className="box">
            <div className="subBox">
                <div className="heads">
                    <p>Name :-</p>
                    <p>Storage :-</p>
                    <p>Version :-</p>
                    <p>Intelligence :-</p>
                    <p>Department :-</p>
                </div>
                <div className="heads">
                    <p>{name.toUpperCase()}</p>
                    <p>...</p>
                    <p>...</p>
                    <p>...</p>
                    <p>...</p>
                </div>    
            </div>
        </div>
    )
}