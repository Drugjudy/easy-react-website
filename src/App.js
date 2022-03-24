import React, { useState } from 'react';
import duck from "./duck.jpg";
import "./index"
import questions from './data';
import bg from "./bg.gif";





export default function App() {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [image, setImage] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) { 
			
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}

		const nextImage = image + 1;
		if (nextImage < questions.length) {
			setImage(nextImage);
		}

		

	};

	return (
		
		<div className='app'>
			
			{showScore ? (
				<div className='score-section'>
					
					<img src={duck} alt="" width="300" height="400" /> 
					
						
				</div>
			) : (
				<>
				<article className='answer-section'>
					{questions[currentQuestion].questionText} <img src={questions[image].imageLink} alt="" width="300" height="450" />

{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</article>
					
					
					
					
				</>
			)}
		</div>
	);
}