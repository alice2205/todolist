import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from "uuid";

export type FilterValuesType = 'all' | 'completed' | 'active'

function App() {
    let [tasks, setTask] = useState <Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false}
    ])
    let [filter, setFilter] = useState<FilterValuesType>('all')

    function removeTask(id: string) {
        let newTasks = tasks.filter((el) => el.id !== id)
        setTask(newTasks)
    }
    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }

    function addTask(title: string) {
        let newTask = {id: v1(), title, isDone: false}
        let newArr = [newTask, ...tasks]
        setTask(newArr)
    }

    let filterArr = tasks;
    if (filter === 'completed') {
        filterArr = tasks.filter(t => t.isDone === true)
    }
    if (filter === 'active') {
        filterArr = tasks.filter(t => t.isDone === false)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={filterArr}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;
