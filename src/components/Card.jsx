import CircleImg from "./circleImg";
import Top from "./Top";


const Card = (props) => {
  return (
    <div className="card">
      <Top name={props.name}
        img={props.img}></Top>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
