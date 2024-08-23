import style from "./ContainerFooter.module.scss"

export const ContainerFooter = ({children}) => {
    return (
        <>
            <footer className={style.footerStyling}>{children}</footer>
        </>
    )
}