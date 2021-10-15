import { React, Sidebar, OpenConversation, View } from "@utils";
import { useConversations } from "@hooks";

export function Dashboard({ id }: any) {
  const { selectedConversation }: any = useConversations();
  return (
    <View height="100vh" flexDirection="row">
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </View>
  );
}
