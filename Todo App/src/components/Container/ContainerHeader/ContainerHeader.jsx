import style from "./ContainerHeader.module.scss"

export const ContainerHeader = ({text}) => {
    return (
        <>
            <header className={style.headerStyling}>
                <h1>{text}</h1>
            </header>
        </>
    )
}