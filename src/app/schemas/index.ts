export const noCyrillic: RegExp = /^[^а-яёїєі]+$/i;
export const easy: RegExp = /^(?:\d+|[a-z]+|[^a-z\d]+)$/i;
export const medium: RegExp = /^(?:[a-z\d]+|[^a-z]+|[^\d]+)$/i;
