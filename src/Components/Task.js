import React from "react";
import styles from './Task.module.css';

const Task = (props) => {
    const { task, index, list, setList } = props;
    
    const onClick = () => {
        setList(() => {
            return list.filter(task => list.indexOf(task) !== index)
        });
    }

    const onCheckChange = (e) => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list])
        
    };

    return (
        <div className="container d-flex align-items-center mt-3 w-50">
            <div className="container">
                <h4 className={task.isComplete === true ? `${styles.complete}` : `${styles.notComplete}`}>{task.name}</h4>
                <input className="" onChange={ onCheckChange } type="checkbox" name="" checked={task.isComplete} />
                <button onClick={ onClick } className="ms-2 btn btn-dark">Delete</button>
            </div>
        </div>
    )
}

export default Task;