
const base = () => {
const Ajv = require('ajv') //引入ajv（ajv不同版本可以兼容识别的json schema草案版本也不一致，需要注意引入的模式版本~）
const ajv = new Ajv() // 实例化ajv对象
const schema = require('../../schema/combina.json') // 引入需要参与编译的模式

const validate = ajv.compile(schema) // 将模式编译为js =>validate对象
// 输入进来的数据
const data = {
    "friendsAge":[4,9,-2],
    "cities":1
}
// 将数据进行模式验证
const valid = validate(data); 
// valid =>返回布尔值，false时表示验证不通过，打印错误提示
if (!valid) console.log(validate.errors)
}

export default base