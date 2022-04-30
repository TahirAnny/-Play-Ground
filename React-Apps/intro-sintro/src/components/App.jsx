import React  from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

const App = () => {

  const contacts = [
    {
      id: "1",
      name: "Bob",
      email: "bob@gmail.com"
    },
    {
      id: "2",
      name: "Emily",
      email: "emily@gmail.com"
    },
    {
      id: "3",
      name: "Sara",
      email: "sara@gmail.com"
    }
  ];


  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts = { contacts }/>
    </div>
  );
};

export default App;
