import style from "./Button.module.scss"

export const Button = ({action, text}) => {
    return (
        <>
            <button onClick={action} className={style.buttonStyling}>{text}</button>
        </>
    )
}