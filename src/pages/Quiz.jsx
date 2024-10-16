import React from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import Questions from '../Questions'
import { Link } from 'react-router-dom'

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [mark, setMark] = useState(0)
    const [userAnswer, setUserAnswer] = useState(null)
    const [isAnsweredCorrect, setIsAnsweredCorrect] = useState(false);
    const [result, setResult] = useState(false)

    const handleAnswer = () => {
        // Checking if user has selected an answer
        if (userAnswer === null) {
            alert("Please answer the question before moving to the next one.");
            return;
        }

        if (userAnswer === Questions[currentQuestion].correctAnswer) {
            setMark(mark + 1)
        }

        setUserAnswer(null) // Resetting userAnswer for the next question
        setIsAnsweredCorrect(false); // Resetting isAnsweredCorrect for the next question

        if (currentQuestion < Questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        }
        else {
            setResult(true)
        }
    }

    const handleOptionClick = (choice) => {
        setUserAnswer(choice);
        setIsAnsweredCorrect(true); // Set to true when an answer is selected
    };

    const percentage = ((mark / Questions.length) * 100).toFixed(2);

    return (
        <>
            <div className='d-flex justify-content-center align-items-center flex-column' style={{ height: '100vh' }}>
                {result ?
                    <div className='w-50 border rounded p-5' style={{ backgroundColor: 'rgb(255,255,255)' }}>
                        <h1 className='text-center mb-3 result' style={{ color: '#007bff' }} >Congratulations!</h1>
                        <hr style={{ borderColor: '#007bff' }} />
                        <h3 className='text-center mb-3' style={{ color: percentage >= 50 ? '#28a745' : '#dc3545' }}>You scored {percentage}%</h3>
                        <div className='d-flex justify-content-evenly' style={{ color: 'green' }}>
                            <h5>Correct Answers :</h5>
                            <h5>{mark}</h5>
                        </div>
                        <div className='d-flex justify-content-evenly' style={{ color: 'orangered' }}>
                            <h5>Wrong Answers :</h5>
                            <h5>{Questions.length - mark}</h5>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Link to={'/'}>
                                <Button className='mt-4' variant="primary">Restart Quiz</Button>
                            </Link>
                        </div>
                    </div>

                    :

                    <div className='w-50 border rounded p-5' style={{ backgroundColor: 'rgb(255,255,255,0.7)' }}>
                        <div className='d-flex align-items-baseline'>
                            <h2>{currentQuestion + 1}</h2><h6>/5</h6>
                        </div>
                        <hr />
                        <h5 className='mb-4'>{Questions[currentQuestion].question}</h5>
                        <div className='d-flex flex-column'>
                            {Questions[currentQuestion].choices.map((choice, index) => (
                                <Button key={index + 1}
                                    className='mb-2'
                                    variant={
                                        isAnsweredCorrect ?
                                            (
                                                choice === Questions[currentQuestion].correctAnswer ? "success" : (choice === userAnswer ? "danger" : "outline-dark")
                                            )
                                            :
                                            (
                                                userAnswer === choice ? "dark" : "outline-dark"
                                            )
                                    }
                                    onClick={() => handleOptionClick(choice)}
                                    disabled={isAnsweredCorrect}
                                >
                                    {`${choice}`}
                                </Button>
                            ))}
                        </div>
                        <div className='d-flex mt-3'>
                            <Button className='px-5 mx-auto' variant='dark' onClick={handleAnswer}>Next</Button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Quiz