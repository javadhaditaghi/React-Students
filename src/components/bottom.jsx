import "./bottom.css"


const Bottom = (props) => {
    return (
        <div className="bottom">
            <p className="info">{props.tel}</p>
            <p className="info">{props.email}</p>
        </div>
    )

}

export default Bottom