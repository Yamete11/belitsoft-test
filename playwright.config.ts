import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    workers: 1,
    timeout: 30_000,
    expect: {
        timeout: 5_000,
    },
    use: {
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',

        actionTimeout: 10_000,
        navigationTimeout: 15_000,
    },
});
