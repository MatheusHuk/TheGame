-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 09-Jan-2019 às 02:41
-- Versão do servidor: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `maze`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogador`
--

CREATE TABLE `jogador` (
  `email` varchar(50) NOT NULL,
  `senha` varchar(30) NOT NULL,
  `nick` varchar(15) NOT NULL,
  `vidas` int(11) NOT NULL,
  `inv1` varchar(15) NOT NULL,
  `inv2` varchar(15) NOT NULL,
  `inv3` varchar(15) NOT NULL,
  `inv4` varchar(15) NOT NULL,
  `inv5` varchar(15) NOT NULL,
  `inv6` varchar(15) NOT NULL,
  `inv7` varchar(15) NOT NULL,
  `inv8` varchar(15) NOT NULL,
  `inv9` varchar(15) NOT NULL,
  `inv10` varchar(15) NOT NULL,
  `conti0` int(11) NOT NULL,
  `conti1` int(11) NOT NULL,
  `conti2` int(11) NOT NULL,
  `conti3` int(11) NOT NULL,
  `conti4` int(11) NOT NULL,
  `paises0` int(11) NOT NULL,
  `paises1` int(11) NOT NULL,
  `paises2` int(11) NOT NULL,
  `paises3` int(11) NOT NULL,
  `paises4` int(11) NOT NULL,
  `paises5` int(11) NOT NULL,
  `paises6` int(11) NOT NULL,
  `paises7` int(11) NOT NULL,
  `paises8` int(11) NOT NULL,
  `paises9` int(11) NOT NULL,
  `paises10` int(11) NOT NULL,
  `paises11` int(11) NOT NULL,
  `paises12` int(11) NOT NULL,
  `paises13` int(11) NOT NULL,
  `paises14` int(11) NOT NULL,
  `paises15` int(11) NOT NULL,
  `paises16` int(11) NOT NULL,
  `paises17` int(11) NOT NULL,
  `paises18` int(11) NOT NULL,
  `paises19` int(11) NOT NULL,
  `paises20` int(11) NOT NULL,
  `paises21` int(11) NOT NULL,
  `paises22` int(11) NOT NULL,
  `paises23` int(11) NOT NULL,
  `paises24` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `jogador`
--

INSERT INTO `jogador` (`email`, `senha`, `nick`, `vidas`, `inv1`, `inv2`, `inv3`, `inv4`, `inv5`, `inv6`, `inv7`, `inv8`, `inv9`, `inv10`, `conti0`, `conti1`, `conti2`, `conti3`, `conti4`, `paises0`, `paises1`, `paises2`, `paises3`, `paises4`, `paises5`, `paises6`, `paises7`, `paises8`, `paises9`, `paises10`, `paises11`, `paises12`, `paises13`, `paises14`, `paises15`, `paises16`, `paises17`, `paises18`, `paises19`, `paises20`, `paises21`, `paises22`, `paises23`, `paises24`) VALUES
('matheushukmoreschi@gmail.com', 'matheus2014', 'Raposo490', 7, '', '', '', '', '', '', '', '', '', '', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
