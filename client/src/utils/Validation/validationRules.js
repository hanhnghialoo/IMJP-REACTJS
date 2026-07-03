export const validators = {
    required: (value) => value?.trim() ? '' : 'required',

    requiredEmail: (value) => value?.trim() ? '' : 'requiredEmail',

    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ''
        : 'invalid',

    phone: (value) => /^0\d{9,10}$/.test(value)
        ? ''
        : 'invalid',

    minLength: (length) => (value) => value?.length >= length
        ? ''
        : `minium characters`
}