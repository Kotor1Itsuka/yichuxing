## 1、登陆接口

- ### 请求地址
>接口地址：baseUrl/login
请求示例：baseUrl/login 
支持协议：http/https
请求方式：post
返回格式：utf-8 json

- ### 请求参数
|  名称   | 类型  | 示例   | 说明  |
|  ----   | ----  |  --  | ----  |
| userName | string | daluan2000 | 用户名 |
| password  | string | abcdefg  | 密码 |

- ### 返回参数
|  名称   | 类型  | 示例   | 说明  |
|  ----   | ----  |  --  | ----  |
| permission  | boolean | false  | 账号 |
| reason  | string | 账号或密码错误  | 密码 |

- ### 返回示例
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

## 2、注册接口

- ### 请求地址

>接口地址：baseUrl/register
>请求示例：baseUrl/register
>支持协议：http/https
>请求方式：post
>返回格式：utf-8 json

- ### 请求参数

| 名称     | 类型   | 示例       | 说明   |
| -------- | ------ | ---------- | ------ |
| userName | string | daluan2000 | 用户名 |
| password | string | abcdefg    | 密码   |

- ### 返回参数

| 名称       | 类型    | 示例     | 说明     |
| ---------- | ------- | -------- | -------- |
| permission | boolean | true     | 注册状态 |
| message    | string  | 注册成功 | 状态描述 |

- ### 返回示例

```json
{
    "code": 200,
    "msg": "success",
    "value": 
    {
      "permission": "true",
      "message": "注册成功"
    }
}
```

## 
