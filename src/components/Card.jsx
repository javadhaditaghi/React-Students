import CircleImg from "./circleImg";
import Top from "./Top";
import Bottom from "./bottom";


const Card = (props) => {
  return (
    <div className="card">
      <Top name={props.name}
        img={props.img}></Top>
      <Bottom tel={props.email} email={props.email} />
    </div>
  );
};

export default Card;
