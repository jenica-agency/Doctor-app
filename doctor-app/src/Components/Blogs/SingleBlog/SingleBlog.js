
import React ,{useState , useEffect }from 'react';
// import { useParams } from 'react-router-dom';
// import './SingleBlog.css';
// import BlogModel from '../BlogsModel';
// import SingleBlogFun from './SingleBlogFun';
// // import axios from 'axios';
// const SingleBlog = ({url}) => {
//     const {_id} = useParams();
//     console.log(_id);    
//     const {BlogData} = BlogModel("/blogs/"+_id);  
//     console.log(BlogData);
  
//     const [blog, setBlog] = useState({});

//   useEffect(() => {
//     const fetchBlog = async () => {
//       const response = await fetch(`http://localhost:4001/blogs/${_id}`);
//       const data = await response.json();
//       setBlog(data);
//     };
//     fetchBlog();
//   }, [url]);

//   // const { header, brif } = blog;
// console.log(blog);
//     return (
//     <SingleBlogFun NewBlog={blog}>
//     </SingleBlogFun>
  
//     //  <div>
//     //   <h2>{blog.blog.header}</h2>
//     //   <p>{blog.blog.brif}</p>
//     // </div>
//   )
// }

// export default SingleBlog

import { useParams } from 'react-router-dom';

function SingleBlog(id) {
      const [data, setBlog] = useState({});
  const { _id } = useParams();
  // const selectedObject = objects.find(object => object._id === parseInt(_id));
console.log(_id)
  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`http://localhost:4001/blogs/${_id}`);
      const data = await response.json();
      setBlog(data);
    };
    fetchBlog();
  }, [id]);
  // console.log(data.blog.header)
   const myObject = { name: "data.header", age: 30 };
  return (
      <div>
      {data.blog ? (
        <div>
          <p>ID: {data.blog._id}</p>
          <p>Header: {data.blog.header}</p>
          <p>Brief: {data.blog.brif}</p>
          <p>Attachment: {data.blog.attachment}</p>
           <p>Header: {data.blog.header}</p>
      
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleBlog;