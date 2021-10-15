import { useRef, View, Form, Button, uuidV4 } from "@utils";

export function Login({ onIdSubmit }: any) {
  const idRef: any = useRef();

  function handleSubmit(e: any) {
    e.preventDefault();
    onIdSubmit?.(idRef.current.value);
  }

  function createNewId() {
    onIdSubmit?.(uuidV4());
  }

  return (
    <View alignItems="center" justifyContent="center" height="100vh">
      <View
        backgroundColor="#e7e7e7"
        borderRadius="1rem"
        transitionDuration={"0.3s"}
        hover={{
          boxShadow: "1rem 1rem 1rem grey",
        }}
        boxShadow="0rem 0.1rem 0.1rem grey"
        width="50%"
        height="50%"
        alignItems="center"
        justifyContent="center"
        padding="1rem"
      >
        <Form onSubmit={handleSubmit} className="w-100">
          <Form.Group>
            <Form.Label>Enter Your Id</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>
          <View
            flexDirection="row"
            justifyContent="space-between"
            margin="4rem 0"
          >
            <Button type="submit" className="mr-2">
              Login
            </Button>
            <Button onClick={createNewId} variant="secondary">
              Create A New Id
            </Button>
          </View>
        </Form>
      </View>
    </View>
  );
}
