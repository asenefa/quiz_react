import React from 'react';
import clssses from './AnswerList.module.css'
import AnswerItem from './AnswerItem/AnswerItem'

class AnswerList extends React.Component {
    render () {
        return (
            <ul className={clssses.AnswerList}>
                { this.props.answers.map((answer, index) => {
                    return (
                        <AnswerItem 
                            key={index}
                            answer={answer}
                            onClickAnswer = {this.props.onClickAnswer}
                            stateQ = {this.props.stateQ ? this.props.stateQ[answer.id] : null}
                        />
                    )
                }) }
            </ul>
        )
    }
}

export default AnswerList;