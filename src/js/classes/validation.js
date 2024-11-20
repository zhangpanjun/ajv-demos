
const validation = () =>{
    // 这里的ajv默认支持jsonschema07版本的所有关键字，
    // 要是你引进来的schema有其他版本的关键字，建议还是改成统一版本吧，
    // 要不就多个ajv实例，每个实例require("ajv/dist/版本")  引用对应一个jsonschema版本。要不就严格模式下嘎嘎报错
    const Ajv = require("ajv") 
    const schema_address = require('../../schema/address.json');
    const schema_combina = require('../../schema/combina.json');
    const globalAjvInstance = new Ajv({ allErrors: true })
    require("ajv-errors")(globalAjvInstance);
    globalAjvInstance.addSchema(schema_address,'address')
    globalAjvInstance.addSchema(schema_combina,'combina')
    return globalAjvInstance
}
export default validation()
