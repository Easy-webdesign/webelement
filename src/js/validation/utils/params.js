const type = el => el.name === 'name' || el.name === 'comments' ? 'string' : el.name === 'check' ? 'checkbox' : 'number';
const lengthPar = (el) => {
    return {
        string:  el.value.length >= 2,
        number: el.value.length >= 10
    }
}

export {type, lengthPar}