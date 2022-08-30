import ChatBot from "react-simple-chatbot";

function App() {
  return (
    <div className="App">
      <ChatBot
        steps={[
          {
            id: "hello-world",
            message: "Hello World!",
            end: true,
          },
        ]}
      />
    </div>
  );
}

export default App;
