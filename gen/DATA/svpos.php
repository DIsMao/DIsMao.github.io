<?php 
$res = file_get_contents('data.json');
$data = json_decode($res,true);
$qwe1 = $_POST['pos'];
$qwe2 = $_POST['pos2']['id'];

    $data[$qwe2]['top'] = $_POST['pos']['top'];
    $data[$qwe2]['left'] = $_POST['pos']['left'];
    $data[$qwe2]['width'] = $_POST['pos']['width'];
    $data[$qwe2]['height'] = $_POST['pos']['height'];

$jsonDatat = json_encode($data);

 file_put_contents('data.json', $jsonDatat);

?>