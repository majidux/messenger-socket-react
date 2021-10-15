import { ListGroup } from "@utils";
import { useConversations } from "@hooks";
import { View } from "../atoms/View/index";

export function Conversations() {
  const { conversations, selectConversationIndex }: any = useConversations();

  return (
    <View backgroundColor="pink">
      <ListGroup variant="flush">
        {conversations?.map((conversation: any, index: number) => (
          <ListGroup.Item
            key={index}
            action
            onClick={() => selectConversationIndex(index)}
            active={conversation.selected}
          >
            {conversation.recipients.map((r: any) => r.name).join(", ")}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </View>
  );
}
