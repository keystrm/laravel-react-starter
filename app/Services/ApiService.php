<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class ApiService
{
    protected $baseUrl;

    public function __construct()
    {
        $this->baseUrl = config('services.api.base_url');
    }

    public function get($endpoint, $params = [])
    {
        $url = $this->baseUrl . $endpoint;
        $response = Http::get($url, $params);

        if ($response->successful()) {
            return $response->json();
        }

        throw new \Exception('Failed to fetch data from ' . $url);
    }

    public function post($endpoint, $data = [])
    {
        $url = $this->baseUrl . $endpoint;
        $response = Http::post($url, $data);

        if ($response->successful()) {
            return $response->json();
        }

        throw new \Exception('Failed to post data to ' . $url);
    }

    // Add more methods for other HTTP verbs if needed
}
