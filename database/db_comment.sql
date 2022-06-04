/*
 Navicat Premium Data Transfer

 Source Server         : 本地MySQL
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:3306
 Source Schema         : 疫出行

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001

 Date: 04/06/2022 19:08:51
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for db_comment
-- ----------------------------
DROP TABLE IF EXISTS `db_comment`;
CREATE TABLE `db_comment`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT,
  `parent_id` bigint(0) NOT NULL,
  `type` int(0) NOT NULL,
  `commentator` bigint(0) NOT NULL,
  `gmt_create` bigint(0) NOT NULL,
  `gmt_modified` bigint(0) NOT NULL,
  `like_count` bigint(0) NULL DEFAULT 0,
  `content` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `comment_count` int(0) NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 125 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
