import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

export type FilterValuesType = 'all' | 'completed' | 'active'

function App() {
    let [tasks, setTask] = useState <Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])
    let [filter, setFilter] = useState<FilterValuesType>('all')

    function removeTask(id: number) {
        let newTasks = tasks.filter((el) => el.id !== id)
        setTask(newTasks)
    }
    function changeFilter(value: FilterValuesType) {
        setFilter(value)
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
            />
        </div>
    );
}

export default App;
