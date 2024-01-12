import CircleImg from "./circleImg"
import "./Top.css"

const Top = (props) => {
    return (
        <div className="top">
            <h3 className="name">{props.name}</h3>
            <p>{props.id}</p>
            <CircleImg img={props.img} /> {/* First separate component */}
        </div>

    )
}

export default Top 