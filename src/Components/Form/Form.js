import s from './Form.module.css';
import { useState } from 'react';

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.currentTarget.value);
  };

  const handleNumberChange = e => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          className={s.input}
        ></input>
      </label>
      <label className={s.label}>
        Number
        <input
          type="text"
          name="number"
          value={number}
          onChange={handleNumberChange}
          className={s.input}
        ></input>
      </label>
      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
}
