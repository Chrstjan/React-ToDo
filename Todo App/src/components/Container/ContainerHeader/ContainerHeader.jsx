import style from "./ContainerHeader.module.scss"

export const ContainerHeader = () => {
    return (
        <>
            <header className={style.headerStyling}>
                <h1>To Do</h1>
                <button>&rarr;</button>
            </header>
        </>
    )
}