// @author:樊川
// @email:945001786@qq.com
package com.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface userMapper extends BaseMapper<User> {
    @Select("select * from db_user where uid = #{uid}")
    User selectOne(Integer uid);
}
