import React from 'react';
import { useState } from 'react'
import { Data } from '../data/questions'
import "../components/Quiz.css"

const Quiz = () => {
  const [data] = useState(Data);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setQuizFinished] = useState(false);
  const handleReset = () => {
    setIndex(0)
    setQuizFinished(false)
    setScore(0)
  }
  const handleChange = (event) => {
    const selectVal = event.target.value;
    if (data[index].ans === selectVal) {
      setScore(score + 1)
    }
  }
  const handleNext = () => {
    if (index < data.length - 1) {
      setIndex(index + 1)
    }
    else {
      setQuizFinished(true)
    }
    document.querySelectorAll(".checkedValue").forEach(curVal => {
      curVal.checked = false;
    });

  }
  return (
    <div className="container">
      {isQuizFinished ? (
        <div className="score">
          <p>Your Score :{score} / {data.length}</p>
          <button onClick={handleReset}>Play Again</button>
        </div>

      ) :
        (
          <div className='quiz'>
            <div>
              <h2>{index + 1}.{data[index].q}</h2>
            </div>
            {
              ['a', 'b', 'c', 'd'].map((option) => (
                <div key={option} className='options'>
                  <input name='select' type='radio' onChange={handleChange} value={data[index][option]}
                    className='checkedValue'></input>
                  <p>{`${option.toUpperCase()}: ${data[index][option]}`}</p>

                </div>
              )
              )
            }
            <div className="btns">
              <button id="next" onClick={handleNext}>Next</button>
            </div>
          </div>
        )}
    </div>
  );
}

export default Quiz;
