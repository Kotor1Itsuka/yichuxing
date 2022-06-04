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


- ## db_coment

  |    字段名     |  类型   | 是否为null |     注释     |
  | :-----------: | :-----: | :--------: | :----------: |
  |      id       | bigint  | 主键，非空 |    评论id    |
  |   parent_id   | bigint  |  可以为空  |  上级评论id  |
  |     type      |   int   |  可以为空  |   评论类型   |
  |  commentator  | bigint  | 外键，非空 |  评论用户id  |
  |  gmt_create   | bigint  |  可以为空  |   评论时间   |
  | gmt_modified  | bigint  |  可以为空  | 评论修改时间 |
  |  like_count   | bigint  |  可以为空  |    点赞数    |
  | comment_count |   int   |  可以为空  |  二级评论数  |
  |    content    | varchar |  可以为空  |   评论内容   |
  | comment_count | bigint  |  可以为空  |  二级评论数  |

- ## db_notification

  |    字段名     |  类型   | 是否为null |      注释      |
  | :-----------: | :-----: | :--------: | :------------: |
  |      id       | bigint  | 主键，非空 |     消息id     |
  |   notifier    | bigint  | 外键，非空 | 消息发出用户id |
  |   receiver    |   int   | 外键，非空 | 消息接收用户id |
  |    outerid    | bigint  | 外键，非空 |   消息来源id   |
  |     type      | bigint  |  可以为空  |  消息来源类型  |
  |  gmt_create   | bigint  |  可以为空  |  消息产生时间  |
  |    status     | bigint  |  可以为空  |  消息已读状态  |
  | notifier_name | varchar |  可以为空  |    消息动作    |
  |  outer_title  | bigint  |  可以为空  | 消息来源处标题 |

- ## db_question

  |    字段名     |  类型   | 是否为null |      注释      |
  | :-----------: | :-----: | :--------: | :------------: |
  |      id       | bigint  | 主键,非空  |     问题id     |
  |     title     | varchar |  可以为空  |    问题标题    |
  |  description  |  text   |  可以为空  |    问题描述    |
  |  gmt_create   | bigint  |  可以为空  |  问题创建时间  |
  | gmt_modified  | bigint  |  可以为空  |  问题修改时间  |
  |    creator    | bigint  | 外键，非空 | 问题创建用户id |
  | comment_count |   int   |  可以为空  |     评论数     |
  |  view_count   |   int   |  可以为空  |     阅读量     |
  |  like_count   |   int   |  可以为空  |     点赞数     |
  |      tag      | varchar |  可以为空  |    问题标签    |
