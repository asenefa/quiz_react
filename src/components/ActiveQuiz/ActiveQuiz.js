import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswerList from './AnswerList/AnswerList'

class ActiveQuiz extends React.Component{
    render (){
        return (
            <div className={classes.ActiveQuiz}>
                <p className={classes.Question}>
                    <span>
                        <strong>{this.props.answerNumber}.</strong>&nbsp;
                        {this.props.questions}
                    </span>
                    <small>Question {this.props.answerNumber} of {this.props.quizLenght}</small>
                </p>
                <AnswerList
                    answers = {this.props.answers}
                    onClickAnswer = {this.props.onClickAnswer}
                    stateQ = {this.props.stateQ}
                />
            </div>
        )
    }
}


export default ActiveQuiz