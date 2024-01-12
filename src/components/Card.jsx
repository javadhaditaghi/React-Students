import CircleImg from "./circleImg";


const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <h3 className="name">{props.name}</h3>
        <p>{props.id}</p>
        <CircleImg img={props.img} /> {/* First separate component */}
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
