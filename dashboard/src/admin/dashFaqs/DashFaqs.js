import React from "react";
import { useEffect, useState } from "react";
import GroupFaqs from "./GroupFaqs";
const DashFaqs = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchAllFaqs = async () => {
      const response = await fetch("/faqs", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const rjson = await response.json();
      if (response.ok) {
        setFaqs(rjson);
      }
    };
    fetchAllFaqs();
  }, []);

  const answerd = faqs.filter((faq) => {
    return faq.state === true;
  });
  const notAnswerd = faqs.filter((faq) => {
    return faq.state === false;
  });

  const handleDelete = async (id) => {
    const response = await fetch("/faqs/admin/" + id, {
      method: "DELETE",
    });
    // const json = await response.json();

    if (response.ok) {
      console.log("the FAQ was deleted");
      const updatedFaqs = faqs.filter((faq) => {
        return faq._id !== id;
      });
      setFaqs(updatedFaqs);
    }
  };

  return (
    <div className="blogs">
      <h2>الأسئلةالأكثر شيوعاَ</h2>
      <h4>الأسئلة الغير مجاب عنها</h4>
      <GroupFaqs
        faqs={notAnswerd}
        handleDelete={handleDelete}
        stateControl={{ faqs, setFaqs }}
      />
      <h4>الأسئلةالمجاب عنها</h4>
      <GroupFaqs
        faqs={answerd}
        handleDelete={handleDelete}
        stateControl={{ faqs, setFaqs }}
      />
    </div>
  );
};

export default DashFaqs;
