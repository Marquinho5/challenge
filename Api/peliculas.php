<?php
session_start();

require_once __DIR__.'\vendor\autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
include 'credentials.php';
function validate($json){
    $payload=[
        "exp"=> EXP,
        "iat"=> IAT,
        "info"=> $json
    ];
    
    $encode=JWT::encode($payload, KEY, 'HS256');
    $decoded = JWT::decode($encode, new Key(KEY, 'HS256'));
    return $decoded;
}
header('Content-Type: application/json');
switch($_GET['mode']){
    case "ListFilms":
        include '../Models/peliculas_model.php';
        $list= new Peliculas();
        $response=$list->ListFlims();
        foreach($response as $row){
            $json[]=array(
                "id"=>$row['IdFilm'],
                "title"=>$row['Title'],
                "img"=>$row['ImgUrl'],
                "description"=>$row['Description'],
                "gender"=>$row['Gender'],
                "redirection"=>$row['Redirection']
            );
        }
        $body=validate($json);
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
        $body=validate($json);
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
        $body=validate($json);
    break;
    case "ListEpisode":
        include '../Models/peliculas_model.php';
        $list= new Peliculas();
        $id=$_GET['id'];
        $response=$list->ListEpisode($id);
        foreach($response as $row){
            $json[]=array(
                "title"=>$row['Title'],
                "duration"=>$row['Duration'],
                "Url"=>$row['Url'],
                "img"=>$row['ImgUrl'],
                "numEpisode"=>$row['num_episode']
            );
        }
        $body=validate($json);
    break;
    case "AddMovie":
        include '../Models/peliculas_model.php';
        $list= new Peliculas();
        $response=$list->AddMovie($_POST['title'],$_POST['gender'],$_POST['urlImg'],$_POST['description']);
        $json=array("error"=>"Cargado exitosamente.","errno"=>200);
        $payload=[
            "exp"=> EXP,
            "iat"=> IAT,
            "info"=> $json
        ];
        
        $encode=JWT::encode($payload, KEY, 'HS256');
        $body=$encode;
    break;
    
}
//print_r($decoded);
echo json_encode($body);
?>

