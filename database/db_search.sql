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

 Date: 05/06/2022 14:40:13
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for db_search
-- ----------------------------
DROP TABLE IF EXISTS `db_search`;
CREATE TABLE `db_search`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `actor` bigint(0) NOT NULL,
  `aimerId` bigint(0) NOT NULL,
  `type` int(0) NOT NULL,
  `gmt_create` bigint(0) NOT NULL,
  `status` int(0) NOT NULL DEFAULT 0,
  `Content` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
