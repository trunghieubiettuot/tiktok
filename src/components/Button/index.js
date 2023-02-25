import styles from "./Button.module.scss"
import clsx from 'clsx'

function Paragraph() {
    return (
        <button className={clsx(styles.btn, {
            [styles.active] : false
        })}>
            click
        </button>
    )
}

export default Paragraph