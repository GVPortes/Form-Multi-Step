import { useState } from "react";

export function useForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});

    return {
        nextStep: () => setCurrentStep((prev) => prev + 1),
        prevStep: () => setCurrentStep((prev) => prev - 1),
        handleChange: (e) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
        },
        currentStep,
        formData
    };
}