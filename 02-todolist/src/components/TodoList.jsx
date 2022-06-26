import React, { useState } from "react";
import styled from "styled-components";

const ToDoListRoot = styled.div`
    /* Reset CSS */
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .input-group{
        display: flex;
        align-items: center;
        border: 1px solid #ccc;
        justify-self: unset;
    }

    input {
        height: 40px;
        flex: 1;
        border: none;
        padding: 0 10px;
        outline: none;
    }
    button{
        border: none;
        background-color: #bfbfbf;
        height: 40px;
        padding: 0 20px;
        cursor: pointer;
        display: block;

        &:disabled{
            background-color: #f7f7f7;
            cursor: no-drop;
        }
    }
    .card-list {
        display: flex;
        gap: 20px;
        .card {
            flex: 1;
        }
    }

`

// props nhận vào 1 danh sách để toDoList, từ danh sách nào render -> browser
export default function ToDoList({ toDoList, onAdd, onCompleted }) {
    const [value, setValue] = useState('')

    // create funtion onAdd
    const _onAdd = () => {
        onAdd(value.trim())
        setValue('')
    }
    // tạo ra 1 fn bắt sự kiện enter
    const onKeyUp = (e) => {
        if(e.key === 'Enter'){
            _onAdd()
        }
    }


    const _toDoListCompleted = toDoList.filter(e => e.isCompleted)
    const _toDoList = toDoList.filter(e => !e.isCompleted)
    // hàm trên viết chi tiết ra sẽ là
    const newToDoList = toDoList.filter((element, index) => {
        return element.isCompleted === false
    })

    return (
        <ToDoListRoot>
            <div className="input-group">
                {/* question here: tại sao lại cần value={value} */}
                <input onKeyUp={onKeyUp} value={value} onChange={e => setValue(e.target.value)} placeholder="New Task..." />
                <button onClick={_onAdd} disabled={!value.trim()}>Add</button>
            </div>
            <h1 className="title">Dashboard</h1>
            <div className="card-list">
                {/* danh sách 1 */}
                <div className="card">
                    <h1>Jobs Doing</h1>
                    {
                        // phương thức map -> gọi callback lên từng phần tử trong mảng
                        /*
                        0. element đầu tiên khi được gọi nó sẽ tạo 1 fn có tham số là object[index]
                        1. xong nó return về component
                        1. chỗ này gọi component <ToDoItem />
                        2. sẳn gọi rồi truyền vào bên trong component này mấy cái prop luôn.
                        3. tham số đầu tiên là id nè, tham số thứ 2 là nguyên cái object từ biến _toDoList
                        */
                        _toDoList.map(e => <ToDoItem onCompleted={onCompleted} key={e.id}{...e}/>)
                        
                    }
                </div>

                {/* danh sách 2 */}
                <div className="card">
                    <h1>Jobs Done</h1>
                    {
                        // question here: 1 {e.id} {...e}
                        _toDoListCompleted.map(e => <ToDoItem key={e.id} {...e}/>)
                    }
                </div>
            </div>
        </ToDoListRoot>
    )
}

// create new component
const ToDoItemRoot = styled.div`
    display: flex;
    border: 1px solid #ccc;
    margin-bottom: 5px;
    padding-left: 20px;

    .name {
        flex: 1;
        line-height: 40px;
    }


    /* question here 2: dấu & để làm gì? */
    &.isCompleted{
        background-color: #ccc;
        text-decoration: line-through;
        button {
            display: none;
        }
    }

`

const ToDoItem = ({ id, content, isCompleted, onCompleted }) => {
    const _onCompleted = () => {
        // question here: sao chỗ này lại cần check
        onCompleted?.(id)
    }

    return (
        <ToDoItemRoot className={isCompleted ? 'isCompleted' : ''}>
            <div className="name">{content}</div>
            <button onClick={_onCompleted}>✔</button>
        </ToDoItemRoot>
    )
}