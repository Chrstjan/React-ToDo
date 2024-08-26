import style from "./Main.module.scss"

export const Main = ({children, action}) => {
    return (
        <>
            <main onClick={action} className={style.mainStyling}>
                {children}
            </main>
        </>
    )
}