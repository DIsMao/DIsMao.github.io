<?php 
$res = file_get_contents('data.json');
$data = json_decode($res,true);
$qwe2 = $_GET['2q'];

print_r($_GET['2q']) ;


// $jsonDatat = json_encode($data); $jsonDatat .= json_encode($qwe2);

$jsonDatat = str_replace("]", ", ".json_encode($qwe2)." ]", json_encode($data));

// $jsonDatat = "[ ".json_encode($data).", ".json_encode($qwe2)." ]";



 file_put_contents('data.json', $jsonDatat);

?>