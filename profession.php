<?php
include 'db_connect.php';

$profession = $_POST['profession'] ?? '';

$sql = "SELECT * FROM laptops WHERE category = '$profession'";
$result = $conn->query($sql);

$laptops = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $laptops[] = $row;
    }
}
$conn->close();

header('Content-Type: application/json');
echo json_encode($laptops);
?>
