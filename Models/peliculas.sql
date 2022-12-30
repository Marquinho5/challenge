-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-12-2022 a las 01:15:49
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `peliculas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actores`
--

CREATE TABLE `actores` (
  `idActor` int(11) NOT NULL,
  `Name` varchar(60) NOT NULL,
  `idFilms` int(11) NOT NULL,
  `imgUrl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `actores`
--

INSERT INTO `actores` (`idActor`, `Name`, `idFilms`, `imgUrl`) VALUES
(1, 'Lali Espósito', 6, 'https://m.media-amazon.com/images/M/MV5BNjhjYmEwYjItZTRiZS00ZjE3LWFkMmEtMDMxYjcwZDgxZjZiXkEyXkFqcGdeQXVyNjk1MjYyNTA@._V1_UY264_CR20,0,178,264_AL_.jpg'),
(2, 'Verónica Sánchez', 6, 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQHiV93B7TC8f9VKNdBu1Zx--sOEJeLFueSbySbQ61MB9c7T6Dd_QEc2f-TPizt7v8h'),
(3, 'Yany Prado', 6, 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTwDLCBDWM5wesprYxvgO3p2yKflCKZ0vZBWE9V9mus-iZ-g-MovEp-ambmoVpDZGps'),
(4, 'Miguel Ángel Silvestre', 6, 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRLTOkWHje9m42zK5kZdYEjRUYr9LTFGCInh3j4ybbYof1eIJvr5v4i7PqB_y8K-pRO'),
(5, 'Asier Etxeandía', 6, 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQS6NP0vklvMuxA9wM0UtuuFwnwNi7z_3yNT0WRRg8iUnBxoCWbB2ZDiTiDj6ufGBAF'),
(6, 'Christina Milian', 7, 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQGFuJM7qEbMXetOZpdRvKCmvphGctMDG8NmsNuO7uE_MSMsbDa'),
(7, 'Sinqua Walls', 7, 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSk2v2SwC6T7CFfszuWylpYBF89UyAi3rmWMLViu4ghwbkAk12O'),
(8, 'Jay Pharoah', 7, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_1XVPTKyBOG9vImHjl7vjOrNoLaw26iVRYbHS-v3P0hYM6_Me'),
(9, 'Christiani Pitss', 7, 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTvtppv9mYhWKj4H3J_9CHvqWlC4CjPHJtl5HsaqVd8OqKbAgVV'),
(10, 'Assa Sylla', 9, 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT-p0DEBvhwzlYe8BjBYtru4EojizwOb5FnswDd77j8PfKgEna9Hov3zFTSCbNDjOyf'),
(11, 'Samir Decazza', 9, 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQliwSNVXaBgipLR3tWWrdT-4K2y3AREj4No0w5E_2JfxObotChtNVWt2lNPTeQF45c'),
(12, 'Valérie Kaprisky', 9, 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT7yebocoiv4EVRo0AFf8eY4B2YqF9YspiyrbqEmqSvGLCDpe_ptKDgM6d9HhwA-CkK'),
(13, 'Nassim Si Ahmed', 9, 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRmrn6frE_byWDiyjE8egKmzkqyhZCSdn8eIQ6gsjXZBD8baz345J798lf0NTJ0_y52'),
(14, 'Ouidad Elma', 9, 'https://fr.web.img3.acsta.net/pictures/17/08/01/16/31/387199.jpg'),
(15, 'Franco Tirri', 5, 'https://media.infocielo.com/p/acffc146e0b17a0746fc3d2ce34d1f65/adjuntos/299/imagenes/001/272/0001272917/887x0/smart/franco-tirri-portada-1280x720jpg.jpg'),
(16, 'Rodrigo de la Serna', 5, 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT9h1xdGT4Dxmc7jFnwZVAu71Myvy25uJKPdhEhdKHEmYa3G6MLaLS9cSI95WXl5Hge'),
(17, 'Dante Mastropierro', 5, 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/7QZMEZ736RC7TMHX535EFPSXZY.jpg'),
(18, 'Ariel Staltari', 5, 'https://www.redaccion.com.ar/wp-content/uploads/2019/07/Ariel-Staltari.jpg'),
(19, 'Ana Celentano', 5, 'https://m.media-amazon.com/images/M/MV5BMjA2NjUzNjYyMF5BMl5BanBnXkFtZTcwNzUxNDc3MQ@@._V1_.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `director`
--

CREATE TABLE `director` (
  `idDirector` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `DirectedMovies` int(11) NOT NULL,
  `imgUrl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `director`
--

INSERT INTO `director` (`idDirector`, `Name`, `DirectedMovies`, `imgUrl`) VALUES
(1, 'David Victori.', 6, 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQ-QKESgJkVWBijUQCqOU5gunJuULSKtcnpX0MmOhn0384h9oHcGyhD3TIgdU9Tx_Rr'),
(2, 'Bruno Stagnaro', 5, 'https://resizer.glanacion.com/resizer/8AFxauy2Y0l-I7CpvAyzkt9q7Uc=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/EJLAQBD7TVHPPLJO6SG2KWQP4A.jpg'),
(3, 'Steven Tsuchida', 7, 'https://d3bzyjrsc4233l.cloudfront.net/news/Steven_Tsuchida.jpg'),
(4, 'David Charhon', 9, 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSgLflhpLHquceVR8x30YQ35wKSYK4GjIR6dIGIViTpXRPg4TCUGKB7yqhUANB7R0AC');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `IdFilm` int(11) NOT NULL,
  `Title` varchar(50) CHARACTER SET latin1 DEFAULT NULL,
  `Description` varchar(1000) CHARACTER SET latin1 DEFAULT NULL,
  `Gender` varchar(50) CHARACTER SET latin1 DEFAULT NULL,
  `ImgUrl` varchar(500) CHARACTER SET latin1 DEFAULT NULL,
  `Redirection` varchar(255) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`IdFilm`, `Title`, `Description`, `Gender`, `ImgUrl`, `Redirection`) VALUES
(5, 'Okupas', 'Llegó a la plataforma de Netflix esta serie de culto estrenada en 2000. La vida periférica de un grupo de jóvenes en medio de la violencia y la falta de oportunidades de la gran ciudad es reflejada con precisión por el director Bruno Stagnaro y protagonizada con gran realismo por Rodrigo de la Serna, Ariel Staltari y Jorge Sesán. Los 11 episodios están disponibles luego de un trabajo de remasterización y de la nueva musicalización de algunas escenas.', 'urbano', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Okupas_%28miniserie%29.jpg/320px-Okupas_%28miniserie%29.jpg', 'https://www.netflix.com/es/title/81012637'),
(6, 'Sky Rojo', 'La segunda temporada de la serie protagonizada por Lali Espósito llegó a Netflix para volver a convertirse en un éxito. Sky Rojo sigue la historia de tres trabajadoras sexuales que deciden escapar de su proxeneta luego de creer que lo asesinaron. Al descubrir que él sigue vivo, deberán luchar por su vida mientras el pasado y sus historias personales se cruzan capítulo a capítulo.', 'Drama, Accion', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaScUWPpv0pMiuq708K4ip7zPg82u21Syb5H5ohmDmMBCmkv74', 'https://www.netflix.com/es/title/81443363'),
(7, 'El resort del amor', 'Con todos los tópicos del cine romántico pochoclero, esta comediaproducida por la ganadora del Grammy Alicia Keys centra su historia en una cantante que es contratada para realizar un show en un importante evento, nada menos que la boda de su ex. Protagonizada  por Christina Milian, Jay Pharoah y Sinqua Walls, la propuesta tiene la noble misión de convertirse en un agradable entretenimiento.', 'Comedia, romántica', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0B5SK5Ex34kHqZXXGSnAWGhb3qmlU3CZKoNXonLuAlO-lQfWx', 'https://www.netflix.com/us-es/title/81076586'),
(9, 'El último mercenario', 'Esta película marca la vuelta de Jean-Claude Van Damme al cine de acción. Escrita y dirigida por David Charhon, sigue la historia de Richard Brumere, un exespía francés al que el tiempo convirtió en mercenario. Tras años de inactividad, debe volver a las andadas para salvar a un hijo que jamás conoció y aprender a ser padre en medio de un despliegue de violencia y dosis de comedia.', 'Accion', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRja27hFrfpLLDmsP5nW6klaIpRblFSd5OR9JrMTBLv5wyttep0', 'https://www.netflix.com/ar/title/81253859');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actores`
--
ALTER TABLE `actores`
  ADD PRIMARY KEY (`idActor`);

--
-- Indices de la tabla `director`
--
ALTER TABLE `director`
  ADD PRIMARY KEY (`idDirector`);

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`IdFilm`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actores`
--
ALTER TABLE `actores`
  MODIFY `idActor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `director`
--
ALTER TABLE `director`
  MODIFY `idDirector` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `IdFilm` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
