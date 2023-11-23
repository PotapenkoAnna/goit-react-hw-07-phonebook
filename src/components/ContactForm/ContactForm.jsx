import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css'; 
   
export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);
  const handleSubmit = event => {
    event.preventDefault();
    const hasContact = contacts.some(
      contact => contact.name === event.target.elements.name.value
    );
    if (hasContact) {
      alert(`${hasContact} is already in contacts`);
      return;
    }
    dispatch(
      addContact({
        id: nanoid(),
        name: event.target.elements.name.value,
        number: event.target.elements.number.value,
      })
    );
    event.currentTarget.reset();
  };


 
    return (
      <form className={css.form} onSubmit={handleSubmit}>  
        <label className={css.formLabel}>Name </label>
        <input
          className={css.formInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
                    
        />
        <label className={css.formLabel}>Number </label>
        <input
          className={css.formInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number" 
                    
        />
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </form>
    );  
  }
