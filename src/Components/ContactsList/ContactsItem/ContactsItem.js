import s from './ContactsItem.module.css';

export default function ContactsItem({ id, name, number, onDelete }) {
  return (
    <li key={id} className={s.item}>
      {name}: {number}
      <button type="button" className={s.btn} onClick={onDelete}>
        delete
      </button>
    </li>
  );
}
