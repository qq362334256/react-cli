import React from 'react';
import ReactDom from 'react-dom';

// tutorial1.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <h1 className="commentBox">我是标题</h1>
    );
  }
});
ReactDom.render(
  <CommentBox />,
  document.getElementsByTagName('body')[0]
);
