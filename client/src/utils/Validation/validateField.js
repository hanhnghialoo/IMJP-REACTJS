
export function validateField (field, value, rulesField){
    const rules = rulesField[field];

    if (!rules) return '';

    for (const rule of rules){
        const error = rule(value);

        if (error){
            return error;
        }
    }

    return '';
}