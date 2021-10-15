import { useState, Modal, Form, Button } from "@utils";
import { useContacts, useConversations } from "@hooks";

export function NewConversationModal({ closeModal }: any) {
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { contacts }: any = useContacts();
  const { createConversation }: any = useConversations();

  function handleSubmit(e: any) {
    e.preventDefault();

    createConversation(selectedContactIds);
    closeModal();
  }

  function handleCheckboxChange(contactId: any) {
    setSelectedContactIds((prevSelectedContactIds: any) => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter((prevId: any) => {
          return contactId !== prevId;
        });
      } else {
        return [...prevSelectedContactIds, contactId];
      }
    });
  }

  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts?.map((contact: any) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                label={contact.name}
                onChange={handleCheckboxChange.bind(null, contact.id)}
              />
            </Form.Group>
          ))}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}
