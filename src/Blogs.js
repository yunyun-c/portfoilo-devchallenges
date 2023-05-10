import React from "react";

const Blogs = ({ blogs }) => {
  return (
    <div className="blogs">
      <h2>Blogs</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog">
            <h3>{blog.title}</h3>
            <p>{blog.date}</p>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
