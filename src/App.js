import ChatBot from "react-simple-chatbot";

function App() {
  return (
    <div className="App">
      <ChatBot
        steps={[
          {
            id: "1",
            message: "What is your age?",
            trigger: "age"
            // end: true,
          },
          {
            id: "age",
            user:true,
            trigger:"3"
          },
          {
            id:"3",
            message:"What is your gender",
            trigger:"gender"
          },
          {
            id: 'gender',
            options: [
              { value: 'male', label: 'Male', end: true },
              { value: 'female', label: 'Female', end : true},
            ],
          },
        ]}
      />
    </div>
  );
}

export default App;
