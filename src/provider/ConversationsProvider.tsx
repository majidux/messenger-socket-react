import {
  useContext,
  useState,
  useEffect,
  useCallback,
  createContext,
} from "@utils";
import { useLocalStorage, useContacts, useSocket } from "@hooks";

const ConversationsContext: any = createContext("");

export function useConversations() {
  return useContext(ConversationsContext);
}

export function ConversationsProvider({ id, children }: any) {
  const [conversations, setConversations] = useLocalStorage(
    "conversations",
    []
  );
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);
  const { contacts }: any = useContacts();
  const socket: any = useSocket();

  function createConversation(recipients: any) {
    setConversations((prevConversations: any) => {
      return [...prevConversations, { recipients, messages: [] }];
    });
  }

  const addMessageToConversation = useCallback(
    ({ recipients, text, sender }) => {
      setConversations((prevConversations: any) => {
        let madeChange = false;
        const newMessage = { sender, text };
        const newConversations = prevConversations.map((conversation: any) => {
          if (arrayEquality(conversation.recipients, recipients)) {
            madeChange = true;
            return {
              ...conversation,
              messages: [...conversation.messages, newMessage],
            };
          }

          return conversation;
        });

        if (madeChange) {
          return newConversations;
        } else {
          return [...prevConversations, { recipients, messages: [newMessage] }];
        }
      });
    },
    [setConversations]
  );

  useEffect(() => {
    if (socket == null) return;

    socket.on("receive-message", addMessageToConversation);

    return () => socket.off("receive-message");
  }, [socket, addMessageToConversation]);

  function sendMessage(recipients: any, text: any) {
    socket.emit("send-message", { recipients, text });

    addMessageToConversation({ recipients, text, sender: id });
  }

  const formattedConversations: any[] =
    conversations?.map((conversation: any, index: any) => {
      const recipients = conversation.recipients.map((recipient: any) => {
        const contact = contacts.find((contact: any) => {
          return contact.id === recipient;
        });
        const name = (contact && contact.name) || recipient;
        return { id: recipient, name };
      });

      const messages = conversation.messages.map((message: any) => {
        const contact = contacts.find((contact: any) => {
          return contact.id === message.sender;
        });
        const name = (contact && contact.name) || message.sender;
        const fromMe = id === message.sender;
        return { ...message, senderName: name, fromMe };
      });

      const selected = index === selectedConversationIndex;
      return { ...conversation, messages, recipients, selected };
    }) || [];

  const value = {
    conversations: formattedConversations,
    selectedConversation: formattedConversations[selectedConversationIndex],
    sendMessage,
    selectConversationIndex: setSelectedConversationIndex,
    createConversation,
  };

  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  );
}

function arrayEquality(a: any, b: any) {
  if (a.length !== b.length) return false;

  a.sort();
  b.sort();

  return a.every((element: any, index: any) => {
    return element === b[index];
  });
}
