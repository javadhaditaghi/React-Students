import Card from "./components/Card";
import students from "./students";

const createCard = (student) => {

  return (
    <Card key={student.id}
      id={student.id}
      name={student.name}
      img={student.imgURL}
      tel={student.phone}
      email={student.email}
    ></Card>
  )

}

const App = () => {
  return (
    <div>
      <h1 className="heading">Full Stack Students</h1>

      {students.map(createCard)}
    </div>
  );
};

export default App;
