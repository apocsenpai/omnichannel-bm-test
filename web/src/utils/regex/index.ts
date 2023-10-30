// profile matches

export const phoneMatch = /\([1-9]{2}\) 9[1-9]\d{3}-\d{4}/
export const dateMatch = /[0-3][0-9]\/[0-1][0-9]\/[1-2][9|0]\d{2}/

// user matches

export const nameMatch = /^[a-záàâãéèêíïóôõöúçñ ]+$/i
export const emailMatch = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
export const passwordMatch =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

// address matches
export const cepMatch = /\d{5}-\d{3}/

// generics matches

export const alphaNumMatch = /^[\wáàâãéèêíïóôõöúçñ]+$/i
export const numericMatch = /^[\d]+$/

