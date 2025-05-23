import {test, expect, request, APIRequestContext} from '@playwright/test';

const baseURL = 'https://airportgap.com/api/airports';

test.describe('Airport Gap API tests', () => {

    let apiContext: APIRequestContext;

    test.beforeEach(async () => {
        apiContext = await request.newContext();
    })

    test('Verify Airport Count', async () => {
        const response = await apiContext.get(baseURL);
        const responseBody = await response.json();

        expect(responseBody.data.length).toBe(30);
    });

    test('Verify Specific Airports', async () => {
        const response = await apiContext.get(baseURL);
        const responseBody = await response.json();
        const airportNames = responseBody.data.map((data : {attributes : any, name : string}) => data.attributes.name);

        expect(airportNames).toContain('Akureyri Airport' || 'St. Anthony Airport' || 'CFB Bagotville');

    });

    test('Verify Distance Between Airports', async () => {
        const response = await apiContext.post(baseURL + '/distance', {
            data: {
                from: 'KIX',
                to: 'NRT'
            }
        });
        const responseBody = await response.json();
        const distance = responseBody.data.attributes.kilometers;
        expect(distance).toBeGreaterThan(400);
    });
});
