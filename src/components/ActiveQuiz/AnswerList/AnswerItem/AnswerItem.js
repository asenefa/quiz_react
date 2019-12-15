import React from 'react';
import classes from './AnswerItem.module.css'

class AnswerItem extends React.Component {
    render () {

        const cls = [classes.AnswerItem]
        
        if (this.props.stateQ){
            cls.push(classes[this.props.stateQ])
            
        }

        return (
            <li 
                className={cls.join(' ')}
                onClick = {() => { this.props.onClickAnswer(this.props.answer.id) }}
            >
                {this.props.answer.text}
                
            </li>
            
        )
    }
}

export default AnswerItem;