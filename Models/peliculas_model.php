<?php
include 'credenciales.php';
class Peliculas{
    public $response,$db;
    public function Connect(){
        $this->db= new mysqli(HOST,USER,PASS,BD);
        if($this->db->connect_errno){
            return $this->db->connect_error;
            exit();
        }
    }
    public function AddMovie($title,$redirection,$description,$gender,$img){
        $this->Connect();
        $this->response=$this->db->query(
            "INSERT INTO `peliculas` (`IdFilm`, `Title`, `Description`, `Gender`, `ImgUrl`, `Redirection`) VALUES (NULL, '$title', '$description', '$gender', '$img', '$redirection');"
        );
        if($this->db->errno){
			echo "<h1>".$this->db->error."</h1>";
			exit();
		}else{
            return $this->response;
        }
    }
    public function ListFlims(){
        $this->Connect();
        $this->response=$this->db->query(
            "SELECT * FROM `peliculas` as p ORDER BY `p`.`title` ASC"
        );
        if($this->db->errno){
			echo "<h1>".$this->db->error."</h1>";
			exit();
		}else{
            return $this->response;
        }
    }
    public function ListDirector(){
        $this->Connect();
        $this->response=$this->db->query(
            "SELECT d.Name,p.Title,d.imgUrl FROM `peliculas` as p INNER JOIN director as d Where d.DirectedMovies= p.IdFilm ORDER BY `d`.`Name` ASC;"
        );
        if($this->db->errno){
			echo "<h1>".$this->db->error."</h1>";
			exit();
		}else{
            return $this->response;
        }
    }
    public function ListActor(){
        $this->Connect();
        $this->response=$this->db->query(
            "SELECT a.Name,p.Title,a.imgUrl FROM `peliculas` as p INNER JOIN actores as a Where a.idFilms= p.IdFilm ORDER BY `a`.`Name` ASC;"
        );
        if($this->db->errno){
			echo "<h1>".$this->db->error."</h1>";
			exit();
		}else{
            return $this->response;
        }
    }
    public function ListEpisode($id){
        $this->Connect();
        $this->response=$this->db->query(
            "SELECT * FROM capitulos as c INNER JOIN peliculas as p ON p.Title=c.Title WHERE p.IdFilm= $id ORDER BY c.num_episode ASC;"
        );
        if($this->db->errno){
			echo "<h1>".$this->db->error."</h1>";
			exit();
		}else{
            return $this->response;
        }
    }
}
?>