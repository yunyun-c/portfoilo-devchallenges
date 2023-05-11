import React from "react";

const Blogs = ({ blogs }) => {
  return (
    <div className="blogs">
      <h4>Blog</h4>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog">
            <div className="title-img">
              <h3>{blog.title}</h3>
              <img src={blog.picture} alt="blog" />
            </div>

            <p>{blog.content}</p>
            <div className="link">
              <a href={blog.blogLink}>div.to</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
