import { useState } from 'react';
import { nanoid } from 'nanoid';
import {Phonebook} from './Phonebook';

export const App = () => {
  const [state, setState] = useState({
    contacts: [],
    filter: ''
  });

  const handler = e => {
    e.preventDefault();
    const [name, number] = e.target;

    const {contacts} = state;
    if(contacts.find(contact => contact.name == name.value)){
      alert(name.value + ' is already in contacts');
      name.value = '';
      number.value = '';
      return;
    }
    setState({
      contacts: [...contacts, { name: name.value, number: number.value ,id: nanoid() }],
      filter: ''
    });
    name.value = '';
    number.value = '';
  };

  const filterHandler = e => {
    const filter = e.target.value;
    setState({...state, filter});
  }

  const deleteHandler = id => {
    const {contacts, filter} = state;
    setState({
      contacts: [...contacts.filter(contact => contact.id !== id)],
      filter
    })
  }
  
  return <Phonebook state={state} handler={handler} deleteHandler={deleteHandler} filterHandler={filterHandler}/>;
};
