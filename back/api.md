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

## 3、查询城市接口

- ### 请求地址

>接口地址：baseUrl/searchCity
>请求示例：baseUrl/searchCity
>支持协议：http/https
>请求方式：post
>返回格式：utf-8 json

- ### 请求参数

| 名称     | 类型   | 示例 | 说明   |
| -------- | ------ | ---- | ------ |
| cityName | string | 成都 | 城市名 |

- ### 返回参数

| 名称         | 类型   | 示例                 | 说明         |
| ------------ | ------ | -------------------- | ------------ |
| cityName     | string | 成都                 | 城市名       |
| cityLocation | string | 中国西部             | 城市位置     |
| cityStatus   | string | 低风险地区           | 城市疫情状态 |
| cityArea     | string | 成华区               | 城市风险区域 |
| cityDesc     | string | 成都，四川省辖地级市 | 城市介绍     |

- ### 返回示例

```json
{
    "code": 200,
    "msg": "success",
    "value": 
    {
      "cityName":"成都",
      "cityLocation":"中国西部",
      "cityStatus":"低风险地区",
      "cityArea":"null"
      "cityDesc":"成都，四川省辖地级市，简称“蓉”，别称蓉城、锦城",
    }
}
```

## 
