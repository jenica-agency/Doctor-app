import { useState , useEffect} from "react"

const FAQsModelHome = (url)=>{
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
                        console.log(data); //all data 
                         const answered = data.filter( faq => {
                            return faq.state === true;
                            });
                         console.log(answered); 
                         const FirstThreeFAQ = answered.slice(0,3);
                        setFAQs(FirstThreeFAQ);
                        
                    })
                .catch(er => {
                    console.log(er.message);
                });
        }, 1000);
       
    },[url]);
   
    return FAQs;
}

export default FAQsModelHome;