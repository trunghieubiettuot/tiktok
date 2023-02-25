import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Paragraph() {
    const context = useContext(ThemeContext)
    return (
        <p className={context.theme}>
            hello guys, my name is Hiếu 
        </p>
    )
}

export default Paragraph