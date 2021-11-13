import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function DefaultLayout(props) {
    return (
        <>
        <div>
            <Navbar/>
            {props.children}
            <div>Footer</div>
        </div>
        </>
    )
}
