<?php
include 'db_connect.php';

$ram = $_POST['ram'] ?? '';
$storage = $_POST['storage'] ?? '';
$graphics = $_POST['graphics'] ?? '';

$sql = "SELECT * FROM laptops WHERE specifications LIKE '%$ram%' AND specifications LIKE '%$storage%' AND specifications LIKE '%$graphics%'";
$result = $conn->query($sql);

$laptops = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $laptops[] = $row;
    }
} else {
    $laptops = ['message' => 'No laptops found for these specifications.'];
}
$conn->close();
echo json_encode($laptops);
?>
    