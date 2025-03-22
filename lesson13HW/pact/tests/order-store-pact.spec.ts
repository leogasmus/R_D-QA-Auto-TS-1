import { expect } from 'chai';
import { PactV3, MatchersV3, Verifier } from '@pact-foundation/pact';
import { OrderDto } from '../models/order.dto';
import { OrderService } from '../services/pet.service';
const { like } = MatchersV3;
import path from 'path';

describe('PactV3 PetsStore consumer tests', () => {
    let orderService: OrderService;

    // Сетапаємо контракт
    const provider = new PactV3({
        consumer: 'FrontEnd',
        provider: 'OrderService'
    });

    const orderExample: OrderDto = {
        id: 3,
        petId: 3,
        quantity: 3,
        shipDate: '2025-03-22T05:24:25.107+0000',
        status: 'placed',
        complete: true
    };

    const EXPECTED_BODY = like(orderExample);

    describe('Get order by Id', () => {
        it('should return the requested order', async () => {
            provider
                .given('order with ID 3 exists')
                .uponReceiving('GET request to fetch an order')
                .withRequest({
                    method: 'GET',
                    path: '/v2/store/order/3',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    }
                })
                .willRespondWith({
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                    body: EXPECTED_BODY
                });

            await provider.executeTest(async (mockServer): Promise<void> => {
                // Act
                orderService = new OrderService(mockServer.url);
                const response = await orderService.getOrder(3);

                // Assert
                expect(response.status).to.equal(200);
                expect(response.data).to.deep.equal(orderExample);
                expect(response.data).to.have.keys(['id', 'petId', 'quantity', 'shipDate', 'status', 'complete']);
            });
        });
    });

    describe('Verify provider with real API', () => {
        const BASE_URL = 'https://petstore.swagger.io';
        const pactFilePath = path.resolve(__dirname, '../pacts/FrontEnd-OrderService.json');

        it('should validate expectations against the provider', async () => {
            await new Verifier({
                providerBaseUrl: BASE_URL,
                pactUrls: [pactFilePath]
            })
                .verifyProvider()
                .then(() => {
                    console.log('Verification done!');
                });
        });
    });
});
