import { useSelector } from 'react-redux';
import React from 'react';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css'; 
import { nanoid } from '@reduxjs/toolkit'; 
import { selectContacts, selectFilter } from '../../redux/selectors';   

export default function ContactList() {
  const contacts = useSelector(selectContacts); 
  const filter = useSelector(selectFilter);
  console.log(filter);

  let arrContacts = contacts;

  if (filter.filter !== null) {
    arrContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.filter)
    );
  }
  console.log(arrContacts);
  const showArr = Array.isArray(arrContacts) && arrContacts.length;
 
  return (
  <div>  
    <ul className={css.contactList}>
       {showArr &&
        arrContacts.map(({ id, name, number }) => {
          return <Contact key={nanoid()} id={id} name={name} number={number} />;
        })}  
    </ul> 
    </div >
  ) 

} 