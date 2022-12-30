<?php
session_start();
header('Content-Type: application/json');
switch($_GET['mode']){
    case "ListFilms":
        include '../Models/peliculas_model.php';
        $list= new Peliculas();
        $response=$list->ListFlims();
        foreach($response as $row){
            $json[]=array(
                "title"=>$row['Title'],
                "img"=>$row['ImgUrl'],
                "description"=>$row['Description'],
                "gender"=>$row['Gender'],
                "redirection"=>$row['Redirection']
            );
        }
    break;
    case "ListDirector":
        include '../Models/peliculas_model.php';
        $list= new Peliculas();
        $response=$list->ListDirector();
        foreach($response as $row){
            if($row['Name']===NULL){
                $json[]=array(
                    "title"=>$row['Title'],
                    "director"=>"No esta cargado",
                    "img"=>$row['imgUrl']
                );
            }else{
                $name=$row['Name'];
                $json[]=array(
                    "title"=>$row['Title'],
                    "director"=>$name,
                    "img"=>$row['imgUrl']
                );
            }
            
        }
    break;
    case "ListActor":
        include '../Models/peliculas_model.php';
        $list= new Peliculas();
        $response=$list->ListActor();
        foreach($response as $row){
            $json[]=array(
                "title"=>$row['Title'],
                "name"=>$row['Name'],
                "img"=>$row['imgUrl']
            );
        }
    break;
    case "AddMovie":
        include '../Models/peliculas_model.php';
        $list= new Peliculas();
        $response=$list->AddMovie($_POST['title'],$_POST['gender'],$_POST['urlImg'],$_POST['description'],$_POST['redirection']);
        $json=array("error"=>"Cargado exitosamente.","errno"=>200);
    break;
}
echo json_encode($json);
?>