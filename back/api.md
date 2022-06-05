## 登陆接口

- ### 请求地址
>接口地址：baseUrl/login
请求示例：baseUrl/login 
支持协议：http/https
请求方式：post
返回格式：utf-8 json

- ### 请求参数
|  名称   | 类型  | 示例   | 说明  |
|  ----   | ----  |  --  | ----  |
| id  | string | daluan2000  | 账号 |
| password  | string | abcdefg  | 密码 |

- ### 返回参数
|  名称   | 类型  | 示例   | 说明  |
|  ----   | ----  |  --  | ----  |
| permission  | boolean | false  | 账号 |
| reason  | string | 账号或密码错误  | 密码 |
```json
{
    "code": 200,
    "msg": "success",
    "value": 
    {
      "permission": "false",
      "reason": "账号或密码错误"
    }
}
```