import { useEffect, useState } from "react";

const ServicesModel =(url)=>{

    const [isWaiting ,setIsWaiting ] = useState(true); 

     const [services, setServices]= useState( []);


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
                        setIsWaiting(false); 
                        setServices(data);
                        
                    })
                .catch(er => {
                    console.log(er.message);
                });
        }, 1000);
       
    },[url]);


return { services, isWaiting}

}
export default ServicesModel;