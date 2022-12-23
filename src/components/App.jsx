import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handler = ({ name, number }) => {
    const { contacts } = this.state;
    if (contacts.find(contact => contact.name === name.value)) {
      alert(name.value + ' is already in contacts');
      return;
    }
    this.setState({
      contacts: [...contacts, { name: name, number: number, id: nanoid() }],
      filter: '',
    });
  };

  filterHandler = filter => {
    this.setState({ ...this.state, filter });
  };

  deleteHandler = id => {
    const { contacts, filter } = this.state;
    this.setState({
      contacts: [...contacts.filter(contact => contact.id !== id)],
      filter,
    });
  };

  getContacts = () => {
    return this.state.contacts.filter(
      ({ name }) =>
        !this.state.filter ||
        name.toLowerCase().startsWith(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm handler={this.handler} />
        </Section>
        <Section title="Contacts">
          <Filter filterHandler={this.filterHandler} />
          <ContactList
            contacts={this.getContacts()}
            deleteHandler={this.deleteHandler}
          />
        </Section>
      </>
    );
  }
}

