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

 Date: 04/06/2022 19:08:40
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for db_question
-- ----------------------------
DROP TABLE IF EXISTS `db_question`;
CREATE TABLE `db_question`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `gmt_create` bigint(0) NULL DEFAULT NULL,
  `gmt_modified` bigint(0) NULL DEFAULT NULL,
  `creator` bigint(0) NOT NULL,
  `comment_count` int(0) NULL DEFAULT 0,
  `view_count` int(0) NULL DEFAULT 0,
  `like_count` int(0) NULL DEFAULT 0,
  `tag` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sticky` int(0) NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 84 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
