<?php 
$res = file_get_contents('data.json');
$data = json_decode($res,true);
$id = $_POST['del']['id'];

    $data[$id]['wrk'] =  $_POST['del']['wrk'];

$jsonDatat = json_encode($data);

 file_put_contents('data.json', $jsonDatat);

?>