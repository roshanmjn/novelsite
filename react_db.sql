-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 14, 2022 at 02:08 PM
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
(6, 'zero6', 'admin', 'zer06shan@gmail.com', 'admin123', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_announcements`
--

CREATE TABLE `tbl_announcements` (
  `id` int(99) NOT NULL,
  `Title` varchar(150) NOT NULL,
  `description` varchar(2048) NOT NULL,
  `created_date` varchar(50) NOT NULL,
  `created_by` int(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_announcements`
--

INSERT INTO `tbl_announcements` (`id`, `Title`, `description`, `created_date`, `created_by`) VALUES
(1, 'A Frozen Player Returns, and a Player Who Can\'t Level Up!', 'Hi everyone, continuing with our series of rapid releases, we have two more Korean titles that are ready to be released, starting off with thirty chapters each!  By coincidence, both of the MC\'s are... players.  The next batch shall be Chinese series, so for those who are waiting for that, more news will be coming soon!Hi everyone, continuing with our series of rapid releases, we have two more Korean titles that are ready to be released, starting off with thirty chapters each!  By coincidence, both of the MC\'s are... players.  The next batch shall be Chinese series, so for those who are waiting for that, more news will be coming soon!Hi everyone, continuing with our series of rapid releases, we have two more Korean titles that are ready to be released, starting off with thirty chapters each!  By coincidence, both of the MC\'s are... players.  The next batch shall be Chinese series, so for those who are waiting for that, more news will be coming soon!Hi everyone, continuing with our series of rapid releases, we have two more Korean titles that are ready to be released, starting off with thirty chapters each!  By coincidence, both of the MC\'s are... players.  The next batch shall be Chinese series, so for those who are waiting for that, more news will be coming soon!Hi everyone, continuing with our series of rapid releases, we have two more Korean titles that are ready to be released, starting off with thirty chapters each!  By coincidence, both of the MC\'s are... players.  The next batch shall be Chinese series, so for those who are waiting for that, more news will be coming soon!Hi everyone, continuing with our series of rapid releases, we have two more Korean titles that are ready to be released, starting off with thirty chapters each!  By coincidence, both of the MC\'s are... players.  The next batch shall be Chinese series, so for those who are waiting for that, more news will be coming soon!', '\'2022-04-28 02:28:50\'', 1),
(2, 'Player Who Can\'t Level Up: ', 'Gi-Gyu is an upstanding young man who had been suffering from near-poverty due to unfortunate family situations. Even from a very young age, he worked multiple jobs to support his young sister and his ill mother.', '\'2022-04-28 02:33:20\'', 6);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_genre`
--

CREATE TABLE `tbl_genre` (
  `id` int(11) NOT NULL,
  `title` varchar(99) NOT NULL,
  `description` varchar(500) NOT NULL,
  `status` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_genre`
--

INSERT INTO `tbl_genre` (`id`, `title`, `description`, `status`) VALUES
(1, 'Action', '', 1),
(2, 'Comedy', 'Comedy is a genre of fiction that consists of discourses or works intended to be humorous or amusing by inducing laughter, especially in theatre.', 0),
(3, 'Fantasy', 'Fantasy is a genre of speculative fiction involving magical elements, typically set in a fictional universe and sometimes inspired by mythology and folklore. Its roots are in oral traditions, which then became fantasy literature and drama.', 0),
(4, 'Mystery', 'Mystery is a fiction genre where the nature of an event, usually a murder or other crime, remains mysterious until the end of the story. Often within a closed circle of suspects, each suspect is usually provided with a credible motive and a reasonable opportunity for committing the crime.', 0),
(6, 'Sci-fi', 'Science fiction is a genre of speculative fiction which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life. ', 0),
(7, 'Wuxia', 'Wuxia, which literally means \"martial heroes\", is a genre of Chinese fiction concerning the adventures of martial artists in ancient China', 0),
(8, 'Xianxia', 'Xianxia, more broadly known as \"Cultivation\", is a genre of Chinese fantasy influenced by Chinese mythology, Taoism, Buddhism, Chinese martial arts, traditional Chinese medicine, Chinese folk religion, Chinese alchemy and other traditional Chinese elements.', 0),
(10, 'Xuanhuan', 'Same as Xianxia but with a plot twist...', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_novel`
--

CREATE TABLE `tbl_novel` (
  `id` int(11) NOT NULL,
  `name` varchar(99) NOT NULL,
  `genre` int(99) NOT NULL,
  `genre_name` varchar(100) NOT NULL,
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

INSERT INTO `tbl_novel` (`id`, `name`, `genre`, `genre_name`, `author`, `chapters`, `description`, `status`, `rating`, `start_date`, `end_date`, `image`) VALUES
(39, 'The Declaration of Independence of the United States of America', 1, 'Action', 'Jefferson, Thomas', 30, 'https://www.gutenberg.org/ebooks/1.txt.utf-8', 'completed', 0, '2022-05-11 23:53:35', '', '1653460804179-img4.jpg'),
(40, 'The United States Bill of Rights', 4, 'Mystery', 'United States', 25, 'https://www.gutenberg.org/ebooks/2.txt.utf-8', 'completed', 0, '2022-05-11 23:53:35', '', '1653457819961-test4.jpeg'),
(41, 'John F. Kennedy\'s Inaugural Address', 6, 'Sci-fi', 'Kennedy, John F. (John Fitzgerald)', 24, 'https://www.gutenberg.org/ebooks/3.txt.utf-8', 'completed', 0, '2022-05-11 23:53:36', '', '1653457881070-test5.jpg'),
(42, 'Lincoln\'s Gettysburg', 4, 'Mystery', 'Lincoln, Abraham', 32, 'https://www.gutenberg.org/ebooks/4.txt.utf-8', 'completed', 0, '2022-05-11 23:53:37', '', '1653457938491-test4.jpeg'),
(43, 'The United States Constitution', 3, 'Fantasy', 'United States', 33, 'https://www.gutenberg.org/ebooks/5.txt.utf-8', 'completed', 0, '2022-05-11 23:53:38', '', '1653457961503-test3.jpg'),
(44, 'Give Me Liberty or Give Me Death', 4, 'Mystery', 'Henry, Patrick', 0, 'https://www.gutenberg.org/ebooks/6.txt.utf-8', 'ongoing', 0, '2022-05-11 23:53:39', '', '1653458009483-test4.jpeg'),
(45, 'The Mayflower Compact', 8, 'Xianxia', 'Unnamed', 0, 'https://www.gutenberg.org/ebooks/7.txt.utf-8', 'ongoing', 0, '2022-05-11 23:53:40', '', '1653458031525-test2.jpg'),
(46, 'Abraham Lincoln\'s Second Inaugural', 6, 'Sci-fi', 'Lincoln, Abraham', 0, 'https://www.gutenberg.org/ebooks/8.txt.utf-8', 'completed', 0, '2022-05-11 23:53:41', '', '1653458056617-test2.jpg'),
(47, 'Abraham Lincoln\'s First Inaugural Address', 8, 'Xianxia', 'Lincoln, Abraham', 0, 'https://www.gutenberg.org/ebooks/9.txt.utf-8', 'hiatus', 0, '2022-05-11 23:53:42', '', '1653458075610-test5.jpg'),
(48, 'The King James Version of the Bible', 10, 'Xuanhuan', 'Unnamed', 0, 'https://www.gutenberg.org/ebooks/10.txt.utf-8', 'completed', 0, '2022-05-11 23:53:43', '', '1653458089642-test4.jpeg'),
(51, 'Alice\'s Adventures in Wonderland', 3, 'Fantasy', 'Carroll, Lewis', 0, 'https://www.gutenberg.org/files/11/11-0.txt', 'completed', 0, '2022-05-12 00:06:55', '', '1653458106287-test2.jpg'),
(52, 'Through the Looking-Glass', 8, 'Xianxia', 'Carroll, Lewis', 0, 'https://www.gutenberg.org/files/12/12-0.txt', 'completed', 0, '2022-05-12 00:06:56', '', '1653458636694-test7.jpg'),
(53, 'The Hunting of the Snark: An Agony in Eight Fits', 6, 'Sci-fi', 'Carroll, Lewis', 0, 'https://www.gutenberg.org/ebooks/13.txt.utf-8', 'completed', 0, '2022-05-12 00:06:57', '', '1653458666560-test8.jpg'),
(54, 'The 1990 CIA World Factbook', 6, 'Sci-fi', 'United States. Central Intelligence Agency', 0, 'https://www.gutenberg.org/ebooks/14.txt.utf-8', 'completed', 0, '2022-05-12 00:06:58', '', '1653458676212-test9.jpg'),
(55, 'Moby-Dick; or, The Whale', 7, 'Wuxia', 'Melville, Herman', 0, 'https://www.gutenberg.org/files/15/15-0.txt', 'hiatus', 0, '2022-05-12 00:06:59', '', '1653458688586-test8.jpg'),
(56, 'Peter Pan', 8, 'Xianxia', 'Barrie, J. M. (James Matthew)', 0, 'https://www.gutenberg.org/files/16/16-0.txt', 'hiatus', 0, '2022-05-12 00:07:00', '', '1653458698455-test7.jpg'),
(57, 'The Book of Mormon: An Account Written by the Hand of Mormon, Upon Plates Taken from the Plates of ', 8, 'Xianxia', 'Church of Jesus Christ of Latter-day Saints', 0, 'https://www.gutenberg.org/files/17/17-0.zip', 'hiatus', 0, '2022-05-12 00:07:01', '', '1653458709592-test5.jpg'),
(58, 'The Federalist Papers', 7, 'Wuxia', 'Madison, James', 0, 'https://www.gutenberg.org/files/18/18-0.txt', 'hiatus', 0, '2022-05-12 00:07:02', '', '1653458720866-test4.jpeg'),
(59, 'The Song of Hiawatha', 3, 'Fantasy', 'Longfellow, Henry Wadsworth', 0, 'https://www.gutenberg.org/files/19/19-0.txt', 'hiatus', 0, '2022-05-12 00:07:03', '', '1653458735529-test8.jpg'),
(60, 'Paradise Lost', 6, 'Sci-fi', 'Milton, John', 0, 'https://www.gutenberg.org/files/20/20-0.txt', 'hiatus', 0, '2022-05-12 00:07:04', '', '1653458765435-test9.jpg'),
(61, 'Aesop\'s Fables: Translated by George Fyler Townsend', 10, 'Xuanhuan', 'Aesop', 0, 'https://www.gutenberg.org/ebooks/21.txt.utf-8', 'completed', 0, '2022-05-12 00:07:20', '', '1653458777492-test7.jpg'),
(62, 'Roget\'s Thesaurus', 7, 'Wuxia', 'Roget, Peter Mark', 0, 'https://www.gutenberg.org/ebooks/22.txt.utf-8', 'ongoing', 0, '2022-05-12 00:07:21', '', '1653458831695-test9.jpg'),
(63, 'Narrative of the Life of Frederick Douglass', 4, 'Mystery', 'Douglass, Frederick', 0, 'https://www.gutenberg.org/files/23/23-0.zip', 'ongoing', 0, '2022-05-12 00:07:22', '', '1653458855998-test2.jpg'),
(64, 'O Pioneers!', 3, 'Fantasy', 'Cather, Willa', 0, 'https://www.gutenberg.org/files/24/24-0.zip', 'completed', 0, '2022-05-12 00:07:23', '', '1653458868292-test5.jpg'),
(65, 'The 1991 CIA World Factbook', 1, 'Action', 'United States. Central Intelligence Agency', 0, 'https://www.gutenberg.org/ebooks/25.txt.utf-8', 'hiatus', 0, '2022-05-12 00:07:24', '', '1653458883008-test8.jpg'),
(66, 'Paradise Lost', 8, 'Xianxia', 'Milton, John', 0, 'https://www.gutenberg.org/ebooks/26.txt.utf-8', 'ongoing', 0, '2022-05-12 00:07:25', '', '1653458911703-test8.jpg'),
(67, 'Far from the Madding Crowd', 2, 'Comedy', 'Hardy, Thomas', 0, 'https://www.gutenberg.org/files/27/27-0.txt', 'completed', 0, '2022-05-12 00:07:26', '', '1653458930221-test4.jpeg'),
(68, 'The Fables of Aesop: Selected, Told Anew, and Their History Traced', 4, 'Mystery', 'Aesop', 0, 'https://www.gutenberg.org/ebooks/28.txt.utf-8', 'hiatus', 0, '2022-05-12 00:07:27', '', '1653459086489-test7.jpg'),
(70, 'The Bible, King James Version, Complete', 4, 'Mystery', 'Unnamed', 0, 'https://www.gutenberg.org/ebooks/30.txt.utf-8', 'completed', 0, '2022-05-12 00:07:29', '', '1653459178238-test4.jpeg'),
(71, 'Oedipus the King', 4, 'Mystery', 'Sophocles', 0, 'https://www.gutenberg.org/ebooks/31.txt.utf-8', 'completed', 0, '2022-05-12 00:07:30', '', '1653459068454-test7.jpg'),
(72, 'Herland', 2, 'Comedy', 'Gilman, Charlotte Perkins', 68, 'https://www.gutenberg.org/ebooks/32.txt.utf-8', 'completed', 0, '2022-05-12 00:07:31', '', '1653459150540-test2.jpg'),
(73, 'The Scarlet Letter', 3, 'Fantasy', 'Hawthorne, Nathaniel', 0, 'https://www.gutenberg.org/ebooks/33.txt.utf-8', 'completed', 0, '2022-05-12 00:07:32', '', '1653459191248-test5.jpg'),
(74, 'Zen and the Art of the Internet', 6, 'Sci-fi', 'Kehoe, Brendan P.', 0, 'https://www.gutenberg.org/ebooks/34.txt.utf-8', 'completed', 0, '2022-05-12 00:07:33', '', '1653459204645-test3.jpg'),
(75, 'The Time Machine', 3, 'Fantasy', 'Wells, H. G. (Herbert George)', 0, 'https://www.gutenberg.org/files/35/35-0.txt', 'completed', 0, '2022-05-12 00:07:34', '', '1653459241844-test9.jpg'),
(76, 'The War of the Worlds', 10, 'Xuanhuan', 'Wells, H. G. (Herbert George)', 0, 'https://www.gutenberg.org/ebooks/36.txt.utf-8', 'completed', 0, '2022-05-12 00:07:35', '', '1653459263622-test4.jpeg'),
(77, 'The 1990 United States Census [2nd]', 7, 'Wuxia', 'United States. Bureau of the Census', 0, 'https://www.gutenberg.org/ebooks/37.txt.utf-8', 'completed', 0, '2022-05-12 00:07:36', '', '1653458666560-test8.jpg'),
(78, 'The Jargon File, Version 2.9.10, 01 Jul 1992', 8, 'Xianxia', 'Unnamed', 0, 'https://www.gutenberg.org/ebooks/38.txt.utf-8', 'ongoing', 0, '2022-05-12 00:07:37', '', '1653457819961-test4.jpeg'),
(79, 'Hitchhiker\'s Guide to the Internet', 10, 'Xuanhuan', 'Krol, Ed', 0, 'https://www.gutenberg.org/ebooks/39.txt.utf-8', 'completed', 0, '2022-05-12 00:07:38', '', '1653458676212-test9.jpg'),
(80, 'The Legend of Sleepy Hollow', 2, 'Comedy', 'Irving, Washington', 0, 'https://www.gutenberg.org/files/41/41-0.txt', 'hiatus', 0, '2022-05-12 00:08:13', '', '1653457819961-test4.jpeg'),
(81, 'The Strange Case of Dr. Jekyll and Mr. Hyde', 4, 'Mystery', 'Stevenson, Robert Louis', 0, 'https://www.gutenberg.org/ebooks/42.txt.utf-8', 'ongoing', 0, '2022-05-12 00:08:14', '', '1653458676212-test9.jpg'),
(82, 'The Strange Case of Dr. Jekyll and Mr. Hyde', 4, 'Mystery', 'Stevenson, Robert Louis', 0, 'https://www.gutenberg.org/files/43/43-0.zip', 'ongoing', 0, '2022-05-12 00:08:15', '', '1653458899518-test5.jpg'),
(83, 'The Song of the Lark', 10, 'Xuanhuan', 'Cather, Willa', 0, 'https://www.gutenberg.org/ebooks/44.txt.utf-8', 'completed', 0, '2022-05-12 00:08:16', '', '1653459221097-test9.jpg'),
(84, 'Anne of Green Gables', 6, 'Sci-fi', 'Montgomery, L. M. (Lucy Maud)', 0, 'https://www.gutenberg.org/ebooks/45.txt.utf-8', 'ongoing', 0, '2022-05-12 00:08:17', '', '1653458676212-test9.jpg'),
(85, 'A Christmas Carol in Prose; Being a Ghost Story of Christmas', 8, 'Xianxia', 'Dickens, Charles', 0, 'https://www.gutenberg.org/ebooks/46.txt.utf-8', 'completed', 0, '2022-05-12 00:08:18', '', '1653457819961-test4.jpeg'),
(86, 'Anne of Avonlea', 1, 'Action', 'Montgomery, L. M. (Lucy Maud)', 0, 'https://www.gutenberg.org/ebooks/47.txt.utf-8', 'hiatus', 0, '2022-05-12 00:08:19', '', '1653458666560-test8.jpg'),
(87, 'The 1992 CIA World Factbook', 3, 'Fantasy', 'United States. Central Intelligence Agency', 0, 'https://www.gutenberg.org/ebooks/48.txt.utf-8', 'hiatus', 0, '2022-05-12 00:08:20', '', '1653458810914-test3.jpg'),
(88, 'Surfing the Internet: An Introduction: Version 2.0.2', 2, 'Comedy', 'Polly, Jean Armour', 0, 'https://www.gutenberg.org/ebooks/49.txt.utf-8', 'hiatus', 0, '2022-05-12 00:08:21', '', '1653458792408-test8.jpg'),
(89, 'Kite Runner', 1, 'Action', 'Khaled Hosseini', 30, 'A superb action novel.', 'ongoing', 0, '2022-05-25 01:41:30', '', '1653460157203-img4.jpg'),
(90, 'Stephen King', 3, 'Fantasy', 'Stephen', 30, 'The King.', 'ongoing', 0, '2022-05-25 09:34:55', '', '1653460893290-img8.jpg'),
(157, 'LOST', 1, 'Action', 'James Patterson', 30, 'https://www.gutenberg.org/ebooks/1.txt.utf-8', 'ongoing', 0, '2022-05-25 14:04:41', '', '1653466781699-img7.jpg'),
(159, 'To The Light House', 3, 'Fantasy', 'Virginia Wool', 30, 'https://www.gutenberg.org/files/35/35-0.txt', 'ongoing', 0, '2022-05-25 14:26:14', '', '1653468074027-img1.jpg'),
(160, 'To Waves', 10, 'Xuanhuan', 'Virginia Wool', 30, 'https://www.gutenberg.org/ebooks/39.txt.utf-8', 'ongoing', 0, '2022-05-25 14:27:23', '', '1653468143173-img2.jpg'),
(162, 'Adventure of Nearl', 1, 'Action', 'Nearl', 30, '', 'ongoing', 0, '2022-08-06 22:19:07', '', '1659803647695-test7.jpg'),
(163, 'The New Beginning', 2, 'Comedy', 'Hakim', 30, 'This a new beginning.', 'ongoing', 0, '2022-08-14 08:55:38', '', '1660446638014-test5.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_novel_chapters`
--

CREATE TABLE `tbl_novel_chapters` (
  `entry_id` int(99) NOT NULL,
  `novel_id` int(99) NOT NULL,
  `chapter_id` int(11) NOT NULL,
  `chapter_title` varchar(99) NOT NULL,
  `chapter_content` varchar(8000) NOT NULL,
  `upload_date` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_novel_chapters`
--

INSERT INTO `tbl_novel_chapters` (`entry_id`, `novel_id`, `chapter_id`, `chapter_title`, `chapter_content`, `upload_date`) VALUES
(15, 39, 1, ' Elder Brother, what are you doing?!', ' ? Bai Xiaochun looked around at his Elder Brothers, who were staring at him with eyes that glittered like spirit stones. Big Fatty Zhang’s eyes looked like they were about to erupt with flames. Bai Xiaochun cleared his throat, feeling more than a little bit proud of himself.\n\n“Elder Brother, check this out. The three mountain peaks of the Spirit Stream Sect all have a trial by fire every month, giving us servants a chance to become like the fish that leaped over the dragon gate, right?\" Bai Xiaochun glanced around at everyone, looking like the picture of charm and innocence.\n\nBig Fatty Zhang nodded in response.\n\n“However, the sect only wants the best of the best. Therefore, no matter how many people participate in the trial by fire, only the top three disciples per mountain peak get picked. Am I right?” He licked his lips, and his eyes were beginning to shine. Big Fatty Zhang listened thoughtfully.\n\nA ruminative expression could also be seen on Third Fatty Hei’s face, although everyone else seemed confused.\n\nBig Fatty Zhang looked at Bai Xiaochun, and his eyes also began to shine. “Do you mean....”\n\n“Considering the levels of your cultivation bases, Elder Brothers, and mine, it would be easy to sweep the trials by fire of all three mountains....” Bai Xiaochun looked around at his Elder Brothers. All of them had cultivation bases at the third level of Qi Condensation; Big Fatty Zhang and Third Fatty Hei were actually at the peak of the third level. Were it not for the fact that they didn\'t want to leave the Ovens, and thus kept their cultivation bases suppressed, they could have broken through to the next level long ago.\n\n“Therefore,” Bai Xiaochun continued, speaking very quickly, “all we have to do is get to the peak of the mountains as quickly as possible, and hold the top three spots. Then, we can... sell them to whoever comes along after us!” He stopped and looked at Big Fatty Zhang and the others.\n\nBig Fatty Zhang was trembling.\n\n“So low down....” he said. Then he took a deep breath and slapped his thigh. An unprecedentedly bright glow appeared in his eyes. The method described by Bai Xiaochun wasn\'t very complicated at all, and was in fact quite simple. It was merely a different way of thinking that, after being spoken out loud, was easy to understand. However, before being explained, it was actually the opposite of what everyone would have thought the idea to be.\n\nBig Fatty Zhang seemed to be in the midst of spiritual enlightenment. It was as if a door had been opened, leading to a brand new type of life. He couldn’t hold back from laughing heartily.\n\nThird Fatty Hei stamped an excited foot, face flushed from either embarrassment or excitement. “This couldn’t be any more low down! Hahaha!”\n\nAs the other fatties understood, they started getting excited. Panting, they couldn’t help but stare at Bai Xiaochun with more admiration than ever.\n\n“Great idea! Let’s do it!”\n\n“Fudge! That bunch of bastards from the Supervisors Department have persecuted us into poverty for years now. Thankfully, Ninth Junior Brother is here now. Let’s do it!” Then, they began to excitedly discuss the details of how to carry out such a plan.\n\nAfter they were sure that there was nothing they had overlooked, they decided to try out their scheme in the following month’s trials by fire. Big Fatty Zhang slapped his thigh in delight.\n\n“Tonight is snack night!”\n\nExcited conversations filled the Ovens. The following month was one of extreme enthusiasm. In fact, just to play it safe, everyone took time to practice cultivation, which was a rare occurrence. In the end, everyone was waiting impatiently for the day of the trial by fire to arrive.\n\nFinally, it did.\n\nThe sun shone brightly in the morning sky. Beneath the three mountain peaks on the south shore of the Spirit Stream Sect, an unprecedented scene was playing out. There at the entrance to each of the trails leading up the mountains, shockingly, three black woks appeared.\n\nA closer look revealed that underneath those black woks were extraordinarily formidable fatties. The sight was truly impressive.\n\nThese were the nine members of the Ovens, and this was, in fact, their first time attending the trials by fire held for servants at the three mountain peaks. Just as they had planned, three of their number went to each of the three mountain peaks.\n\nLarge groups of servants were hurrying toward the mountain peaks from all directions, cracking their knuckles and looking very excited. Many of these servants had attempted the trials by fire on numerous occasions, only to fail in the end. For others, it was their first time attending. Everyone was both excited and nervous, and hoped that they could be like a galloping divine steed and make a meteoric rise to become an Outer Sect disciple.\n\nAs they neared the various mountain peaks, they caught sight of the fatties from the Ovens.\n\n“The Ovens? What are they doing here?”\n\n“I\'ve been a servant for nine years already, and I\'ve participated in the trials by fire thirty times. This is the first time I’ve ever seen anyone from the Ovens here....” The other servants were shocked, and began to spread word. Soon, everyone was talking about the fact that all three of the mountains had people from the Ovens waiting there for the trials by fire.\n\n“This is big! I can’t believe the Ovens people all are going to vie for a spot in the Outer Sect. What’s going on...?”\n\nBai Xiaochun, Big Fatty Zhang and Third Fatty Hei were all waiting at the bottom of the third peak. When they heard the shocked exclamations of the other servants, they didn’t react at all. In fact, their faces were so calm that it almost seemed they were away on astral journeys and were completely oblivious to all of the conversations around them.\n\nThey were completely and utterly focused on the trial by fire starting line. To them, this was not the path of a trial by fire; instead, it was a glittering, glowing road to spirit stones.\n\nBai Xiaochun looked especially solemn, with his eyes turned up in thought.\n\nSoon, a figure could be seen floating down from the three mountains. The person to land by Bai Xiaochun and the others was a middle-aged man who had the demeanor of a transcendent being. The first thing he noticed as he alighted next to the starting line was the mountain of flesh that was Big Fatty Zhang.\n\nThen he looked over at Bai Xiaochun and Third Fatty Hei. This man was the honor guard in charge of the trial by fire, and currently, his heart was filled with astonishment.\n\n“Did the sun rise from the west today?” he thought. “Usually the people from the Ovens would rather die than become Outer Sect disciples. What\'s going on?”\n\nAfter blinking a few times to make sure he wasn’t seeing things, an expression of encouragement appeared on the man’s face. He flicked his sleeve and began to speak, his voice echoing out in all directions.\n\n“Let the trial by fire for promotion to the Outer Sect... begin!” As soon as the words left his mouth, bells began to toll throughout the sect. At the same time, the starting lines to the trials by fire lit up, indicating that the event had begun.\n\nInstantly, Big Fatty Zhang shot forward, an expression of extreme focus on his face. He kicked up a huge wind as he ran toward the stone steps leading up the mountain, moving so fast you might think he was being chased by a ravenous beast.\n\nThird Fatty Hei also leapt into motion behind Big Fatty Zhang, a brutal gleam in his eyes that seemed to indicate that anyone who tried to overtake him on the path was threatening his life.\n\nIn third place was Bai Xiaochun, who leapt onto the path as quickly as a rabbit, thinking about nothing else but the Age-Prolonging Longevity-Enhancing Pill. In the blink of an eye, the three of them were dashing madly up the path.\n\nAll of that happened so quickly that the other servants barely had time to react. Their faces immediately fell and, gritting their teeth, they scrambled onto the path and began to climb toward the peak.', '2022-06-28 17:13:06'),
(16, 39, 2, 'Wait, this ain\'t right!', '“Great idea! Let’s do it!”\n\n“Fudge! That bunch of bastards from the Supervisors Department have persecuted us into poverty for years now. Thankfully, Ninth Junior Brother is here now. Let’s do it!” Then, they began to excitedly discuss the details of how to carry out such a plan.\n\nAfter they were sure that there was nothing they had overlooked, they decided to try out their scheme in the following month’s trials by fire. Big Fatty Zhang slapped his thigh in delight.\n\n“Tonight is snack night!”\n\nExcited conversations filled the Ovens. The following month was one of extreme enthusiasm. In fact, just to play it safe, everyone took time to practice cultivation, which was a rare occurrence. In the end, everyone was waiting impatiently for the day of the trial by fire to arrive.\n\nFinally, it did.\n\nThe sun shone brightly in the morning sky. Beneath the three mountain peaks on the south shore of the Spirit Stream Sect, an unprecedented scene was playing out. There at the entrance to each of the trails leading up the mountains, shockingly, three black woks appeared.\n\nA closer look revealed that underneath those black woks were extraordinarily formidable fatties. The sight was truly impressive.\n\nThese were the nine members of the Ovens, and this was, in fact, their first time attending the trials by fire held for servants at the three mountain peaks. Just as they had planned, three of their number went to each of the three mountain peaks.\n\nLarge groups of servants were hurrying toward the mountain peaks from all directions, cracking their knuckles and looking very excited. Many of these servants had attempted the trials by fire on numerous occasions, only to fail in the end. For others, it was their first time attending. Everyone was both excited and nervous, and hoped that they could be like a galloping divine steed and make a meteoric rise to become an Outer Sect disciple.\n\nAs they neared the various mountain peaks, they caught sight of the fatties from the Ovens.\n\n“The Ovens? What are they doing here?”\n\n“I\'ve been a servant for nine years already, and I\'ve participated in the trials by fire thirty times. This is the first time I’ve ever seen anyone from the Ovens here....” The other servants were shocked, and began to spread word. Soon, everyone was talking about the fact that all three of the mountains had people from the Ovens waiting there for the trials by fire.\n\n“This is big! I can’t believe the Ovens people all are going to vie for a spot in the Outer Sect. What’s going on...?”\n\nBai Xiaochun, Big Fatty Zhang and Third Fatty Hei were all waiting at the bottom of the third peak. When they heard the shocked exclamations of the other servants, they didn’t react at all. In fact, their faces were so calm that it almost seemed they were away on astral journeys and were completely oblivious to all of the conversations around them.\n\nThey were completely and utterly focused on the trial by fire starting line. To them, this was not the path of a trial by fire; instead, it was a glittering, glowing road to spirit stones.\n\nBai Xiaochun looked especially solemn, with his eyes turned up in thought.\n\nSoon, a figure could be seen floating down from the three mountains. The person to land by Bai Xiaochun and the others was a middle-aged man who had the demeanor of a transcendent being. The first thing he noticed as he alighted next to the starting line was the mountain of flesh that was Big Fatty Zhang.\n\nThen he looked over at Bai Xiaochun and Third Fatty Hei. This man was the honor guard in charge of the trial by fire, and currently, his heart was filled with astonishment.\n\n“Did the sun rise from the west today?” he thought. “Usually the people from the Ovens would rather die than become Outer Sect disciples. What\'s going on?”\n\nAfter blinking a few times to make sure he wasn’t seeing things, an expression of encouragement appeared on the man’s face. He flicked his sleeve and began to speak, his voice echoing out in all directions.\n\n“Let the trial by fire for promotion to the Outer Sect... begin!” As soon as the words left his mouth, bells began to toll throughout the sect. At the same time, the starting lines to the trials by fire lit up, indicating that the event had begun.\n\nInstantly, Big Fatty Zhang shot forward, an expression of extreme focus on his face. He kicked up a huge wind as he ran toward the stone steps leading up the mountain, moving so fast you might think he was being chased by a ravenous beast.\n\nThird Fatty Hei also leapt into motion behind Big Fatty Zhang, a brutal gleam in his eyes that seemed to indicate that anyone who tried to overtake him on the path was threatening his life.\n\nIn third place was Bai Xiaochun, who leapt onto the path as quickly as a rabbit, thinking about nothing else but the Age-Prolonging Longevity-Enhancing Pill. In the blink of an eye, the three of them were dashing madly up the path.\n\nAll of that happened so quickly that the other servants barely had time to react. Their faces immediately fell and, gritting their teeth, they scrambled onto the path and began to climb toward the peak.\n\nS', '2022-06-28 17:34:08'),
(17, 39, 3, 'Time for Plan \'B\'', 'Bai Xiaochun looked around at his Elder Brothers, who were staring at him with eyes that glittered like spirit stones. Big Fatty Zhang’s eyes looked like they were about to erupt with flames. Bai Xiaochun cleared his throat, feeling more than a little bit proud of himself.\n\n“Elder Brother, check this out. The three mountain peaks of the Spirit Stream Sect all have a trial by fire every month, giving us servants a chance to become like the fish that leaped over the dragon gate, right?\" Bai Xiaochun glanced around at everyone, looking like the picture of charm and innocence.\n\nBig Fatty Zhang nodded in response.\n\n“However, the sect only wants the best of the best. Therefore, no matter how many people participate in the trial by fire, only the top three disciples per mountain peak get picked. Am I right?” He licked his lips, and his eyes were beginning to shine. Big Fatty Zhang listened thoughtfully.\n\nA ruminative expression could also be seen on Third Fatty Hei’s face, although everyone else seemed confused.\n\nBig Fatty Zhang looked at Bai Xiaochun, and his eyes also began to shine. “Do you mean....”\n\n“Considering the levels of your cultivation bases, Elder Brothers, and mine, it would be easy to sweep the trials by fire of all three mountains....” Bai Xiaochun looked around at his Elder Brothers. All of them had cultivation bases at the third level of Qi Condensation; Big Fatty Zhang and Third Fatty Hei were actually at the peak of the third level. Were it not for the fact that they didn\'t want to leave the Ovens, and thus kept their cultivation bases suppressed, they could have broken through to the next level long ago.\n\n“Therefore,” Bai Xiaochun continued, speaking very quickly, “all we have to do is get to the peak of the mountains as quickly as possible, and hold the top three spots. Then, we can... sell them to whoever comes along after us!” He stopped and looked at Big Fatty Zhang and the others.\n\nBig Fatty Zhang was trembling.\n\n“So low down....” he said. Then he took a deep breath and slapped his thigh. An unprecedentedly bright glow appeared in his eyes. The method described by Bai Xiaochun wasn\'t very complicated at all, and was in fact quite simple. It was merely a different way of thinking that, after being spoken out loud, was easy to understand. However, before being explained, it was actually the opposite of what everyone would have thought the idea to be.\n\nBig Fatty Zhang seemed to be in the midst of spiritual enlightenment. It was as if a door had been opened, leading to a brand new type of life. He couldn’t hold back from laughing heartily.\n\nThird Fatty Hei stamped an excited foot, face flushed from either embarrassment or excitement. “This couldn’t be any more low down! Hahaha!”\n\nAs the other fatties understood, they started getting excited. Panting, they couldn’t help but stare at Bai Xiaochun with more admiration than ever.\n\n“Great idea! Let’s do it!”\n\n“Fudge! That bunch of bastards from the Supervisors Department have persecuted us into poverty for years now. Thankfully, Ninth Junior Brother is here now. Let’s do it!” Then, they began to excitedly discuss the details of how to carry out such a plan.\n\nAfter they were sure that there was nothing they had overlooked, they decided to try out their scheme in the following month’s trials by fire. Big Fatty Zhang slapped his thigh in delight.\n\n“Tonight is snack night!”\n\nExcited conversations filled the Ovens. The following month was one of extreme enthusiasm. In fact, just to play it safe, everyone took time to practice cultivation, which was a rare occurrence. In the end, everyone was waiting impatiently for the day of the trial by fire to arrive.\n\nFinally, it did.\n\nThe sun shone brightly in the morning sky. Beneath the three mountain peaks on the south shore of the Spirit Stream Sect, an unprecedented scene was playing out. There at the entrance to each of the trails leading up the mountains, shockingly, three black woks appeared.\n\nA closer look revealed that underneath those black woks were extraordinarily formidable fatties. The sight was truly impressive.\n\nThese were the nine members of the Ovens, and this was, in fact, their first time attending the trials by fire held for servants at the three mountain peaks. Just as they had planned, three of their number went to each of the three mountain peaks.\n\nLarge groups of servants were hurrying toward the mountain peaks from all directions, cracking their knuckles and looking very excited. Many of these servants had attempted the trials by fire on numerous occasions, only to fail in the end. For others, it was their first time attending. Everyone was both excited and nervous, and hoped that they could be like a galloping divine steed and make a meteoric rise to become an Outer Sect disciple.\n\nAs they neared the various mountain peaks, they caught sight of the fatties from the Ovens.\n\n“The Ovens? What are they doing here?”\n\n“I\'ve been a servant for nine years already, and I\'ve participated in the trials by fire thirty times. This is the first time I’ve ever seen anyone from the Ovens here....” The other servants were shocked, and began to spread word. Soon, everyone was talking about the fact that all three of the mountains had people from the Ovens waiting there for the trials by fire.\n\n“This is big! I can’t believe the Ovens people all are going to vie for a spot in the Outer Sect. What’s going on...?”\n\nBai Xiaochun, Big Fatty Zhang and Third Fatty Hei were all waiting at the bottom of the third peak. When they heard the shocked exclamations of the other servants, they didn’t react at all. In fact, their faces were so calm that it almost seemed they were away on astral journeys and were completely oblivious to all of the conversations around them.\n\nThey were completely and utterly focused on the trial by fire starting line. To them, this was not the path of a trial by fire; instead, it was a glittering, glowing road to spirit stones.\n\nBai Xiaochun looked especially solemn, with his eyes turned up in thought.\n\nSoon, a figure could be seen floating down from the three mountains. The person to land by Bai Xiaochun and the others was a middle-aged man who had the demeanor of a transcendent being. The first thing he noticed as he alighted next to the starting line was the mountain of flesh that was Big Fatty Zhang.\n\nThen he looked over at Bai Xiaochun and Third Fatty Hei. This man was the honor guard in charge of the trial by fire, and currently, his heart was filled with astonishment.\n\n“Did the sun rise from the west today?” he thought. “Usually the people from the Ovens would rather die than become Outer Sect disciples. What\'s going on?”\n\nAfter blinking a few times to make sure he wasn’t seeing things, an expression of encouragement appeared on the man’s face. He flicked his sleeve and began to speak, his voice echoing out in all directions.\n\n“Let the trial by fire for promotion to the Outer Sect... begin!” As soon as the words left his mouth, bells began to toll throughout the sect. At the same time, the starting lines to the trials by fire lit up, indicating that the event had begun.\n\nInstantly, Big Fatty Zhang shot forward, an expression of extreme focus on his face. He kicked up a huge wind as he ran toward the stone steps leading up the mountain, moving so fast you might think he was being chased by a ravenous beast.\n\nThird Fatty Hei also leapt into motion behind Big Fatty Zhang, a brutal gleam in his eyes that seemed to indicate that anyone who tried to overtake him on the path was threatening his life.\n\nIn third place was Bai Xiaochun, who leapt onto the path as quickly as a rabbit, thinking about nothing else but the Age-Prolonging Longevity-Enhancing Pill. In the blink of an eye, the three of them were dashing madly up the path.\n\nAll of that happened so quickly that the other servants barely had time to react. Their faces immediately fell and, gritting their teeth, they scrambled onto the path and began to climb toward the peak.\n\nS', '2022-06-28 17:35:52'),
(18, 162, 1, 'In a small village.', 'chapte 1 out of 1000', '2022-08-06 22:20:43'),
(19, 71, 1, 'New title', 'Content content content', '2022-08-09 12:26:28'),
(20, 163, 1, 'FROM THE END TO THE START', 'This is chapter content', '2022-08-14 08:56:20');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_novel_rating`
--

CREATE TABLE `tbl_novel_rating` (
  `id` int(99) NOT NULL,
  `user_id` int(99) NOT NULL,
  `novel_id` int(99) NOT NULL,
  `rating` int(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_novel_rating`
--

INSERT INTO `tbl_novel_rating` (`id`, `user_id`, `novel_id`, `rating`) VALUES
(16, 46, 57, 3),
(17, 46, 44, 4),
(18, 46, 39, 4),
(19, 46, 89, 3),
(20, 46, 45, 3),
(21, 35, 39, 3),
(22, 35, 40, 4),
(23, 35, 41, 2),
(24, 35, 43, 3),
(25, 35, 47, 4),
(26, 35, 52, 3),
(27, 37, 86, 5),
(28, 37, 41, 4),
(29, 37, 66, 5),
(30, 37, 75, 3),
(31, 37, 42, 5),
(32, 37, 44, 1),
(33, 37, 72, 2),
(34, 37, 39, 4),
(35, 38, 87, 4),
(36, 38, 67, 2),
(37, 58, 44, 4),
(38, 58, 81, 5),
(39, 58, 48, 5),
(40, 58, 40, 2),
(41, 58, 80, 2),
(42, 35, 45, 4),
(43, 35, 44, 2),
(44, 35, 81, 3),
(45, 46, 42, 3),
(46, 58, 47, 2),
(47, 58, 42, 5),
(48, 58, 87, 1),
(49, 58, 89, 3),
(50, 58, 52, 5),
(51, 58, 41, 3),
(52, 58, 76, 3),
(53, 58, 67, 3),
(54, 58, 157, 3),
(55, 59, 71, 3),
(56, 59, 52, 3),
(57, 46, 56, 4),
(58, 46, 48, 5),
(59, 59, 157, 3),
(60, 59, 42, 3),
(61, 59, 56, 4),
(62, 46, 66, 3),
(63, 46, 47, 3),
(64, 46, 52, 4),
(65, 59, 86, 3),
(66, 46, 81, 3),
(67, 46, 43, 5),
(68, 58, 39, 4),
(69, 58, 43, 3),
(70, 61, 87, 3),
(71, 61, 39, 3),
(72, 61, 45, 3),
(73, 61, 48, 3),
(74, 61, 42, 5),
(75, 61, 44, 5),
(76, 61, 56, 5),
(77, 58, 56, 3),
(78, 58, 66, 4),
(79, 58, 72, 3),
(80, 62, 162, 3),
(81, 62, 45, 3),
(82, 62, 62, 4),
(83, 62, 63, 5),
(84, 62, 78, 4),
(85, 62, 66, 2),
(86, 62, 56, 3),
(87, 62, 42, 5),
(88, 62, 81, 3),
(89, 62, 48, 5),
(90, 62, 86, 5),
(91, 62, 52, 2),
(92, 62, 43, 4),
(93, 62, 39, 5),
(94, 62, 44, 1),
(95, 62, 41, 2),
(96, 62, 57, 1),
(97, 62, 40, 3),
(98, 62, 71, 3),
(99, 62, 75, 1),
(100, 62, 76, 2);

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
  `novel_works` int(11) DEFAULT NULL,
  `novels_reading` varchar(3000) DEFAULT NULL,
  `created_on` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `username`, `password`, `full_name`, `email`, `gender`, `address`, `novel_works`, `novels_reading`, `created_on`) VALUES
(35, 'rmjn', 'rmjn', 'Roshan Maharjan', 'rm@gmail.com', 'male', 'Nepal', NULL, '54', '\"2022-4-27 17:43:15\"'),
(37, 'random', 'random123', 'Random Stranger', 'rs69@mail.com', 'female', 'Nowhere', 71, NULL, '\"2022-4-27 17:43:15\"'),
(38, 'ram123', 'ram123', 'Ram', 'ram@gmail.com', 'male', 'srilanka', 73, '66', '\"2022-4-27 17:43:15\"'),
(46, 'asd', 'asd', 'Anwar', 'asd@asd.com', 'male', 'npl', NULL, NULL, '2022-04-29 05:48:36'),
(58, 'user@gmail.com', 'user123', 'Dhital', 'das@gmail.com', 'male', 'Darchula', NULL, NULL, '\"2022-5-24 21:31:4\"'),
(59, 'temper', 'temper', 'Temper', 'temper@mail.com', '', '', NULL, NULL, '2022-05-30 19:40:31'),
(60, 'emial', 'email', 'fullname', 'email@email.com', 'male', 'address', NULL, NULL, '\"2022-6-28 13:19:0\"'),
(61, 'roshan1', 'roshan123', 'Roshan Maharjan', 'roshan@mail.com', '', '', NULL, NULL, '2022-08-14 08:41:16'),
(62, 'user123', 'user123', 'new user', 'user@gmail.com', '', '', NULL, NULL, '2022-08-14 17:01:26');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_log`
--

CREATE TABLE `tbl_user_log` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `currently_reading` varchar(3000) NOT NULL,
  `bookmarks` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_user_log`
--

INSERT INTO `tbl_user_log` (`id`, `user_id`, `currently_reading`, `bookmarks`) VALUES
(49, 46, '40,80,78,51,59,39,54,75,44,45,157,160,47,52,162', '47,52,81'),
(76, 38, '60,48,52', '52,39,87,67'),
(189, 35, '', '40,39,45'),
(192, 37, '', '72,39,52,84'),
(198, 58, '39,44,87,162,157,61,47', '72,86,45,81,63,47'),
(203, 59, '', '39,86'),
(225, 61, '44,40', '44');

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_CreatedBY` (`created_by`);

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
-- Indexes for table `tbl_novel_chapters`
--
ALTER TABLE `tbl_novel_chapters`
  ADD PRIMARY KEY (`entry_id`),
  ADD KEY `FK_NovelId` (`novel_id`);

--
-- Indexes for table `tbl_novel_rating`
--
ALTER TABLE `tbl_novel_rating`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_uid` (`user_id`),
  ADD KEY `FK_Novel_id` (`novel_id`);

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
-- Indexes for table `tbl_user_log`
--
ALTER TABLE `tbl_user_log`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

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
  MODIFY `id` int(99) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_genre`
--
ALTER TABLE `tbl_genre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tbl_novel`
--
ALTER TABLE `tbl_novel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=164;

--
-- AUTO_INCREMENT for table `tbl_novel_chapters`
--
ALTER TABLE `tbl_novel_chapters`
  MODIFY `entry_id` int(99) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `tbl_novel_rating`
--
ALTER TABLE `tbl_novel_rating`
  MODIFY `id` int(99) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `tbl_recent_novel_update`
--
ALTER TABLE `tbl_recent_novel_update`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(99) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `tbl_user_log`
--
ALTER TABLE `tbl_user_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=228;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_announcements`
--
ALTER TABLE `tbl_announcements`
  ADD CONSTRAINT `FK_CreatedBY` FOREIGN KEY (`created_by`) REFERENCES `admin` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_novel_chapters`
--
ALTER TABLE `tbl_novel_chapters`
  ADD CONSTRAINT `FK_NovelId` FOREIGN KEY (`novel_id`) REFERENCES `tbl_novel` (`id`);

--
-- Constraints for table `tbl_novel_rating`
--
ALTER TABLE `tbl_novel_rating`
  ADD CONSTRAINT `FK_Novel_id` FOREIGN KEY (`novel_id`) REFERENCES `tbl_novel` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_uid` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_user_log`
--
ALTER TABLE `tbl_user_log`
  ADD CONSTRAINT `FK_UserId` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
