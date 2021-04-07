function Person(props) {
  return (
    <div>
      <p>
        This is {props.name} and the age is {props.age}.
      </p>
      <p>{props.children}</p>
    </div>
  );
}

export default Person;
