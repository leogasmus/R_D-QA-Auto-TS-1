const testCases = {
    TC1: {
        description: 'Add new item in cart',
        priority: 'High',
        status: true,
        steps: ['Click on item in list', 'Click on "Add to cart" button']
    },
    TC2: {
        description: 'Delete item from cart',
        priority: 'High',
        status: false,
        steps: ['Open cart', 'Click on delete button', 'Agree to delete item from cart']
    },
    TC3: {
        description: 'Proceed to payment in the cart',
        priority: 'High',
        status: true,
        steps: ['Open cart', 'Click on Pay button']
    },
    TC4: {
        description: 'Remove item in favorites',
        priority: 'Low',
        status: true,
        steps: ['Click on Favorites', 'Click on delete button']
    },
    setStatus(testCase, status) {
        this[testCase].status = status;
    },
    showInfo: function () {
        for (let key in this) {
            if (key.startsWith('TC')) {
                console.log(`${key}: ${this[key].description}`);
                console.log(`Priority: ${this[key].priority}`);
                console.log(`Status: ${this[key].status ? 'Passed' : 'Failed'}`);
                console.log('Steps:');
                this[key].steps.forEach((step, index) => {
                    console.log(`  ${index + 1}. ${step}`);
                });
                console.log('======');
            }
        }
    }
};

testCases.showInfo();
console.log('\nChange status\n');
testCases.setStatus('TC1', false);
testCases.setStatus('TC3', false);
testCases.setStatus('TC4', false);
testCases.showInfo();
