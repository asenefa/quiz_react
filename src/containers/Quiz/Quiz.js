import React, {Component} from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        answerState: null,
        isFinished: true,
        quiz: [
            {
                
                questions: 'What color is the sky?',
                id: 1,
                rightAnswerId: 2,
                answers :[
                    {text: 'Green', id: 1},
                    {text: 'Blue', id: 2},
                    {text: 'Grey', id: 3},
                    {text: 'White', id: 4}
                ]
            },
            {
                questions: 'Who is making the Web standards?',
                id: 2,
                rightAnswerId: 3,
                answers :[
                    {text: 'Microsoft', id: 1},
                    {text: 'Google', id: 2},
                    {text: 'The World Wide Web Consortium', id: 3},
                    {text: 'Mozilla', id: 4}
                ]
            }
        ]
    } 

    onAnswerClickHandler = (answerId) => {
        // console.log('answerId: ', answerId);

        if (this.state.answerState){
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success'){
                return
            }
        }

        const questions = this.state.quiz[this.state.activeQuestion];
//проверка правильности
        if (questions.rightAnswerId === answerId){

            this.setState({ 
                answerState: {[answerId]: 'success'} 
            })
//
            const timeout = window.setTimeout(()=>{
                if (this.isQuizFinished()){
                    // console.log('Finished');
                    this.setState({
                        isFinished: true
                    })

                } else {
                    this.setState ({ 
                        activeQuestion: this.state.activeQuestion +1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeout)
            }, 1000)


        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
            
        }
    }

    isQuizFinished () {
        return this.state.activeQuestion +1  === this.state.quiz.length
    }

    render(){
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Answer all questions</h1>

                    {
                        this.state.isFinished 
                            ? <FinishedQuiz 
                            
                            />
                            : <ActiveQuiz
                            answers={this.state.quiz[this.state.activeQuestion].answers}
                            questions={this.state.quiz[this.state.activeQuestion].questions}
                            onClickAnswer = {this.onAnswerClickHandler}
                            quizLenght = {this.state.quiz.length}
                            answerNumber = {this.state.activeQuestion +1}
                            stateQ = {this.state.answerState}
                            />
                    }

                    
                    
                </div>
            </div>
        )
    }
}

export default Quiz