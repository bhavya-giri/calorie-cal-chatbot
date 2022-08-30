// import { useEffect, useState } from "react";
import ChatBot from "react-simple-chatbot";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: '',
      gender: '',
      age: '',
      weight :'',
      activity:''
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { age,gender,height,weight,activity } = steps;
    
    this.setState({  age,gender,height,weight,activity });
    
  }
  

  render() {
    const {  age,gender,height,weight,activity} = this.state;
    const cal =()=>{
      return(
        parseInt(age)*parseInt(weight)*parseInt(height)
      )
    }
    
    return (
      <div style={{ width: '100%' }}>
        <h3>{cal()}</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{activity.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{height.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{weight.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};


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
        { value: 'Sedentary', label: 'Sedentary',trigger:'12'  },
        { value: 'Light', label: 'Light',trigger:'12' },
        { value: 'Moderate', label: 'Moderate',trigger:'12'},
        { value: 'Hight', label: 'High',trigger:'12'},
      ],
    },
    {
      id: '12',
      message: 'Great! Check out your maintaince calroies',
      trigger: 'calories',
    },
    {
      id: 'calories',
      component: <Review />,
      asMessage: true,
      end:true,
    },
  ]}
/>
    </div>
  );
}

export default App;
