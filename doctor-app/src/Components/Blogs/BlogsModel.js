import { useState , useEffect} from "react"

const BlogModel = (url)=>{
    const [blogs, setBlogs] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
             fetch(url)
                .then(
                    res => {
                        console.log(res);
                        return res.json();
                    })
                .then(
                    data=>{
                        console.log(data);
                        
                        setBlogs(data);
                        
                    })
                .catch(er => {
                    console.log(er.message);
                });
        }, 1000);
       
    },[url]);
    return blogs;
}
export default BlogModel;