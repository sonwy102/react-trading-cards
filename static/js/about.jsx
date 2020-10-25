"use strict";

function About() {
  return (
    <React.Fragment>
      <p>
        <h2>About Author</h2>
        <p>test-page</p>
      </p>
    </React.Fragment>
  );
}

ReactDOM.render(<About />, document.querySelector("#about-author"));
