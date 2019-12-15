import React from 'react'
import classes from './FinishedQuiz.module.css'

class FinishedQuiz extends React.Component {
    render(){
        return (
            <div className={classes.FinishedQuiz}>
                <ul>
                    <li>
                        <strong>1. </strong>
                        How r u?
                        <i className={'fa fa-times '+ classes.error } />
                    </li>
                    <li>
                        <strong>2. </strong>
                        How r u?
                        <i className={'fa fa-check ' + classes.success } />
                    </li>
                </ul>
                <p>Correct 5 of 10</p>

                <div>
                    <button>Repeat</button>
                    
                </div>
            </div>
        )
    }
}

export default FinishedQuiz;