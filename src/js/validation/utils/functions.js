const renderErrors = (obj, act) => {
    Object.entries(obj).forEach(([key, value], i, arr) => {
        const err = arrInputs[i].nextElementSibling;
        if(key === 'name' || key === 'number' || key === 'comments'){
            err.classList[act[value]]('hide')
        } else {
            err.classList[act[value]]('valid')
        }

        return arr;
    })
}

const activateButton = (obj, act, btn) => {
    const active = Object.entries(obj).every(el => {
        return el[1];
    }) 

    btn.disabled = !active;
}

export {renderErrors, activateButton}