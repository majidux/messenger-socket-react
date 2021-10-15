import { useContext, createContext } from "@utils";
import { useLocalStorage } from "@hooks";

const ContactsContext: any = createContext("");

export function useContacts() {
  return useContext(ContactsContext);
}

interface ContactsTypes {
  id: string | number;
  name: string;
}

export function ContactsProvider({ children }: any) {
  const [contacts, setContacts] = useLocalStorage("contacts", []);

  function createContact(id: number, name: string) {
    setContacts((prevContacts: ContactsTypes[] = []) => {
      return [...prevContacts, { id, name }];
    });
  }

  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  );
}
