import style from "./Button.module.scss"

export const Button = ({action, symbol, text}) => {
    return (
        <>
            <span className={style.btnContainer}>
                <button onClick={action} className={style.buttonStyling}>{symbol}</button>
                <p>{text}</p>
            </span>
        </>
    )
}