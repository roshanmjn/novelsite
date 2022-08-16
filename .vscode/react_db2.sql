-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 11, 2022 at 08:57 PM
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
(39, 'The Declaration of Independence of the United States of America', 'United States -- History -- Revolution, 1775-1783 -- Sources,United States. Declaration of Independ', 'Jefferson, Thomas', 0, 'https://www.gutenberg.org/ebooks/1.txt.utf-8', 'hiatus', 0, '2022-05-11 23:53:35', '', 'https://www.gutenberg.org/cache/epub/1/pg1.cover.small.jpg'),
(40, 'The United States Bill of Rights: The Ten Original Amendments to the Constitution of the United Sta', 'Civil rights -- United States -- Sources,United States. Constitution. 1st-10th Amendments', 'United States', 0, 'https://www.gutenberg.org/ebooks/2.txt.utf-8', 'ongoing', 0, '2022-05-11 23:53:35', '', 'https://www.gutenberg.org/cache/epub/2/pg2.cover.small.jpg'),
(41, 'John F. Kennedy\'s Inaugural Address', 'Presidents -- United States -- Inaugural addresses,United States -- Foreign relations -- 1961-1963', 'Kennedy, John F. (John Fitzgerald)', 0, 'https://www.gutenberg.org/ebooks/3.txt.utf-8', 'ongoing', 0, '2022-05-11 23:53:36', '', 'https://www.gutenberg.org/cache/epub/3/pg3.cover.medium.jpg'),
(42, 'Lincoln\'s Gettysburg Address: Given November 19, 1863 on the battlefield near Gettysburg, Pennsylva', 'Consecration of cemeteries -- Pennsylvania -- Gettysburg,Lincoln, Abraham, 1809-1865. Gettysburg ad', 'Lincoln, Abraham', 0, 'https://www.gutenberg.org/ebooks/4.txt.utf-8', 'hiatus', 0, '2022-05-11 23:53:37', '', 'https://www.gutenberg.org/cache/epub/4/pg4.cover.medium.jpg'),
(43, 'The United States Constitution', 'United States -- Politics and government -- 1783-1789 -- Sources,United States. Constitution', 'United States', 0, 'https://www.gutenberg.org/ebooks/5.txt.utf-8', 'hiatus', 0, '2022-05-11 23:53:38', '', 'https://www.gutenberg.org/cache/epub/5/pg5.cover.small.jpg'),
(44, 'Give Me Liberty or Give Me Death', 'Speeches, addresses, etc., American,United States -- Politics and government -- 1775-1783 -- Source', 'Henry, Patrick', 0, 'https://www.gutenberg.org/ebooks/6.txt.utf-8', 'completed', 0, '2022-05-11 23:53:39', '', 'https://www.gutenberg.org/cache/epub/6/pg6.cover.small.jpg'),
(45, 'The Mayflower Compact', 'Massachusetts -- History -- New Plymouth, 1620-1691 -- Sources,Mayflower Compact (1620),Pilgrims (N', 'Unnamed', 0, 'https://www.gutenberg.org/ebooks/7.txt.utf-8', 'ongoing', 0, '2022-05-11 23:53:40', '', 'https://www.gutenberg.org/cache/epub/7/pg7.cover.small.jpg'),
(46, 'Abraham Lincoln\'s Second Inaugural Address', 'Presidents -- United States -- Inaugural addresses,United States -- Politics and government -- 1861', 'Lincoln, Abraham', 0, 'https://www.gutenberg.org/ebooks/8.txt.utf-8', 'completed', 0, '2022-05-11 23:53:41', '', 'https://www.gutenberg.org/cache/epub/8/pg8.cover.medium.jpg'),
(47, 'Abraham Lincoln\'s First Inaugural Address', 'Presidents -- United States -- Inaugural addresses,United States -- Politics and government -- 1861', 'Lincoln, Abraham', 0, 'https://www.gutenberg.org/ebooks/9.txt.utf-8', 'hiatus', 0, '2022-05-11 23:53:42', '', 'https://www.gutenberg.org/cache/epub/9/pg9.cover.small.jpg'),
(48, 'The King James Version of the Bible', 'Bible', 'Unnamed', 0, 'https://www.gutenberg.org/ebooks/10.txt.utf-8', 'completed', 0, '2022-05-11 23:53:43', '', 'https://www.gutenberg.org/cache/epub/10/pg10.cover.medium.jpg'),
(51, 'Alice\'s Adventures in Wonderland', 'Alice (Fictitious character from Carroll) -- Juvenile fiction,Children\'s stories,Fantasy fiction,Im', 'Carroll, Lewis', 0, 'https://www.gutenberg.org/files/11/11-0.txt', 'ongoing', 0, '2022-05-12 00:06:55', '', 'https://www.gutenberg.org/cache/epub/11/pg11.cover.small.jpg'),
(52, 'Through the Looking-Glass', 'Alice (Fictitious character from Carroll) -- Juvenile fiction,Children\'s stories,Fantasy fiction,Im', 'Carroll, Lewis', 0, 'https://www.gutenberg.org/files/12/12-0.txt', 'hiatus', 0, '2022-05-12 00:06:56', '', 'https://www.gutenberg.org/cache/epub/12/pg12.cover.small.jpg'),
(53, 'The Hunting of the Snark: An Agony in Eight Fits', 'Nonsense verses, English', 'Carroll, Lewis', 0, 'https://www.gutenberg.org/ebooks/13.txt.utf-8', 'completed', 0, '2022-05-12 00:06:57', '', 'https://www.gutenberg.org/cache/epub/13/pg13.cover.medium.jpg'),
(54, 'The 1990 CIA World Factbook', 'Geography -- Handbooks, manuals, etc.,Political science -- Handbooks, manuals, etc.,Political stati', 'United States. Central Intelligence Agency', 0, 'https://www.gutenberg.org/ebooks/14.txt.utf-8', 'hiatus', 0, '2022-05-12 00:06:58', '', 'https://www.gutenberg.org/cache/epub/14/pg14.cover.small.jpg'),
(55, 'Moby-Dick; or, The Whale', 'Adventure stories,Ahab, Captain (Fictitious character) -- Fiction,Mentally ill -- Fiction,Psycholog', 'Melville, Herman', 0, 'https://www.gutenberg.org/files/15/15-0.txt', 'completed', 0, '2022-05-12 00:06:59', '', 'https://www.gutenberg.org/cache/epub/15/pg15.cover.medium.jpg'),
(56, 'Peter Pan', 'Fairies -- Fiction,Fantasy literature,Never-Never Land (Imaginary place) -- Fiction,Peter Pan (Fict', 'Barrie, J. M. (James Matthew)', 0, 'https://www.gutenberg.org/files/16/16-0.txt', 'ongoing', 0, '2022-05-12 00:07:00', '', 'https://www.gutenberg.org/cache/epub/16/pg16.cover.medium.jpg'),
(57, 'The Book of Mormon: An Account Written by the Hand of Mormon, Upon Plates Taken from the Plates of ', 'Church of Jesus Christ of Latter-day Saints -- Sacred books,Mormon Church -- Sacred books', 'Church of Jesus Christ of Latter-day Saints', 0, 'https://www.gutenberg.org/files/17/17-0.zip', 'completed', 0, '2022-05-12 00:07:01', '', 'https://www.gutenberg.org/cache/epub/17/pg17.cover.medium.jpg'),
(58, 'The Federalist Papers', 'Constitutional history -- United States -- Sources,Constitutional law -- United States', 'Madison, James', 0, 'https://www.gutenberg.org/files/18/18-0.txt', 'completed', 0, '2022-05-12 00:07:02', '', 'https://www.gutenberg.org/cache/epub/18/pg18.cover.medium.jpg'),
(59, 'The Song of Hiawatha', 'Hiawatha, active 15th century -- Poetry,Indians of North America -- Poetry,Iroquois Indians -- King', 'Longfellow, Henry Wadsworth', 0, 'https://www.gutenberg.org/files/19/19-0.txt', 'ongoing', 0, '2022-05-12 00:07:03', '', 'https://www.gutenberg.org/cache/epub/19/pg19.cover.medium.jpg'),
(60, 'Paradise Lost', 'Adam (Biblical figure) -- Poetry,Bible. Genesis -- History of Biblical events -- Poetry,Eve (Biblic', 'Milton, John', 0, 'https://www.gutenberg.org/files/20/20-0.txt', 'completed', 0, '2022-05-12 00:07:04', '', 'https://www.gutenberg.org/cache/epub/20/pg20.cover.small.jpg'),
(61, 'Aesop\'s Fables: Translated by George Fyler Townsend', 'Aesop\'s fables -- Translations into English,Fables, Greek -- Translations into English', 'Aesop', 0, 'https://www.gutenberg.org/ebooks/21.txt.utf-8', 'hiatus', 0, '2022-05-12 00:07:20', '', 'https://www.gutenberg.org/cache/epub/21/pg21.cover.small.jpg'),
(62, 'Roget\'s Thesaurus', 'English language -- Synonyms and antonyms', 'Roget, Peter Mark', 0, 'https://www.gutenberg.org/ebooks/22.txt.utf-8', 'hiatus', 0, '2022-05-12 00:07:21', '', 'https://www.gutenberg.org/cache/epub/22/pg22.cover.small.jpg'),
(63, 'Narrative of the Life of Frederick Douglass, an American Slave', 'Abolitionists -- United States -- Biography,African American abolitionists -- Biography,Douglass, F', 'Douglass, Frederick', 0, 'https://www.gutenberg.org/files/23/23-0.zip', 'completed', 0, '2022-05-12 00:07:22', '', 'https://www.gutenberg.org/cache/epub/23/pg23.cover.medium.jpg'),
(64, 'O Pioneers!', 'Brothers and sisters -- Fiction,Domestic fiction,Farm life -- Fiction,Frontier and pioneer life -- ', 'Cather, Willa', 0, 'https://www.gutenberg.org/files/24/24-0.zip', 'hiatus', 0, '2022-05-12 00:07:23', '', 'https://www.gutenberg.org/cache/epub/24/pg24.cover.medium.jpg'),
(65, 'The 1991 CIA World Factbook', 'Geography -- Handbooks, manuals, etc.,Political science -- Handbooks, manuals, etc.,Political stati', 'United States. Central Intelligence Agency', 0, 'https://www.gutenberg.org/ebooks/25.txt.utf-8', 'ongoing', 0, '2022-05-12 00:07:24', '', 'https://www.gutenberg.org/cache/epub/25/pg25.cover.small.jpg'),
(66, 'Paradise Lost', 'Adam (Biblical figure) -- Poetry,Bible. Genesis -- History of Biblical events -- Poetry,Eve (Biblic', 'Milton, John', 0, 'https://www.gutenberg.org/ebooks/26.txt.utf-8', 'completed', 0, '2022-05-12 00:07:25', '', 'https://www.gutenberg.org/cache/epub/26/pg26.cover.medium.jpg'),
(67, 'Far from the Madding Crowd', 'Didactic fiction,Farm life -- Fiction,Love stories,Pastoral fiction,Triangles (Interpersonal relati', 'Hardy, Thomas', 0, 'https://www.gutenberg.org/files/27/27-0.txt', 'ongoing', 0, '2022-05-12 00:07:26', '', 'https://www.gutenberg.org/cache/epub/27/pg27.cover.small.jpg'),
(68, 'The Fables of Aesop: Selected, Told Anew, and Their History Traced', 'Aesop\'s fables -- Adaptations,Fables, Greek -- Adaptations', 'Aesop', 0, 'https://www.gutenberg.org/ebooks/28.txt.utf-8', 'completed', 0, '2022-05-12 00:07:27', '', 'https://www.gutenberg.org/cache/epub/28/pg28.cover.medium.jpg'),
(69, 'The 1990 United States Census', 'Housing -- United States -- Statistics,United States -- Census,United States -- Population -- Stati', 'United States. Bureau of the Census', 0, 'https://www.gutenberg.org/ebooks/29.txt.utf-8', 'completed', 0, '2022-05-12 00:07:28', '', 'https://www.gutenberg.org/cache/epub/29/pg29.cover.small.jpg'),
(70, 'The Bible, King James Version, Complete', 'Bible', 'Unnamed', 0, 'https://www.gutenberg.org/ebooks/30.txt.utf-8', 'completed', 0, '2022-05-12 00:07:29', '', 'https://www.gutenberg.org/cache/epub/30/pg30.cover.small.jpg'),
(71, 'Plays of Sophocles: Oedipus the King; Oedipus at Colonus; Antigone', 'Antigone (Mythological character) -- Drama,Greek drama (Tragedy) -- Translations into English,Oedip', 'Sophocles', 0, 'https://www.gutenberg.org/ebooks/31.txt.utf-8', 'hiatus', 0, '2022-05-12 00:07:30', '', 'https://www.gutenberg.org/cache/epub/31/pg31.cover.small.jpg'),
(72, 'Herland', 'Black humor,Utopian fiction,Utopias -- Fiction,Women -- Fiction', 'Gilman, Charlotte Perkins', 0, 'https://www.gutenberg.org/ebooks/32.txt.utf-8', 'hiatus', 0, '2022-05-12 00:07:31', '', 'https://www.gutenberg.org/cache/epub/32/pg32.cover.medium.jpg'),
(73, 'The Scarlet Letter', 'Adultery -- Fiction,Boston (Mass.) -- History -- Colonial period, ca. 1600-1775 -- Fiction,Clergy -', 'Hawthorne, Nathaniel', 0, 'https://www.gutenberg.org/ebooks/33.txt.utf-8', 'hiatus', 0, '2022-05-12 00:07:32', '', 'https://www.gutenberg.org/cache/epub/33/pg33.cover.medium.jpg'),
(74, 'Zen and the Art of the Internet', 'Computer networks,Information networks,Information retrieval,Internet', 'Kehoe, Brendan P.', 0, 'https://www.gutenberg.org/ebooks/34.txt.utf-8', 'hiatus', 0, '2022-05-12 00:07:33', '', 'https://www.gutenberg.org/cache/epub/34/pg34.cover.medium.jpg'),
(75, 'The Time Machine', 'Dystopias -- Fiction,Science fiction,Time travel -- Fiction', 'Wells, H. G. (Herbert George)', 0, 'https://www.gutenberg.org/files/35/35-0.txt', 'completed', 0, '2022-05-12 00:07:34', '', 'https://www.gutenberg.org/cache/epub/35/pg35.cover.medium.jpg'),
(76, 'The War of the Worlds', 'Imaginary wars and battles -- Fiction,Life on other planets -- Fiction,Mars (Planet) -- Fiction,Mar', 'Wells, H. G. (Herbert George)', 0, 'https://www.gutenberg.org/ebooks/36.txt.utf-8', 'completed', 0, '2022-05-12 00:07:35', '', 'https://www.gutenberg.org/cache/epub/36/pg36.cover.medium.jpg'),
(77, 'The 1990 United States Census [2nd]', 'Housing -- United States -- Statistics,United States -- Census,United States -- Population -- Stati', 'United States. Bureau of the Census', 0, 'https://www.gutenberg.org/ebooks/37.txt.utf-8', 'completed', 0, '2022-05-12 00:07:36', '', 'https://www.gutenberg.org/cache/epub/37/pg37.cover.small.jpg'),
(78, 'The Jargon File, Version 2.9.10, 01 Jul 1992', 'Computers -- Humor,Computers -- Slang -- Dictionaries,Electronic data processing -- Terminology -- ', 'Unnamed', 0, 'https://www.gutenberg.org/ebooks/38.txt.utf-8', 'ongoing', 0, '2022-05-12 00:07:37', '', 'https://www.gutenberg.org/cache/epub/38/pg38.cover.small.jpg'),
(79, 'Hitchhiker\'s Guide to the Internet', 'Computer networks,Internet', 'Krol, Ed', 0, 'https://www.gutenberg.org/ebooks/39.txt.utf-8', 'completed', 0, '2022-05-12 00:07:38', '', 'https://www.gutenberg.org/cache/epub/39/pg39.cover.medium.jpg'),
(80, 'The Legend of Sleepy Hollow', 'Ghosts -- Fiction,New York (State) -- History -- 1775-1865 -- Fiction', 'Irving, Washington', 0, 'https://www.gutenberg.org/files/41/41-0.txt', 'hiatus', 0, '2022-05-12 00:08:13', '', 'https://www.gutenberg.org/cache/epub/41/pg41.cover.small.jpg'),
(81, 'The Strange Case of Dr. Jekyll and Mr. Hyde', 'Horror tales,London (England) -- Fiction,Multiple personality -- Fiction,Physicians -- Fiction,Psyc', 'Stevenson, Robert Louis', 0, 'https://www.gutenberg.org/ebooks/42.txt.utf-8', 'ongoing', 0, '2022-05-12 00:08:14', '', 'https://www.gutenberg.org/cache/epub/42/pg42.cover.medium.jpg'),
(82, 'The Strange Case of Dr. Jekyll and Mr. Hyde', 'Horror tales,London (England) -- Fiction,Multiple personality -- Fiction,Physicians -- Fiction,Psyc', 'Stevenson, Robert Louis', 0, 'https://www.gutenberg.org/files/43/43-0.zip', 'hiatus', 0, '2022-05-12 00:08:15', '', 'https://www.gutenberg.org/cache/epub/43/pg43.cover.small.jpg'),
(83, 'The Song of the Lark', 'Bildungsromans,Chicago (Ill.) -- Fiction,Children of clergy -- Fiction,Colorado -- Fiction,Musical ', 'Cather, Willa', 0, 'https://www.gutenberg.org/ebooks/44.txt.utf-8', 'completed', 0, '2022-05-12 00:08:16', '', 'https://www.gutenberg.org/cache/epub/44/pg44.cover.medium.jpg'),
(84, 'Anne of Green Gables', 'Bildungsromans,Canada -- History -- 1867-1914 -- Fiction,Country life -- Prince Edward Island -- Fi', 'Montgomery, L. M. (Lucy Maud)', 0, 'https://www.gutenberg.org/ebooks/45.txt.utf-8', 'ongoing', 0, '2022-05-12 00:08:17', '', 'https://www.gutenberg.org/cache/epub/45/pg45.cover.small.jpg'),
(85, 'A Christmas Carol in Prose; Being a Ghost Story of Christmas', 'Christmas stories,Ghost stories,London (England) -- Fiction,Misers -- Fiction,Poor families -- Fict', 'Dickens, Charles', 0, 'https://www.gutenberg.org/ebooks/46.txt.utf-8', 'completed', 0, '2022-05-12 00:08:18', '', 'https://www.gutenberg.org/cache/epub/46/pg46.cover.small.jpg'),
(86, 'Anne of Avonlea', 'Canada -- History -- 1914-1945 -- Fiction,Islands -- Fiction,Orphans -- Fiction,Prince Edward Islan', 'Montgomery, L. M. (Lucy Maud)', 0, 'https://www.gutenberg.org/ebooks/47.txt.utf-8', 'hiatus', 0, '2022-05-12 00:08:19', '', 'https://www.gutenberg.org/cache/epub/47/pg47.cover.medium.jpg'),
(87, 'The 1992 CIA World Factbook', 'Geography -- Handbooks, manuals, etc.,Political science -- Handbooks, manuals, etc.,Political stati', 'United States. Central Intelligence Agency', 0, 'https://www.gutenberg.org/ebooks/48.txt.utf-8', 'hiatus', 0, '2022-05-12 00:08:20', '', 'https://www.gutenberg.org/cache/epub/48/pg48.cover.medium.jpg'),
(88, 'Surfing the Internet: An Introduction: Version 2.0.2', 'Computer network resources -- Directories,Electronic mail systems -- Directories,Internet addresses', 'Polly, Jean Armour', 0, 'https://www.gutenberg.org/ebooks/49.txt.utf-8', 'completed', 0, '2022-05-12 00:08:21', '', 'https://www.gutenberg.org/cache/epub/49/pg49.cover.small.jpg');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

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
