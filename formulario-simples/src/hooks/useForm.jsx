import {useState} from react;

const useForm=()=>{
      const[currentStep,setCurrentStep]=useState(0);

      function changeStep(i,e) {
            e.preventDefault();

            if (i < 0 || i >= steps.length) return;

            setCurrentStep(i);
      }

      return {
            currentStep,
            currentComponent: steps[currentStep],
            changeStep,
      };
}

export default useForm;

