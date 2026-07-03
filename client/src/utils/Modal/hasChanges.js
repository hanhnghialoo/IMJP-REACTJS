function hasChanges(initialData, formData){
    if (!initialData || !formData){
        return false
    }
    const keys = Object.keys(formData);
    return keys.some(
        key => formData[key] !== initialData[key]
    );
}
export default hasChanges;