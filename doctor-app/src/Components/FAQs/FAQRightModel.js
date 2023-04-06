import { useState , useEffect} from "react"

const FAQRightModel = (url)=>{
    const [FAQs, setFAQs] = useState(null);

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
                        
                        setFAQs(data);
                        
                    })
                .catch(er => {
                    console.log(er.message);
                });
        }, 1000);
       
    },[url]);
    return FAQs;
}
export default FAQRightModel;