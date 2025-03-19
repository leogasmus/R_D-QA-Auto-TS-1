import { expect } from 'chai';
import { PactV3, MatchersV3 } from '@pact-foundation/pact';
import { OrderDto } from '../models/order.dto';
import { PetStoreService } from '../services/pet.service';
const { like } = MatchersV3;

describe('PactV3 PetsStore consumer tests', () => {
    let petStoreService: PetStoreService;

    // Сетапаємо контракт
    const provider = new PactV3({
        consumer: 'Pets-Web-v3',
        provider: 'Pets-API-v3'
    });

    const orderExample: OrderDto = {
        id: 6,
        petId: 5,
        quantity: 2,
        shipDate: '2025-03-17T19:06:54.907Z',
        status: 'approved',
        complete: true
    };

    const EXPECTED_BODY = like(orderExample);

    describe('create and then request a order', () => {
        it('returns the requested order', () => {
            // Arrange
            provider
                .given('order interaction')
                .uponReceiving('create a order')
                .withRequest({
                    method: 'POST',
                    path: '/v2/shop/order',
                    body: orderExample,
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    }
                })
                .willRespondWith({
                    status: 200,
                    headers: { 'content-type': 'application/json' },
                    body: EXPECTED_BODY
                })
                .uponReceiving('get a order')
                .withRequest({
                    method: 'GET',
                    path: '/v2/order/6'
                })
                .willRespondWith({
                    status: 200,
                    headers: { 'content-type': 'application/json' },
                    body: EXPECTED_BODY
                });

            return provider.executeTest(async (mockserver) => {
                // Act
                petStoreService = new PetStoreService(mockserver.url);
                const responsePost = await petStoreService.createOrder(orderExample);
                const response = await petStoreService.getOrder(6);

                // Assert
                expect(responsePost.data).to.deep.eq(orderExample);
                expect(response.data).to.deep.eq(orderExample);
            });
        });
    });
});
