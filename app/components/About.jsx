var React = require("react");

var About = (props) => {
    return (
      <div>
        <h1 className="text-center">About</h1>
        <p>This is a weather app. Here's the stack we used:</p>
        <ul>
        <li>React - the frontend Javascript framework</li>
        <li>Foundation - the presentation layer framework</li>
        <li>Open Weather - the weather API</li>
        </ul>
      </div>
    )
};

module.exports = About;

// stateless components don't need createClass or render
