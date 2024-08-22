import style from "./Task.module.scss"

export const Task = ({tasks}) => {
    console.log(tasks);
    
   

    const handleDeleteTask = (taskName) => {
        tasks.map((task) => {
            if (task.name === taskName) {
                tasks.pop(task);
                console.log(tasks);
            }
            else {
                console.error('Task not found!');
            }
        })
    }

    return (
        <>
            {tasks.map((task, index) => {
                return (
                    <span className={style.tasksStyling} key={index}>
                        <header><h3>{task.name}</h3></header>
                        <span className={style.buttonContainer}>
                            <button onClick={() => handleDeleteTask(task.name)}>Delete</button>
                        </span>
                    </span>
                )
            })}
        </>
    )
}