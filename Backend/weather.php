<?php

require_once 'envLoader.php';


loadEnv(__DIR__ . '/.env');


$apiKey = getenv('API_KEY');

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if (!isset($_GET['city'])) {
    echo json_encode(['error' => 'City is required']);
    exit;
}

$city = $_GET['city'];

$weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?q={$city}&appid={$apiKey}&units=metric";
$weatherResponse = file_get_contents($weatherApiUrl);

if ($weatherResponse === FALSE) {
    echo json_encode(['error' => 'Failed to fetch data from OpenWeatherMap API']);
    exit;
}


echo $weatherResponse;
?>
