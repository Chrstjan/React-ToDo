import style from "./ContainerBody.module.scss"

export const ContainerBody = ({children}) => {
    return (
        <>
            <section className={style.bodyStyling}>{children}</section>
        </>
    )
}