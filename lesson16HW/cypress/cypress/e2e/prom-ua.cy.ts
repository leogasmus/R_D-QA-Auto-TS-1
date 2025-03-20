describe('Prom', () => {
    beforeEach(() => {
        cy.visit('https://prom.ua/');
    });
    it('should find torch', () => {
        cy.get('[name="search_term"]').type('Ліхтарик');
        cy.get('[data-qaid="search_btn"]').click();
        const resultProductNames = '[data-qaid="product_name"]';

        cy.get(resultProductNames)
            .eq(0)
            .invoke('text')
            .should('match', /ліхтарик/i);

        cy.get(resultProductNames).each(($el) => {
            cy.wrap($el)
                .invoke('text')
                .should('match', /ліхтарик/i);
        });
    });

    it('should promote application', () => {
        cy.get('[data-qaid="show_sidebar"]').click();
        cy.get('[data-qaid="app_qrcode"]').scrollIntoView().should('be.visible');
        cy.get('[data-qaid="install_app_menu"]').then(($elements) => {
            const hasMatchingElement = [...$elements].some(($el) => {
                return Cypress.$($el).text().includes('Агов! А в додатку зручніше');
            });
            expect(hasMatchingElement).to.be.true;
        });
    });
});
