import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='d-flex justify-content-center align-items-center flex-column' style={{ height: "100vh" }}>
            <h2 className='mb-4 text-light'>Welcome to the Quiz</h2>
            <Link to="/quiz">
                <Button variant='outline-light'>Start Quiz</Button>
            </Link>
        </div>
    )
}

export default Home