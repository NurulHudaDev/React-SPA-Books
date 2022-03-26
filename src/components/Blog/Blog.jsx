import React from 'react';

const Blog = () => {
    return (
      <div className="container">
        <div className="row my-5">
          <div className="col">
            <p>
              <h6>1. What is useState ?</h6>
              Answer: UseState: First we have the functional component which
              does not support state. In other words a functional component is a
              stateless component Noe with Hooks we have the functional
              component but stateful it is achieved by using useState.
            </p>
          </div>
          <div className="col">
            <h6>1. Difference between State and Props</h6>
            <p>
              Ans
              <strong> props:</strong>
              Props are read-only. Props are immutable Props allow you to pass
              data from one component to other components as an argument. Props
              can be accessed by the child component. Props are used to
              communicate between components.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blog;