"use strict";

function Homepage() {
  return (
    <React.Fragment>
      <p>
        <h2>This is a great site for viewing trading cards.</h2>
        <a href="/cards">Trade Cards</a><br></br>
        <a href="/author">About the Author</a>
      </p>
      <img src="/static/img/balloonicorn.jpg"></img>
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
