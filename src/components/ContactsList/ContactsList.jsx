import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import css from './ContactsList.module.css';

export const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={css.wrapContactList}>
    <ul className={css.contactsList}>
      {contacts.map(contact => {
        const { id, name, phone } = contact;
        return (
          <li className={css.contactsItem} key={id}>
            <span className={css.contactsItemName}>{name}:</span>
            <span className={css.contactsItemNumber}>{phone}</span>
            <button
              className={css.buttonDelete}
              type="button"
              onClick={() => handleDelete(id)}
            >Delete</button>
          </li>
        );
      })}
    </ul>
    </div>
  );
};
