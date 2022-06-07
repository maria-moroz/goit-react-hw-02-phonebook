import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Component } from 'react';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    const { contacts } = this.state;

    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  handleDelete = deleteId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== deleteId),
    }));
  };

  handleFilterChange = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value.toLowerCase() });
  };

  filterContacts = filter => {
    const normalizedFilter = filter.toLowerCase();
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts(filter);

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={contact => this.addContact(contact)} />

        <h2>Contacts</h2>
        <Filter handleFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
