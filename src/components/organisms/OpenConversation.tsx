import {
  useState,
  useCallback,
  Form,
  InputGroup,
  Button,
  View,
  Text,
} from "@utils";
import { useConversations } from "@hooks";

export function OpenConversation() {
  const [text, setText] = useState("");
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);
  const { sendMessage, selectedConversation }: any = useConversations();

  function handleSubmit(e: any) {
    e.preventDefault();

    sendMessage(
      selectedConversation.recipients.map((r: any) => r.id),
      text
    );
    setText("");
  }

  return (
    <View backgroundColor="#e7e7e7" flex={2} justifyContent="space-between">
      <View overflow="auto">
        <View
          alignItems="flex-start"
          justifyContent="flex-end"
          padding="0 1rem"
        >
          {selectedConversation.messages.map((message: any, index: number) => {
            const lastMessage =
              selectedConversation.messages.length - 1 === index;
            return (
              <View
                ref={lastMessage ? setRef : null}
                key={index}
                alignSelf={message.fromMe && "flex-end"}
                alignItems={message.fromMe ? "flex-end" : "flex-start"}
              >
                <Text>{message.text}</Text>
                <Text>{message.fromMe ? "You" : message.senderName}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
          <InputGroup>
            <Form.Control
              as="textarea"
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ height: "75px", resize: "none" }}
            />
            <InputGroup.Append>
              <Button type="submit">Send</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </View>
  );
}
