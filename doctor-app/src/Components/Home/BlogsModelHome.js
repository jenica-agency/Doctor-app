import { useState , useEffect } from "react";


const BlogsModelHome = (url)=>{

    // const [isWaiting ,setIsWaiting ] = useState(true); 
    const [BlogsData, setBlogsData] = useState([]);
   
    useEffect(()=>{
         setTimeout(()=>{
            const getBlogsData= async()=>{
            const reqData = await fetch(url);
            const resData = await reqData.json();
            const TheFirstBlog = resData.slice(0,4);
            setBlogsData(TheFirstBlog);
           console.log(TheFirstBlog);
        }
        getBlogsData();
        }, 500);
    }, [url]);
       
return {BlogsData} ;


}

export default BlogsModelHome;