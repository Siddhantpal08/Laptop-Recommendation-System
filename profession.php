<?php
include 'db_connect.php';

$profession = $_POST['profession'] ?? ''; // Prepare and bind 
$stmt = $conn->prepare("SELECT brand, model, specifications, price FROM laptops WHERE category = ?"); 
$stmt->bind_param("s", $profession); // Execute the statement 
$stmt->execute(); // Get the result $result = 
$stmt->get_result(); 
$laptops = array(); 
while ($row = $result->fetch_assoc()) { 
    $laptops[] = $row; } // Return the data in JSON format 
echo json_encode($laptops);
?>
