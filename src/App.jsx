import css from "../src/App.module.css";
import { ContactForm } from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";

export function App() {
  return (
    <div className={css.mainContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
