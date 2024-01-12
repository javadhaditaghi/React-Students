const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <h3 className="name">{props.name}</h3>
        <p>{props.id}</p>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
