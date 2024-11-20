const defineKeywords =  () => {
    
const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true }); 
require("ajv-errors")(ajv);
ajv.addKeyword({
    keyword:'even',
    type:'number',
    schemaType:'boolean',
    validate: (schema, data) =>
       { 
            console.log('schema是',schema,'data是',data);
            const temp = data%2 === 0 // 判断传入的数据是否是偶数
            return  temp === schema  // 传入数据被检验后的结果是否和schema中要求的规则一致，一致就通过，不一致就打印报错
        }
    })
const schema = {
    type:"object",
    properties:{
        age: {
            type:"number",
            even: false,
            errorMessage:{
                type: "必须是数字",
                even: "必须是基数",
            }
        }
    }}
const validate = ajv.compile(schema) 

const data = {
    age: 2
}

const valid = validate(data); 

if (!valid) {
    console.log(validate.errors,validate.errors[0].message)
}

}
export default defineKeywords