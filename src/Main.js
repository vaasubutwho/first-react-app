import react from "react"
function Main(){
    return (
        <div className={"main--wrapper"}>
        <h1 className={"main--heading"}>Fun facts about React</h1>
        <ul className={"main--ul"}>
            {/*<li>It is composable</li>
            <li>It is declarative</li>
            <li>It is funded by Facebook actively</li>
            <li>Has a very big community</li>*/}
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>

        </div>

    )
}
export default Main