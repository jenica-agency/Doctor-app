import { useState , useEffect } from "react";

const BlogModel = ( url )=>{

    const [isWaiting ,setIsWaiting ] = useState(true); 
    const [Blogs, setBlogs] = useState([]);
    const getData = ()=>{
         setTimeout(()=>{
             fetch(url)
                .then(
                    res => {
                        console.log(res);
                        return res.json();
                    })
                .then(
                    data=>{
                        setIsWaiting(false); 
                        setBlogs( data);
                        console.log(data);
                    })
                .catch(er => {
                    console.log(er.message);
                });
        }, 1000);
     };
  
useEffect(() => {
    getData();
}, [url]);
       
return {Blogs , isWaiting} ;


}

export default BlogModel;