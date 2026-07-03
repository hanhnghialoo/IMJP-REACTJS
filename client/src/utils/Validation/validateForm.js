import { validateField } from "./validateField";

export function validateForm(formData, rulesField){
    const errors = {};

    Object.keys(formData).forEach((field)=>{
    
            const error = validateField(
                field,
                formData[field],
                rulesField
            )

            if(error){
                errors[field] = error;
            }
        }
    );

    return errors;
}