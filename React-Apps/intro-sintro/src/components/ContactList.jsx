import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const listOfContact = props.contacts.map((contact) => {
    return <ContactCard contact={contact}></ContactCard>;
  });

  return <div className="ui celled list">{listOfContact}</div>;
};

export default ContactList;
