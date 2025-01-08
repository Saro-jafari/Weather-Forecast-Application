<?php
// شامل کردن فایل envLoader.php که تابع loadEnv را دارد
require_once 'envLoader.php';

// بارگذاری متغیرهای محیطی از فایل .env
loadEnv(__DIR__ . '/.env');

// دریافت API Key از متغیر محیطی
$apiKey = getenv('API_KEY');

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if (!isset($_GET['lat']) || !isset($_GET['lon'])) {
    echo json_encode(['error' => 'Latitude and Longitude are required']);
    exit;
}

$latitude = $_GET['lat'];
$longitude = $_GET['lon'];

// درخواست وضعیت کنونی هوا
$weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?lat={$latitude}&lon={$longitude}&appid={$apiKey}&units=metric";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $weatherApiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$weatherResponse = curl_exec($ch);
if ($weatherResponse === FALSE) {
    echo json_encode(['error' => 'Failed to fetch weather data: ' . curl_error($ch)]);
    exit;
}
curl_close($ch);

// درخواست پیش‌بینی وضعیت هوا
$forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={$latitude}&lon={$longitude}&appid={$apiKey}&units=metric";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $forecastApiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$forecastResponse = curl_exec($ch);
if ($forecastResponse === FALSE) {
    echo json_encode(['error' => 'Failed to fetch forecast data: ' . curl_error($ch)]);
    exit;
}
curl_close($ch);

$currentWeatherData = json_decode($weatherResponse, true);
$forecastData = json_decode($forecastResponse, true);

if (!$currentWeatherData || !$forecastData) {
    echo json_encode(['error' => 'Invalid data received from OpenWeatherMap API']);
    exit;
}

echo json_encode([
    'current_weather' => $currentWeatherData,
    'forecast' => $forecastData
]);
?>
