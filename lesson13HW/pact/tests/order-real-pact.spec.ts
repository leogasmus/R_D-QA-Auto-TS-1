import { expect } from 'chai';
import { PactV3 } from '@pact-foundation/pact';
import { PetStoreService } from '../services/pet.service';

describe('PactV3 PetsStore consumer tests', () => {
    let petStoreService: PetStoreService;

    // Сетапаємо контракт
    const provider = new PactV3({
        consumer: 'Pets-Web-v3',
        provider: 'Pets-API-v3'
    });

    describe('Get an order', () => {
        it('from rea', () => {
            return provider.executeTest(async () => {
                // Act
                petStoreService = new PetStoreService('https://petstore.swagger.io/');
                const response = await petStoreService.getOrder(10);

                // Assert
                expect(response.data).to.contains.keys('id', 'petId', 'quantity', 'shipDate', 'status', 'complete');
            });
        });
    });
});
