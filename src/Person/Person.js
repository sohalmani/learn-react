function Person(props) {
  return (
    /*
     *  Properties are accessible inside props object,
     *  passed as argument to component. Anything written
     *  inside the component is accessible as children of prop.
     */
    <div>
      <p>
        This is {props.name} and the age is {props.age}.
      </p>
      <p>{props.children}</p>
    </div>
  );
}

export default Person;
