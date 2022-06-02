// @author:樊川
// @email:945001786@qq.com
package com.controller;

import com.entity.City;
import com.mapper.cityMapper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
public class cityController {
    @Resource
    cityMapper cityMapper;

    @RequestMapping("/")
    public String index(){
        City city = cityMapper.selectOne(1);
        System.out.println(city);
        return city.toString();
    }
}
