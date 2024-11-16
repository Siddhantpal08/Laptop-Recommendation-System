<?php
header('Content-Type: application/json');
include 'db_connect.php';

$ram = $_POST['ram'] ?? '';
$storage = $_POST['storage'] ?? '';

// Ensure variables are set correctly
error_log("RAM: $ram, Storage: $storage");

$sql = "SELECT * FROM laptops WHERE specifications LIKE '%$ram%' AND specifications LIKE '%$storage%'";
error_log("SQL Query: $sql");

$result = $conn->query($sql);

$laptops = [];
if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $laptops[] = $row;
    }
} else {
    $laptops = ['message' => 'No laptops found for these specifications.'];
}
$conn->close();
echo json_encode($laptops);
?>
