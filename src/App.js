import ChatBot from "react-simple-chatbot";

const CalorieCal =()=>{

}
function App() {

  return (
    <div className="App">
    <ChatBot
  steps={[
    {
      id: '1',
      message: 'Hi, I am Calorie Calculator Bot',
      trigger:'2'
      // end: true,
    },
    {
      id: '2',
        message: 'What is your gender?',
        trigger: 'gender',
    },
    {
      id: 'gender',
      options: [
        { value: 'male', label: 'Male', trigger:'4'},
        { value: 'female', label: 'Female', trigger:'4' },
      ],
    },
    {
      id: '4',
      message: 'How old are you?',
      trigger: 'age',
    },
    {
      id: 'age',
      user: true,
      trigger: '6',
      validator: (value) => {
        if (isNaN(value)) {
          return 'value must be a number';
        } else if (value < 0) {
          return 'value must be positive';
        } else if (value > 120) {
          return `${value}? Come on!`;
        }

        return true;
      },
    },
    {
      id: '6',
      message: 'What is your height(cm)?',
      trigger: 'height',
    },
    {
      id: 'height',
      user: true,
      trigger:'8',
      validator: (value) => {
        if (isNaN(value)) {
          return 'value must be a number';
        } else if (value < 0) {
          return 'value must be positive';
        } else if (value > 270) {
          return `${value}? Come on!`;
        }

        return true;
      },
    },
    {
      id: '8',
      message: 'What is your weight(kg)?',
      trigger: 'weight',
    },
    {
      id: 'weight',
      user: true,
      trigger:'10',
      validator: (value) => {
        if (isNaN(value)) {
          return 'value must be a number';
        } else if (value < 0) {
          return 'value must be positive';
        } else if (value > 635) {
          return `${value}? Come on!`;
        }

        return true;
      },
    },
    {
      id: '10',
      message: 'What is you activity level?',
      trigger: 'activity',
    },
    {
      id: 'activity',
      options: [
        { value: 'Sedentary', label: 'Sedentary',end:true  },
        { value: 'Light', label: 'Light',end:true  },
        { value: 'Moderate', label: 'Moderate',end:true},
        { value: 'Hight', label: 'High',end:true },
      ],
    },
  ]}
/>
    </div>
  );
}

export default App;
