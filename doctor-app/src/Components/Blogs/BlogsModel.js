import { useState , useEffect } from "react";


const BlogModel = (url)=>{

    // const [isWaiting ,setIsWaiting ] = useState(true); 
    const [BlogData, setBlogData] = useState([]);
   
    useEffect(()=>{
         setTimeout(()=>{
            const getBlogData= async()=>{
            const reqData= await fetch(url);
            const resData= await reqData.json();
            setBlogData(resData);
           console.log(resData);
        }
        getBlogData();
        }, 500);
    }, [url]);
       
return {BlogData} ;


}

export default BlogModel;