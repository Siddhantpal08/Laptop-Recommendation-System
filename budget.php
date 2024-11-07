<?php
include 'db_connect.php';

$budget = $_POST['budget'];
$brand = $_POST['brand'] ?? '';

$sql = "SELECT * FROM laptops WHERE price <= $budget";
if (!empty($brand)) {
    $sql .= " AND brand LIKE '%$brand%'";
}
$result = $conn->query($sql);

$laptops = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $laptops[] = $row;
    }
}
$conn->close();
echo json_encode($laptops);
?>
