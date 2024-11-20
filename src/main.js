import {defineKeywords,base,globalAjvInstance} from  './js/index';
// base()
// defineKeywords()
const addressValidate = globalAjvInstance.getSchema("address")
const addressData = {       
     "cities":"北京",
    "country":"中国"}

    if(!addressValidate(addressData)) {
        console.log('address_schema没验证通过',addressValidate.errors)
    }

    const combinaValidate = globalAjvInstance.getSchema("combina")
const combinaData = {       
    "friendsAge":[4,9,-2],
    "cities":1234
}

    if(!combinaValidate(combinaData)) {
        console.log('combina_schema没验证通过',combinaValidate.errors)
    } else {
        console.log('combina_schema验证通过')
    }

