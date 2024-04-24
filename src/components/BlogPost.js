import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";

function BlogPost() {
 
  return (
    <div id="blog-post">
      <BlogContent isPublished={true} articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." minutesToRead= {77}/>  
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451"/>
    </div>
  );
}

export default BlogPost;
