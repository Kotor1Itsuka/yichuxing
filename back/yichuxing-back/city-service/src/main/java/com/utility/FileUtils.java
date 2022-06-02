// @author:樊川
// @email:945001786@qq.com
package com.utility;

import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * 专注于处理图片的工具
 */
@Slf4j
public class FileUtils {
    private static List<String> suffix = new ArrayList<>();

    static {
        suffix.add(".png");
        suffix.add(".bmp");
        suffix.add(".gif");
        suffix.add(".jpeg");
        suffix.add(".jpg");
    }

    public static File MultipartFileToFile(MultipartFile multiFile) {
        // 获取文件名
        String fileName = multiFile.getOriginalFilename();
        // 获取文件后缀
        String prefix =  fileName.substring(0,fileName.lastIndexOf("."));
        String suffix = fileName.substring(fileName.lastIndexOf("."));
        try {
            File file = File.createTempFile(prefix,suffix);
            multiFile.transferTo(file);

            return file;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static boolean hasSuffix(String fileName) {
        for (String s : suffix) {
            if (StringUtils.endsWithIgnoreCase(fileName, s)) {
                return true;
            }
        }
        return false;
    }

    public static String newUUIDPNGFileName() {
        return UUID.randomUUID().toString().replace("-", "") + ".png";
    }

    public static String newLocalFileName(String fileName) {
        String path = System.getProperty("user.dir") + File.separator;
        return newLocalFileName(path, fileName);
    }

    public static String newLocalFileName(String path, String fileName) {
        return path ;
    }

    public static File newFile(String url) {
        File file;
        String localFile = newLocalFileName(url);
        log.info("FILE_UTILS_NEW_INFO, url : {}, localFile : {}", url, localFile);
        file = new File(localFile);
        try {
//            org.apache.commons.io.FileUtils.copyURLToFile(new URL(url), file);
        } catch (Exception e) {
            log.error("FILE_UTILS_NEW_ERROR, url : {}", url, e);
            return null;
        }
        return file;
    }

    public static void deleteFile(File file) {
        try {
            file.delete();
        } catch (Exception e) {
            log.debug("FILE_UTILS_ERROR", e);
        }
    }

    public static void main(String[] args) {
        String x = FileUtils.newLocalFileName("http://luckydraw.cn-bj.ufileos.com/ffb5134b-8070-4d65-be0f-c3b1a0050dbc.jpg");
        System.out.println(x);
    }
}