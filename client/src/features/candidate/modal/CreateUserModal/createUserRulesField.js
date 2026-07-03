
export const rulesCreateUserField = {
    fullName: [
        (value) => value?.trim()
            ? ''
            : 'fullNameRequired',
            (value) => /^[\p{L}\s]+$/u.test(value)
            ? ''
            : 'fullNameOnlyLetters'
    ],

    email: [
        (value) => value.trim() ? '' : 'emailRequired',
        (value) =>
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                ? ''
                : 'invalidEmail'
    ],

    username: [
        (value) => value.trim() ? '' : 'usernameRequired',
        (value) =>
            value.length >= 4
                ? ''
                : 'usernameMinCharacters'
    ]
};