function normalizeText( text =''){
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, ' ')
        .replace(/[._-]+/g, ' ');
}

module.exports = {
    normalizeText,
};