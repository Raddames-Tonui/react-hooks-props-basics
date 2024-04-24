import React from "react";

function BlogContent(props) {
  console.log(props);
return (
  props.isPublished ?  
    (<div>
      <h1>{props.articleText}</h1>
      <p>{props.minutesToRead} minutes to read</p>
    </div>) :  null
)
}
export default BlogContent;
