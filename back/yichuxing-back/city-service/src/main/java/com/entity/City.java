// @author:樊川
// @email:945001786@qq.com
package com.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName(value = "db_user")
public class City {
    Integer uid;
    String name;
    Integer age;
    String sex;
}
