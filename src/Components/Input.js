import React from "react";

const Input = (props) => {
    const {list, setList} = props;
    let task= {
        name: "",
        isComplete: false
    };
    var changed = false;

    const onChange = (e) => {
        task.name = e.target.value;
        changed = true;
    };

    const onClick = (e) => {
        if (changed == false) {
            return;
        } else {
            setList([...list, task]);
            e.target.value = "";
            changed = false;
        }
    }

    return (
        <div className="container d-inline-flex w-50 mt-3 align-items-center">
            <input className="form-control" onChange={ onChange } type="text" name="task" />
            <button onClick={onClick} className="btn btn-primary btn-block ms-3">Add</button>
        </div>
    )
}

export default Input;