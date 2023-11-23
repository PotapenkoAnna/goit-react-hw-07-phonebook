import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';
import { nanoid } from '@reduxjs/toolkit';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
    return (
        <li className={css.contacts} id={nanoid()} key={nanoid()}> 
        <span className={css.contactsName}>{name}</span>
        <span className={css.contactsNumber}>{number}</span>
         <button
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        className={css.contactsBtn}> 
        Delete
      </button> 
    </li>
  );
}; 



