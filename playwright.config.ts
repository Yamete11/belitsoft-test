import { defineConfig } from '@playwright/test';

export default defineConfig({
    workers: 1,
    testDir: './tests',
    timeout: 30_000,
    expect: {
        timeout: 5_000,
    },
    use: {
        baseURL: 'https://example.com',
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
});
