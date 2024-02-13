import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
  fetchContacts,
  filterContacts,
} from 'redux/contactsSlice';
import { useEffect } from 'react';
import {
  selectError,
  selectFilter,
  selectIsLoading,
  selectItems,
} from 'redux/contacts.selectors';
import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';
import { Title } from 'components/RegisterForm/RegisterForm.styled';
import { Notify } from 'notiflix';
import { ContactsMessage } from './ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectItems);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const addNewContact = newContact => {
    contacts.some(({ name }) => name === newContact.name)
      ? Notify.failure(`${newContact.name} is already in contacts`)
      : dispatch(addContact(newContact));
  };

  const handleFilterContacts = filteredValue => {
    dispatch(filterContacts(filteredValue));
  };

  const getFilterContacts = () => {
    const filterlowerCase = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterlowerCase)
    );
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm addNewContact={addNewContact}></ContactForm>
      <Title>Contacts</Title>
      {contacts.length === 0 ? (
        <ContactsMessage>Your phonebook is empty. Add your first contact!</ContactsMessage>
      ) : (
        <Filter value={filter} handleFilterContacts={handleFilterContacts} />
      )}
      {isLoading && !error && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ContactsList
        contacts={getFilterContacts()}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};
export default ContactsPage;