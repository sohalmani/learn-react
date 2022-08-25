/**
 * This component will act as a Parent component for other
 * components, but will return only its children, so this
 * helps solve problem of eliminating an extra 'div' that 
 * we had to use earlier as Parent of multiple JSX elements.
 */ 
const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;