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
| userName | string | daluan2000 | 账号 |
| password  | string | abcdefg  | 密码 |

- ### 返回参数
|  名称   | 类型  | 示例   | 说明  |
|  ----   | ----  |  --  | ----  |
| permission  | boolean | false  | 是否允许登陆 |
| reason  | string | 账号或密码错误  | 原因 |

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
## 4、绑定手机号接口

- ### 请求地址

>接口地址：baseUrl/bindPhone
>请求示例：baseUrl/bindPhone
>支持协议：http/https
>请求方式：post返回格式：utf-8 json

- ### 请求参数

| 名称     | 类型   | 示例         | 说明   |
| -------- | ------ | ------------ | ------ |
| userName | string | Kotor1Itsuka | 账号   |
| phone    | string | 33322221111  | 手机号 |

- ### 返回参数

| 名称       | 类型    | 示例             | 说明         |
| ---------- | ------- | ---------------- | ------------ |
| permission | boolean | false            | 是否绑定成功 |
| reason     | string  | 手机号格式不正确 | 原因         |

- ### 返回示例

```json
{
    "code": 200,
    "msg": "success",
    "value": 
    {
      "permission": "false",
      "reason": "手机号格式不正确"
    }
}
```

## 5、设定路径城市接口

- ### 请求地址

>接口地址：baseUrl/setPathCity
>请求示例：baseUrl/setPathCity
>支持协议：http/https
>请求方式：post返回格式：utf-8 json

- ### 请求参数

| 名称     | 类型 | 示例             | 说明                 |
| -------- | ---- | ---------------- | -------------------- |
| pathCity | list | 成都，遂宁，重庆 | 路径城市名组成的列表 |

- ### 返回参数

| 名称       | 类型 | 示例    | 说明                       |
| ---------- | ---- | ------- | -------------------------- |
| pathCityId | list | 1，2，3 | 路径城市名对应id组成的列表 |

- ### 返回示例

```json
{
    "code": 200,
    "msg": "success",
    "value": 
    {
      "pathCityId": ['1','2','3']
    }
}
```
## 6、浏览论坛接口

- ### 请求地址

>接口地址：baseUrl/browseForums
>请求示例：baseUrl/browseForums
>支持协议：http/https
>请求方式：post返回格式：utf-8 json

- ### 请求参数

| 名称     | 类型   | 示例         | 说明     |
| -------- | ------ | ------------ | -------- |
| userName | string | Kotor1Itsuka | 用户账号 |
| password | string | 12345678a    | 密码     |

- ### 返回参数

| 名称       | 类型   | 示例                   | 说明             |
| ---------- | ------ | ---------------------- | ---------------- |
| permission | string | false                  | 账号密码是否合法 |
| reason     | string | 账号或密码错误         | 错误信息         |
| post       | string | 关于目前疫情形势的看法 | 帖子的内容       |

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
## 
