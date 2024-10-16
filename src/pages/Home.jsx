import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='d-flex justify-content-center align-items-center flex-column' style={{ height: "100vh" }}>
            <h1 className='mb-4 text-light'>Welcome to the Quiz</h1>
            <Link to="/quiz">
                <Button className='px-4' variant='outline-light'>Start</Button>
            </Link>
        </div>
    )
}

export default Home