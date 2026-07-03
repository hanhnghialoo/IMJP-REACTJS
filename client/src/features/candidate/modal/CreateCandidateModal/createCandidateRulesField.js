
export const rulesCreateCandidateField = {
    fullName: [
        (value) => value?.trim()
            ? ''
            : 'fullNameRequired',
        (value) => /^[\p{L}\s]+$/u.test(value)
            ? ''
            : 'fullNameOnlyLetters'
    ],
};