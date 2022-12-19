import { useState } from 'react';
import { nanoid } from 'nanoid';
import {Phonebook, Contacts} from './Phonebook';

export const App = () => {
  const [state, setState] = useState({
    contacts: [],
    name: '',
    number: '',
    filter: ''
  });

  const handler = e => {
    e.preventDefault();
    const [name, number] = e.target;

    const {contacts} = state;
    setState({
      contacts: [...contacts, { name: name.value, number: number.value ,id: nanoid() }],
      name: name.value,
      number: number.value
    });
    name.value = '';
    number.value = '';
  };

  const filterHandler = e => {
    const filter = e.target.value;
    setState({...state, filter});
  }

  return (
  <>
    <Phonebook handler={handler} />
    <Contacts state={state} filterHandler={filterHandler}/>
  </>);
};
