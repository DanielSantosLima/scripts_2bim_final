-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dados212n
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contapagar`
--

DROP TABLE IF EXISTS `contapagar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contapagar` (
  `tpg_codigo` int NOT NULL AUTO_INCREMENT,
  `tpg_descricao` varchar(20) DEFAULT NULL,
  `tpg_tipo` varchar(10) DEFAULT NULL,
  `tpg_valor` decimal(12,2) DEFAULT NULL,
  `tpg_vencimento` varchar(50) DEFAULT NULL,
  `emp_codigo` int DEFAULT NULL,
  PRIMARY KEY (`tpg_codigo`),
  KEY `fk_empresa` (`emp_codigo`),
  CONSTRAINT `fk_empresa` FOREIGN KEY (`emp_codigo`) REFERENCES `empresa` (`emp_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contapagar`
--

LOCK TABLES `contapagar` WRITE;
/*!40000 ALTER TABLE `contapagar` DISABLE KEYS */;
INSERT INTO `contapagar` VALUES (7,'ICMS','Impostos',1500.00,'15/12/2021',1),(8,'Insumos','Insumos',35000.00,'24/12/2021',2),(9,'Cozinha','Alimentar',22500.00,'31/12/2021',3),(10,'Nova','Nova',1500.00,'25/12/2021',NULL),(11,'Nova1','Nova1',1500.00,'25/12/2021',2),(12,'Nova1','Nova1',1500.00,'25/12/2021',NULL),(13,'Nova1','Nova1',1500.00,'25/12/2021',NULL);
/*!40000 ALTER TABLE `contapagar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresa` (
  `emp_codigo` int NOT NULL AUTO_INCREMENT,
  `emp_nome` varchar(30) DEFAULT NULL,
  `emp_fantasia` varchar(15) DEFAULT NULL,
  `emp_telefone` varchar(15) DEFAULT NULL,
  `emp_funcacao` int DEFAULT NULL,
  PRIMARY KEY (`emp_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (1,'Editada','Editada','Editado',1444),(2,'Empresa 2','Nome Fantasia 2','telefone 2',2000),(3,'Empresa 3','Nome Fantasia 3','telefone 3',1969),(4,'Nova','Nova','Nova',9999);
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-03 19:52:53
