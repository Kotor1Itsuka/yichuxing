// @author:樊川
// @email:945001786@qq.com
package com.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.entity.City;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface cityMapper extends BaseMapper<City> {
    @Select("select * from db_city where id = #{id}")
    City selectOne(Integer id);
    @Select("select * from db_city where id = #{id}")
    City deleteOne(Integer id);
    @Select("select * from db_city where id = #{id}")
    City selectById(Integer id);
    @Select("select * from db_city where id = #{id}")
    City deleteById(Integer id);
}
