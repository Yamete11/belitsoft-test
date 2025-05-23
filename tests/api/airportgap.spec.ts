import { test, expect, request, APIRequestContext } from '@playwright/test';
import { urls } from "../../testData";

test.describe('Airport Gap API tests', () => {
    let apiContext: APIRequestContext;

    const expectedAirportCount = 30;
    const expectedAirports = [
        'Akureyri Airport',
        'St. Anthony Airport',
        'CFB Bagotville',
    ];
    const expectedMinDistanceKm = 400;
    const FROM_AIRPORT = 'KIX';
    const TO_AIRPORT = 'NRT';


    test.beforeEach(async () => {
        apiContext = await request.newContext();
    });

    test(`Verify Airport Count is ${expectedAirportCount}`, async () => {
        const responseBody = await getRequest();
        expect(responseBody.data.length).toBe(expectedAirportCount);
    });

    test('Verify Specific Airports are present', async () => {
        const responseBody = await getRequest();
        const airportNames = responseBody.data.map((data: { attributes: any }) => data.attributes.name);

        expect(airportNames).toEqual(expect.arrayContaining(expectedAirports));
    });

    test(`Verify Distance Between Airports is > ${expectedMinDistanceKm} km`, async () => {
        const response = await apiContext.post(`${urls.airportURL}/distance`, {
            data: {
                from: FROM_AIRPORT,
                to: TO_AIRPORT,
            },
        });
        const responseBody = await response.json();
        const distance = responseBody.data.attributes.kilometers;
        expect(distance).toBeGreaterThan(expectedMinDistanceKm);
    });

    async function getRequest() {
        const response = await apiContext.get(urls.airportURL);
        return await response.json();
    }
});
