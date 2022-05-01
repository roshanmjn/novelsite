-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 01, 2022 at 10:03 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(99) NOT NULL,
  `name` varchar(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `admin` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `username`, `email`, `password`, `admin`) VALUES
(1, 'temper holic', 'temper666', 'temper@gmail.com', 'qwerty6', 1),
(2, 'temper holic', 'temper66666', 'temper@gmail.com', 'qwerty6', 1),
(3, 'temper holic', 'temper6666', 'temper@gmail.com', 'qwerty6', 1),
(4, 'zero', 'zer0', 'zer0shan@gmail.com', 'zer0000', 0),
(5, 'zero', 'zer99', 'zer05shan@gmail.com', 'zer999', 1),
(6, 'zero6', 'zer99', 'zer06shan@gmail.com', 'zer999', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_announcements`
--

CREATE TABLE `tbl_announcements` (
  `id` int(11) NOT NULL,
  `Title` varchar(150) NOT NULL,
  `description` varchar(2048) NOT NULL,
  `created_date` varchar(50) NOT NULL,
  `created_by` varchar(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_announcements`
--

INSERT INTO `tbl_announcements` (`id`, `Title`, `description`, `created_date`, `created_by`) VALUES
(1, 'A Frozen Player Returns, and a Player Who Can\'t Level Up!', 'Hi everyone, continuing with our series of rapid releases, we have two more Korean titles that are ready to be released, starting off with thirty chapters each!  By coincidence, both of the MC\'s are... players.  The next batch shall be Chinese series, so for those who are waiting for that, more news will be coming soon!', '\'2022-04-28 02:28:50\'', 'temper666'),
(2, 'Player Who Can\'t Level Up: ', 'Gi-Gyu is an upstanding young man who had been suffering from near-poverty due to unfortunate family situations. Even from a very young age, he worked multiple jobs to support his young sister and his ill mother.', '\'2022-04-28 02:33:20\'', 'temper666');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_genre`
--

CREATE TABLE `tbl_genre` (
  `id` int(11) NOT NULL,
  `title` varchar(99) NOT NULL,
  `description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_genre`
--

INSERT INTO `tbl_genre` (`id`, `title`, `description`) VALUES
(1, 'Action', 'Action genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats.'),
(2, 'Comedy', 'Comedy is a genre of fiction that consists of discourses or works intended to be humorous or amusing by inducing laughter, especially in theatre.'),
(3, 'Fantasy', 'Fantasy is a genre of speculative fiction involving magical elements, typically set in a fictional universe and sometimes inspired by mythology and folklore. Its roots are in oral traditions, which then became fantasy literature and drama.'),
(4, 'Mystery', 'Mystery is a fiction genre where the nature of an event, usually a murder or other crime, remains mysterious until the end of the story. Often within a closed circle of suspects, each suspect is usually provided with a credible motive and a reasonable opportunity for committing the crime.'),
(5, 'Romance', 'A romance novel or romantic novel generally refers to a type of genre fiction novel which places its primary focus on the relationship and romantic love between two people, and usually has an \"emotionally satisfying and optimistic ending'),
(6, 'Sci-fi', 'Science fiction is a genre of speculative fiction which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life. '),
(7, 'Wuxia', 'Wuxia, which literally means \"martial heroes\", is a genre of Chinese fiction concerning the adventures of martial artists in ancient China'),
(8, 'Xianxia', 'Xianxia, more broadly known as \"Cultivation\", is a genre of Chinese fantasy influenced by Chinese mythology, Taoism, Buddhism, Chinese martial arts, traditional Chinese medicine, Chinese folk religion, Chinese alchemy and other traditional Chinese elements.');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_novel`
--

CREATE TABLE `tbl_novel` (
  `id` int(11) NOT NULL,
  `name` varchar(99) NOT NULL,
  `genre` varchar(99) NOT NULL,
  `author` varchar(50) NOT NULL,
  `chapters` int(30) NOT NULL,
  `description` varchar(200) NOT NULL,
  `status` varchar(20) NOT NULL,
  `rating` int(10) NOT NULL,
  `start_date` varchar(50) NOT NULL,
  `end_date` varchar(50) NOT NULL,
  `image` varchar(2048) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_novel`
--

INSERT INTO `tbl_novel` (`id`, `name`, `genre`, `author`, `chapters`, `description`, `status`, `rating`, `start_date`, `end_date`, `image`) VALUES
(1, 'Fields of Old', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'ongoing', 63, '2022-04-01', '2022-04-30', ''),
(2, 'Fields of Gold', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'ongoing', 69, '2022-04-01', '2022-04-30', ''),
(4, 'Fields of Gold', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'ongoing', 69, '2022-03-31', '0000-00-00', ''),
(6, 'Fields of Gold', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'ongoing', 69, '2022-03-31', '0000-00-00', ''),
(8, 'Fields of Gold', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'completed', 69, '2022-03-31', '0000-00-00', ''),
(9, 'Fields of Gold', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'completed', 69, '2022-03-31', '0000-00-00', ''),
(13, 'Fields of Gold', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'ongoing', 69, '2022-03-31', '0000-00-00', ''),
(14, 'Fields of Gold', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'completed', 69, '2022-03-31', '0000-00-00', ''),
(15, 'Fields of Gold', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'ongoing', 69, '2022-03-31', '0000-00-00', ''),
(16, 'Fields of Trollz', 'Fantasy, Comedy', 'Zankyo', 181, 'A simple day to day novel.', 'ongoing', 69, '2022-03-31', '0000-00-00', ''),
(17, 'Temple Bandits', 'Thriller', 'Elaine', 181, 'Exciting story on a lonely man way.', 'completed', 49, '2022-03-31', '0000-00-00', 'C:\\fakepath\\novelz-r.png'),
(18, 'Fields of Gold', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'completed', 35, '2022-03-31', '0000-00-00', ''),
(19, 'Fields of Gold', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'hiatus', 69, '2022-03-31', '0000-00-00', ''),
(20, 'Fields of Gold', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'completed', 51, '2022-03-31', '0000-00-00', ''),
(21, 'Fields of Gold', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'ongoing', 69, '2022-03-31', '0000-00-00', ''),
(22, 'Fields of Gold', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'ongoing', 69, '2022-03-31', '0000-00-00', ''),
(23, 'Fields of Gold', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'ongoing', 69, '2022-03-31', '0000-00-00', ''),
(24, 'Fields of Gold', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'completed', 57, '2022-03-31', '0000-00-00', ''),
(25, 'Fields of Gold', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'hiatus', 69, '2022-03-31', '0000-00-00', ''),
(26, 'Fields of Gold', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'hiatus', 81, '2022-03-31', '0000-00-00', ''),
(27, 'Fields of Gold', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'hiatus', 69, '2022-03-31', '0000-00-00', ''),
(28, 'Fields of Gold', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'completed', 69, '2022-03-31', '0000-00-00', ''),
(29, 'Fields of Gold', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'completed', 77, '2022-03-31', '0000-00-00', ''),
(30, 'Fields of Gold', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'completed', 69, '2022-03-31', '0000-00-00', ''),
(31, 'Fields of Gold', 'Fantasy, Cooking', 'Elaine', 666, 'A simple day to day novel.', 'hiatus', 69, '2022-03-31', '0000-00-00', ''),
(32, 'Fields of Trollz', 'Fantasy, Comedy', 'Zankyo', 181, 'A simple day to day novel.', 'ongoing', 99, '2022-03-31 18:15:00', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_novel_read_count`
--

CREATE TABLE `tbl_novel_read_count` (
  `id` int(11) NOT NULL,
  `name` int(11) NOT NULL,
  `times_read` int(99) NOT NULL,
  `rating` tinyint(5) NOT NULL,
  `author` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_recent_novel_update`
--

CREATE TABLE `tbl_recent_novel_update` (
  `id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `chapter_number` int(99) NOT NULL,
  `chapter_title` varchar(80) NOT NULL,
  `author` varchar(80) NOT NULL,
  `updated_on` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id` int(99) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(60) NOT NULL,
  `full_name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `address` varchar(50) NOT NULL,
  `novel_works` int(11) NOT NULL,
  `novels_reading` varchar(3000) NOT NULL,
  `created_on` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `username`, `password`, `full_name`, `email`, `gender`, `address`, `novel_works`, `novels_reading`, `created_on`) VALUES
(35, 'rm99', 'asdf1234', 'Roshan Maharjan', 'rm@gmail.com', 'male', 'Nepal', 0, '', '\"2022-4-27 17:43:15\"'),
(37, 'rs69', 'rssr6996', 'Random Stranger', 'rs69@mail.com', 'female', 'Nowhere', 0, '', '\"2022-4-27 17:43:15\"'),
(38, 'ram123', 'ram123', 'ram', 'ram@gmail.com', 'male', 'srilanka', 0, '', '\"2022-4-27 17:43:15\"'),
(42, 'asd', 'asd', 'asd', 'asd', 'male', 'asd', 0, '', '\"2022-4-27 17:43:15\"'),
(43, 'temper123', '$2b$10$WD4kD5LvFgq3jsqXfKOqUew8eq7lwoCCkzX4kMDjk.SUv3P/eQW0q', '', '', '', '', 0, '', '2022-04-29 05:44:45'),
(44, 'temper123', '$2b$10$1hBtoPURi3vVy7hY7PvzBOJ01ohR0NZB02Fhhxac.bR9uPs0JZHSm', '', '', '', '', 0, '', '2022-04-29 05:45:11'),
(45, 'temper123', '$2b$10$/XpivG9WCQTgDga7SN8QauLaV80HoY6gXGP6NgluKz9t4nVdkqy62', '', '', '', '', 0, '', '2022-04-29 05:48:30'),
(46, 'temper123', '$2b$10$01niWax5JgacT8s.gumL4OvGjE9NkyKfbzHmOnKXJ.p0GmY2hJaQi', '', '', '', '', 0, '', '2022-04-29 05:48:36'),
(47, 'temper123', '$2b$10$G49dWXBSfIguRLHY0zTZGeIxtmUzkczM4miEqNJkoLrajdJ2roIdi', '', '', '', '', 0, '', '2022-04-29 05:49:33'),
(48, 'temper123', '$2b$10$TUXsa44Mqs3ftho3cEQTzu3dJ3mH7jjy6gRdV8Zwa59sDD5aR8OSu', '', '', '', '', 0, '', '2022-04-29 06:09:01'),
(49, 'temper123', 'test123', '', '', '', '', 0, '', '2022-05-01 00:29:43'),
(50, 'temper123', 'test1234', '', '', '', '', 0, '', '2022-05-01 00:33:05'),
(51, 'test123', 'test123', '', '', '', '', 0, '', '2022-05-01 00:49:33');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_log`
--

CREATE TABLE `tbl_user_log` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `currently_reading` int(11) NOT NULL,
  `chapter_number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_announcements`
--
ALTER TABLE `tbl_announcements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_genre`
--
ALTER TABLE `tbl_genre`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_novel`
--
ALTER TABLE `tbl_novel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_recent_novel_update`
--
ALTER TABLE `tbl_recent_novel_update`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(99) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_announcements`
--
ALTER TABLE `tbl_announcements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_genre`
--
ALTER TABLE `tbl_genre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_novel`
--
ALTER TABLE `tbl_novel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `tbl_recent_novel_update`
--
ALTER TABLE `tbl_recent_novel_update`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(99) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
