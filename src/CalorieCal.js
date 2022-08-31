import React,{useState,useEffect} from 'react'

const CalorieCal = (props) => {
    const [calroies, setCalories] = useState(0);

    useEffect(() => {
      const { steps } = props;
      const { activity, weight, height, age, gender } = steps;
  
      if (gender.value === "male") {
        if (activity.value === "Sedentary") {
          setCalories(
            (10 * weight.value + 6.25 * height.value - 5 * age.value + 5) * 1.2
          );
        } else if (activity.value === "Light") {
          setCalories(
            (10 * weight.value + 6.25 * height.value - 5 * age.value + 5) * 1.5
          );
        } else if (activity.value === "Moderate") {
          setCalories(
            (10 * weight.value + 6.25 * height.value - 5 * age.value + 5) * 1.8
          );
        } else {
          setCalories(
            (10 * weight.value + 6.25 * height.value - 5 * age.value + 5) * 2
          );
        }
      } else {
        if (activity.value === "Sedentary") {
          setCalories(
            (10 * weight.value + 6.25 * height.value - 5 * age.value - 161) * 1.2
          );
        } else if (activity.value === "Light") {
          setCalories(
            (10 * weight.value + 6.25 * height.value - 5 * age.value - 161) * 1.5
          );
        } else if (activity.value === "Moderate") {
          setCalories(
            (10 * weight.value + 6.25 * height.value - 5 * age.value - 161) * 1.8
          );
        } else {
          setCalories(
            (10 * weight.value + 6.25 * height.value - 5 * age.value - 161) * 2
          );
        }
      }
    }, [props]);
    return <h1>{`${calroies} calories`}</h1>;
  };

export default CalorieCal