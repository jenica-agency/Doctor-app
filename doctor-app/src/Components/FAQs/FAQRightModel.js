import { useState , useEffect} from "react"

const FAQRightModel = (url)=>{
    const [FAQs, setFAQs] = useState(null);
    

    useEffect(()=>{
        setTimeout(()=>{
             fetch(url)
                .then(
                    res => {
                        return res.json();
                    })
                .then(
                    data=>{
                        console.log(data);
                         const answered = data.filter((faq) => {
                            return faq.state === true;
                            });
                        setFAQs(answered);
                        
                    })
                .catch(er => {
                    console.log(er.message);
                });
        }, 1000);
       
    },[url]);
   
    return FAQs;
}

export default FAQRightModel;