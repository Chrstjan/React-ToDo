export const Task = ({tasks}) => {
    return (
        <>
            {tasks.map((task) => {
                return (
                    <span>
                        <header><h3>{task.name}</h3></header>
                    </span>
                )
            })}
        </>
    )
}