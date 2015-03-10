<html>
<head>
<link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
<?php
$dirname = "./upload/";
$images = scandir($dirname);
$ignore = Array(".", "..");
foreach($images as $curimg){
if(!in_array($curimg, $ignore)) {
echo "<img src='./upload/$curimg' id='imageDiv'/>";
}}
?>
</body>
</html>