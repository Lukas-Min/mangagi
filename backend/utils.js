//* This is where we will add all repetitive functionalities for the different controllers

export const checkMandatoryField = (field) => {
    
    let result = false;

    if(field == null)
    {
        return result;
    }

    if( (field == '' && (typeof(field) == "string")) || (field == 0 && (typeof(field) == "number")) )
    {
        return result;
    }

    result = true;
    return result;

};


export const checkStringField = (field) => {

    let result = false;

    if(field == null)
    {
        return result;
    }

    if(typeof(field) != "string")
    {
        return result;
    }

    result = true;
    return result;

}

export const checkNumberField = (field) => {

    let result = false;

    if(field == null)
    {
        return result;
    }

    if(typeof(field) != "number")
    {
        return result;
    }

    result = true;
    return result;

}

export const containsCharacter = (field, character) => {

    let result = false;

    if(field == null)
    {
        return result;
    }

    if(field.includes(character))
    {
        return result;
    }

    result = true;
    return result;

}

export const checkMandatoryArrayField = ([field]) => {

    let result = false;

    if(field == null) 
    {
        return result;
    }

    if((typeof(field) == 'object') && field.length == 0)
    {
        return result;
    }

    result = true;
    return result;

}

export const checkStringType = (field) => {

    let result = false;

    if(typeof(field) != "string")
    {
        return result;
    }

    result = true;
    return result;

}

export const removeTimestamp = (fileName) => {
    const regex = /^\d+_.*\.\w+$/;
    if (!regex.test(fileName)) {
        return fileName; // Return original filename if it's empty
    }
    const parts = fileName.split('_');
    if (parts.length > 1) {
        return parts.slice(1).join('_'); // Join the parts after the first one (timestamp)
    }
};