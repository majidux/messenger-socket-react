import { useRef, Modal, Form, Button } from "@utils";
import { useContacts } from "@hooks";

export function NewContactModal({ closeModal }: any) {
  const idRef: any = useRef();
  const nameRef: any = useRef();
  const { createContact }: any = useContacts();

  function handleSubmit(e: any) {
    e.preventDefault();

    createContact(idRef.current.value, nameRef.current.value);
    closeModal();
  }

  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}
