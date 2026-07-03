
import { validators } from "../../../../utils/Validation/validationRules";


export const createUserRules = {
    fullName: [
        validators.required
    ],

    username:[
        validators.required,
        validators.minLength(4)
    ],

    email: [
        validators.requiredEmail,
        validators.email
    ],

    phoneNumber: [
        validators.phone
    ]
}