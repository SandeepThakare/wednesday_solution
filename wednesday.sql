-- MySQL dump 10.13  Distrib 8.0.19, for Linux (x86_64)
--
-- Host: localhost    Database: wednesday
-- ------------------------------------------------------
-- Server version	8.0.19-0ubuntu0.19.10.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20200507100642-migration-create-wednesday-database.js'),('20200507100643-migration-create-wednesday-database.js'),('20200507100644-migration-create-wednesday-database.js'),('20200507100645-migration-create-wednesday-database.js'),('20200507100646-migration-create-wednesday-database.js'),('20200507102602-migration-create-bookings-table.js'),('20200507102603-migration-create-bookings-table.js'),('20200507102604-migration-create-bookings-table.js'),('20200507102605-migration-create-bookings-table.js'),('20200507102606-migration-create-bookings-table.js'),('20200507103913-migration-create-cab-users-table.js'),('20200507103914-migration-create-cab-users-table.js'),('20200507103915-migration-create-cab-users-table.js'),('20200507103916-migration-create-cab-users-table.js'),('20200507103917-migration-create-cab-users-table.js'),('20200507104933-migration-alter-users-table.js'),('20200507104934-migration-alter-users-table.js'),('20200507104935-migration-alter-users-table.js'),('20200507104936-migration-alter-users-table.js'),('20200507125903-migration-alter-bookings-table-add-long-latt-column.js'),('20200507125904-migration-alter-bookings-table-add-long-latt-column.js'),('20200507125905-migration-alter-bookings-table-add-long-latt-column.js'),('20200507125906-migration-alter-bookings-table-add-long-latt-column.js'),('20200507125907-migration-alter-bookings-table-add-long-latt-column.js'),('20200507125942-migration-alter-cabs-table-add-current-long-latt-column.js'),('20200507125943-migration-alter-cabs-table-add-current-long-latt-column.js'),('20200507125944-migration-alter-cabs-table-add-current-long-latt-column.js'),('20200507125945-migration-alter-cabs-table-add-current-long-latt-column.js'),('20200507125946-migration-alter-cabs-table-add-current-long-latt-column.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookings` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `booking_start_time` datetime DEFAULT NULL,
  `booking_end_time` datetime DEFAULT NULL,
  `booking_owner` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `booking_cab_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `booking_status` varchar(20) DEFAULT 'Waiting',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `rating` float DEFAULT NULL,
  `booking_from_longitude` double DEFAULT NULL,
  `booking_from_lattitude` double DEFAULT NULL,
  `booking_to_longitude` double DEFAULT NULL,
  `booking_to_lattitude` double DEFAULT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES ('0368728f-d2a8-4a13-86d1-569604ab22e2',NULL,NULL,'55f88adf-1c04-4f6c-9ca6-c3a2f7c5ef2e','3bcf903d-1f0a-4f93-9967-6f3f902e7f98','Waiting','2020-05-08 18:14:27','2020-05-08 18:14:27',NULL,23.14835,78.16192,21.1458,79.088158),('1d1b5340-fbb3-4981-acf3-55635b84eef6',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 16:38:02','2020-05-08 16:38:02',NULL,23.14835,78.16192,21.1458,79.088158),('29cb37e1-f11f-4f50-8e70-15ed65d03d22',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 15:49:33','2020-05-08 15:49:33',NULL,23.14835,78.16192,21.1458,79.088158),('32982514-e462-45a5-929c-b1d37d9b5166',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 16:16:26','2020-05-08 16:16:26',NULL,23.14835,78.16192,21.1458,79.088158),('3484a6d1-71fb-4147-8b71-96113a92f089',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 15:54:19','2020-05-08 15:54:19',NULL,23.14835,78.16192,21.1458,79.088158),('3871c1e3-c477-4004-b9a9-e5613202b82e',NULL,NULL,'55f88adf-1c04-4f6c-9ca6-c3a2f7c5ef2e','3bcf903d-1f0a-4f93-9967-6f3f902e7f98','Waiting','2020-05-08 18:19:17','2020-05-08 18:19:17',NULL,23.14835,78.16192,21.1458,79.088158),('42528012-1881-4664-8252-80f97c99ea6a','2020-05-07 21:09:46','2020-05-07 22:09:46','d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Completed','2020-05-07 23:27:54','2020-05-08 18:19:17',NULL,23.14835,78.16192,21.1458,79.088158),('491d9c3d-f02f-4204-bad6-d7f8d2c9cee1',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 15:40:08','2020-05-08 15:40:08',NULL,23.14835,78.16192,21.1458,79.088158),('5b2b4b93-b357-4735-9888-ae81e2c6f5fc',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 15:41:33','2020-05-08 15:41:33',NULL,23.14835,78.16192,21.1458,79.088158),('5c228475-dbb6-4c15-adbf-6ee177280067',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 15:37:39','2020-05-08 15:37:39',NULL,23.14835,78.16192,21.1458,79.088158),('5f35b403-2f52-4514-83dc-33604d12694c',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 16:04:57','2020-05-08 16:04:57',NULL,23.14835,78.16192,21.1458,79.088158),('60484b84-a011-4e71-9902-8900a137c8a3',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 15:46:42','2020-05-08 15:46:42',NULL,23.14835,78.16192,21.1458,79.088158),('639144a4-742e-4e47-abec-0a4057b2737a',NULL,NULL,'55f88adf-1c04-4f6c-9ca6-c3a2f7c5ef2e','3bcf903d-1f0a-4f93-9967-6f3f902e7f98','Waiting','2020-05-08 18:13:24','2020-05-08 18:13:24',NULL,23.14835,78.16192,21.1458,79.088158),('68c63bff-f9ed-4714-a906-d39461d1c09a',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 15:50:09','2020-05-08 15:50:09',NULL,23.14835,78.16192,21.1458,79.088158),('6a31172a-9ee9-47e4-be1c-d0704596e2d4',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 15:38:16','2020-05-08 15:38:16',NULL,23.14835,78.16192,21.1458,79.088158),('6aad0df1-15b5-4afb-a6c2-8b6e85496dd0',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 16:15:30','2020-05-08 16:15:30',NULL,23.14835,78.16192,21.1458,79.088158),('7f99ab29-fe0c-48dd-a231-1e00abba6054',NULL,NULL,'55f88adf-1c04-4f6c-9ca6-c3a2f7c5ef2e','3bcf903d-1f0a-4f93-9967-6f3f902e7f98','Waiting','2020-05-08 18:05:13','2020-05-08 18:05:13',NULL,23.14835,78.16192,21.1458,79.088158),('851cd733-9fb8-4dfc-8af1-3b634d60d787',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 16:00:00','2020-05-08 16:00:00',NULL,23.14835,78.16192,21.1458,79.088158),('8f710e67-ae05-4f6b-beab-7aa54e592a70',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 16:06:05','2020-05-08 16:06:05',NULL,23.14835,78.16192,21.1458,79.088158),('92f898a2-71db-4776-af37-44f5d2b5f426',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 15:42:59','2020-05-08 15:42:59',NULL,23.14835,78.16192,21.1458,79.088158),('96849fbd-4128-4eee-b618-a133ea1e7574',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 15:54:05','2020-05-08 15:54:05',NULL,23.14835,78.16192,21.1458,79.088158),('a4ffdd8a-359f-4e01-a3ec-a1b1dec4977f',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 15:40:44','2020-05-08 15:40:44',NULL,23.14835,78.16192,21.1458,79.088158),('a6035aa1-4dc3-4f9d-9ac1-b66c91415fe2',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 16:01:44','2020-05-08 16:01:44',NULL,23.14835,78.16192,21.1458,79.088158),('aaa0d796-30a0-48af-a835-332822eec8cc',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 16:06:37','2020-05-08 16:06:37',NULL,23.14835,78.16192,21.1458,79.088158),('c220ef3c-ff79-4352-ae7d-4aa7692e0718',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 15:39:23','2020-05-08 15:39:23',NULL,23.14835,78.16192,21.1458,79.088158),('c2c604c8-e33e-4f9b-9e01-0ec2bb11df13',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 15:53:22','2020-05-08 15:53:22',NULL,23.14835,78.16192,21.1458,79.088158),('d41f9c1f-46c3-4944-ad7d-48b353c83350',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 16:38:00','2020-05-08 16:38:00',NULL,23.14835,78.16192,21.1458,79.088158),('d6a6096a-5e30-4fe5-b1cc-963a403c36bc',NULL,NULL,'55f88adf-1c04-4f6c-9ca6-c3a2f7c5ef2e','3bcf903d-1f0a-4f93-9967-6f3f902e7f98','Waiting','2020-05-08 16:54:27','2020-05-08 16:54:27',NULL,23.14835,78.16192,21.1458,79.088158),('dce47c0a-e937-462d-8d19-bf4e7e702731',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 15:52:30','2020-05-08 15:52:30',NULL,23.14835,78.16192,21.1458,79.088158),('df52b8c6-19ce-4eb7-820e-e48fba9e4c00',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 16:07:09','2020-05-08 16:07:09',NULL,23.14835,78.16192,21.1458,79.088158),('dfcdd5cb-169f-4fcb-82a5-ecf0a66cd3af','2020-05-07 21:09:46','2020-05-07 22:09:46','0e1b3f38-306e4ef1-babc-78f0bcc8fad3','3bcf903d-1f0a-4f93-9967-6f3f902e7f98','Completed','2020-05-07 20:54:46','2020-05-07 23:26:28',NULL,21.14835,79.16192,21.1458,79.088158),('e6f15c93-3680-4e7e-9fc3-6cd3f1169df9','2020-05-07 21:09:46',NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Confirmed','2020-05-08 16:03:58','2020-05-08 18:19:17',NULL,23.14835,78.16192,21.1458,79.088158),('ea915330-ab6e-4846-9547-990f4fd0448b',NULL,NULL,'d241b20a-157b-4ccb-b76f-24c5d5443749','a27170ac-7154-46d1-bcff-3454fcaed336','Waiting','2020-05-08 16:05:18','2020-05-08 16:05:18',NULL,23.14835,78.16192,21.1458,79.088158);
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cab_users_mst`
--

DROP TABLE IF EXISTS `cab_users_mst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cab_users_mst` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `cab_number` varchar(20) NOT NULL,
  `cab_current_status` varchar(20) DEFAULT 'Active',
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `current_location_longitude` double DEFAULT NULL,
  `current_location_lattitude` double DEFAULT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cab_users_mst`
--

LOCK TABLES `cab_users_mst` WRITE;
/*!40000 ALTER TABLE `cab_users_mst` DISABLE KEYS */;
INSERT INTO `cab_users_mst` VALUES ('0e0c5088-3eb5-4dd4-9483-8eaa9982a2a3','MH 31 Ah 0002','Active','Harry','Potter','2020-05-07 20:01:18','2020-05-07 20:01:18',22.14835,80.16192),('3bcf903d-1f0a-4f93-9967-6f3f902e7f98','MH 31 Ah 0001','Active','John','Doe','2020-05-07 19:59:25','2020-05-07 23:26:28',22.24835,80.26192),('43ba9517-16a7-4370-8e88-a55131dd3f12','MH 31 Ah 0006','Active','Aarya','Stark','2020-05-08 16:15:30','2020-05-08 16:15:30',26.14835,84.16192),('6db8c076-d61b-4f2e-8019-68da18e06204','MH 31 Ah 0006','Active','Aarya','Stark','2020-05-08 16:49:13','2020-05-08 16:49:13',26.14835,84.16192),('6f1ccec0-a951-4b2d-bed2-2534f4a41a0a','MH 31 Ah 0006','Active','Aarya','Stark','2020-05-08 18:13:24','2020-05-08 18:13:24',26.14835,84.16192),('7d198738-52a8-46ad-8454-1af48412d812','MH 31 Ah 0006','Active','Aarya','Stark','2020-05-08 18:05:13','2020-05-08 18:05:13',26.14835,84.16192),('96c06f3d-f0c6-41c1-8017-9bff35558126','MH 31 Ah 0006','Active','Aarya','Stark','2020-05-08 16:54:27','2020-05-08 16:54:27',26.14835,84.16192),('a1c0de03-a3d3-485d-af4b-ccc71317f76e','MH 31 Ah 0006','Active','Aarya','Stark','2020-05-08 16:50:44','2020-05-08 16:50:44',26.14835,84.16192),('a27170ac-7154-46d1-bcff-3454fcaed336','MH 31 Ah 0004','Active','Cal','Drogo','2020-05-07 20:05:52','2020-05-08 18:19:17',22.34835,80.36192),('a31810cb-11a3-40cb-a359-cec0ef190617','MH 31 Ah 0003','Active','Ron','Visley','2020-05-07 20:05:16','2020-05-07 20:05:16',22.44835,80.46192),('a58d08bf-2222-4f4c-9703-dc2ab5bd9912','MH 31 Ah 0006','Active','Aarya','Stark','2020-05-08 18:14:27','2020-05-08 18:14:27',26.14835,84.16192),('aa4f4c9f-9009-43f7-9989-edd1e57c0849','MH 31 Ah 0006','Active','Aarya','Stark','2020-05-07 20:06:52','2020-05-07 20:06:52',22.54835,80.56192),('b14389bb-03ce-4e0c-adf0-ddf5656f3cc5','MH 31 Ah 0006','Active','Aarya','Stark','2020-05-08 18:19:17','2020-05-08 18:19:17',26.14835,84.16192),('b58c4c89-cb91-4d5d-8e58-ab009e5ea112','MH 31 Ah 0005','Active','Sansa','Stark','2020-05-07 20:06:20','2020-05-07 20:06:20',22.64835,80.66192),('e6dfc6fd-3e44-4cb4-80ac-70c8600aa9a1','MH 31 Ah 0006','Active','Aarya','Stark','2020-05-08 16:16:26','2020-05-08 16:16:26',26.14835,84.16192);
/*!40000 ALTER TABLE `cab_users_mst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `username` varchar(75) NOT NULL,
  `password` varchar(100) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `mobile` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `travel_status` varchar(100) DEFAULT 'Away',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`uuid`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `mobile` (`mobile`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('55f88adf-1c04-4f6c-9ca6-c3a2f7c5ef2e','sandeepthakare111','S@ndeep123','Sandeep','Thakare','Nagpur','Nagpur','MH','INDIA','8956916310','sandythakare111@gmail.com','Away','2020-05-08 11:34:15','2020-05-08 11:34:15'),('b391f256-dad6-472e-bee3-e3d64386697c','cabuser','Cabuser@123','Cab','User','Nagpur','Nagpur','MH','INDIA','8956916391','cabuser@gmail.com','Away','2020-05-07 19:58:36','2020-05-07 19:58:36'),('b6cdde6b-e9da-4414-9b2d-309058c6d139','sandeepthakare0103','S@ndeep123','Sandeep','Thakare','Nagpur','Nagpur','MH','INDIA','8956916399','sandythakare1@gmail.com','Away','2020-05-08 14:17:59','2020-05-08 14:17:59'),('d241b20a-157b-4ccb-b76f-24c5d5443749','sandeepthakare','S@ndeep123','Sandeep','Thakare','Nagpur','Nagpur','MH','INDIA','8956916390','sandythakare9@gmail.com','Away','2020-05-07 19:58:48','2020-05-07 19:58:48');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
