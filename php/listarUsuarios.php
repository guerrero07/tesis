<?php
include_once("database.php");

    $sql = "SELECT * FROM usuario";
    $result = mysqli_query($mysqli,$sql);
    $lista=array();

        while($res=mysqli_fetch_assoc($result))
        {
            $lista[]=$res;
        }
        echo json_encode($lista);
        
?>