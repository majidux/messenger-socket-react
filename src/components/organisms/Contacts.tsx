import { ListGroup } from "@utils";
import { useContacts } from "@hooks";

interface ContactsTypes {
  id: string | number;
  name: string;
}

export function Contacts() {
  const { contacts }: any = useContacts();
  return (
    <ListGroup variant="flush">
      {contacts?.map((contact: ContactsTypes) => (
        <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}
