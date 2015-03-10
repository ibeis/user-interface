<?php
$aj=0;
 
if(is_dir("upload")) {
exec('rmdir upload /s /q');
mkdir("upload");
}
else
mkdir("upload");


if (isset($_POST['submit'])) {
$count = 0;

if ($_SERVER['REQUEST_METHOD'] == 'POST'){
$validextensions = array("jpeg", "jpg", "png", "JPG");      // Extensions which are allowed.

    foreach ($_FILES['files']['name'] as $i => $name) {
	$ext = explode('.', basename($_FILES['files']['name'][$i]));   // Explode file name from dot(.)
	$file_extension = end($ext);
        if (strlen($_FILES['files']['name'][$i]) > 1 && in_array($file_extension, $validextensions)) {
            if (move_uploaded_file($_FILES['files']['tmp_name'][$i], 'upload/'.$name)) {
                $count++;
            }
        }
	
    }
$aj=1;
}

}

if($aj==1) {

$dirname = "./upload/";
$images = scandir($dirname);
$ignore = Array(".", "..");
foreach($images as $curimg){
if(!in_array($curimg, $ignore)) {
echo "<img src='./upload/$curimg' id='imageDiv'/>";
};
}     
}
?>