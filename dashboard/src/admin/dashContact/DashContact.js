import React from "react";
import { useEffect, useState } from "react";
import GroupContacts from "./GroupContacts";

const DashContact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchAllContacts = async () => {
      const response = await fetch("/contact/admin", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const rjson = await response.json();
      if (response.ok) {
        setContacts(rjson);
      }
    };
    fetchAllContacts();
  }, []);
  const review = contacts.filter((contact) => {
    return contact.state === true;
  });
  const notReview = contacts.filter((contact) => {
    return contact.state === false;
  });
  const handleUpdate = async (id) => {
    const response = await fetch("/contact/admin/" + id, {
      method: "PATCH",
      body: JSON.stringify({ state: true }),
      headers: { "Content-Type": "application/json" },
    });
    // const json = await response.json();

    if (response.ok) {
      console.log("Contact was updated");
      const updatedContacts = contacts.map((contact) => {
        if (contact._id === id) {
          contact.state = true;
        }
        return contact;
      });
      setContacts(updatedContacts);
    }
  };

  return (
    <div className="dashcontact">
      <h2>مراجعة تواصل الزوار</h2>
      <h4>تواصل لم يتم مراجعته</h4>
      <GroupContacts contacts={notReview} handleUpdate={handleUpdate} />
      <h4>تواصل تم مراجعته</h4>
      <GroupContacts contacts={review} handleUpdate={handleUpdate} />
    </div>
  );
};

export default DashContact;
