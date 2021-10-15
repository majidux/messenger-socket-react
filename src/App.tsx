import {
  Login,
  useLocalStorage,
  Dashboard,
  ConversationsProvider,
  ContactsProvider,
  SocketProvider,
} from "@utils";

function App() {
  const [id, setId] = useLocalStorage("id");
  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );

  return id ? dashboard : <Login onIdSubmit={setId} />;
}

export default App;
