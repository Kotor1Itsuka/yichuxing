// @author:樊川
// @email:945001786@qq.com
package com.controller;

import com.entity.User;
import com.mapper.userMapper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
public class userController {
    @Resource
    userMapper userMapper;

    @RequestMapping("/")
    public String index(){
        User user = userMapper.selectOne(1);
        System.out.println(user);
        return user.toString();
    }
}
