import fetch from 'node-fetch';
import dotenv from 'dotenv';
import * as process from 'node:process';
import { Response } from 'node-fetch';

dotenv.config();
const BASE_URL = process.env.BASE_API_URL;

if (!BASE_URL) {
    throw new Error('Необхідно вказати BASE_API_URL в файлі .env');
}

interface RequestOptions {
    methods?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, string>;
    body?: unknown;
}

export async function makeRequest(endpoint: string, options: RequestOptions = {}): Promise<Response> {
    const url = `${BASE_URL}${endpoint}`;
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers
    };
    const requestOptions = {
        method: options.methods || 'GET',
        headers,
        body: options.body ? JSON.stringify(options.body) : undefined
    };

    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
        }
        return response;
    } catch (error: unknown) {
        console.error('Помилка виконання запиту:', error);
        throw error;
    }
}
