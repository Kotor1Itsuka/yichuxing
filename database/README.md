# 数据库设计

---

- ## db_user

  |    字段名    |  类型   | 是否为null |       注释       |
  | :----------: | :-----: | :--------: | :--------------: |
  |   user_id    | bigint  | 主键,非空  |      用户id      |
  |  user_name   | varchar |  可以为空  |      用户名      |
  |   user_sex   | varchar |  可以为空  |     用户性别     |
  |  user_city   | varchar |  可以为空  |     用户城市     |
  |  user_code   | varchar |  可以为空  |  用户行程码状态  |
  |  user_token  | varchar |  可以为空  |   用户登陆令牌   |
  | user_status  |   int   |  可以为空  |   用户在线状态   |
  |  user_phone  | varchar |  可以为空  |     用户手机     |
  |   user_bio   | varchar |  可以为空  |     用户介绍     |
  |  avatar_url  | varchar |  可以为空  |     用户头像     |
  |  gmt_create  | bigint  |    非空    |   用户创建时间   |
  | gmt_modified | bigint  |    非空    | 用户最后登录时间 |
  |   disable    |   int   |    非空    |   用户封禁状态   |

- ## db_city

  |    字段名     |  类型   | 是否为null |     注释     |
  | :-----------: | :-----: | :--------: | :----------: |
  |    city_id    | bigint  | 主键,非空  |    城市id    |
  |   city_name   | varchar |  可以为空  |   城市名称   |
  | city_location | varchar |  可以为空  |   城市位置   |
  |  city_status  | varchar |  可以为空  | 城市疫情状态 |
  |   city_area   | varchar |  可以为空  | 城市风险区域 |
  |   city_desc   | varchar |  可以为空  |   城市介绍   |

  