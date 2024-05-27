export const toUpperCase = (string) => string.replace(/\b\w/g, char => char.toUpperCase());

export const isObjectId = (id) => /^[a-f\d]{24}$/i.test(id);