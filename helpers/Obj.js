exports.Obj = {
    get: (object, variable, defaultValue = null) => {
        return Object.keys(object).indexOf(variable) !== -1 ?
            object[variable] :
            defaultValue;
    }
};