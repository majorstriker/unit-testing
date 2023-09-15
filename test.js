describe("calculateDiscount", function() {

    describe("считает заданную скидку от числа price", function() {

        function makeTest(price) {
            let expected = price - (price * discount / 100);
            it(`${price} со скидкой ${discount} будет ${expected}`, function() {
                assert.equal(calculateDiscount(price, discount), expected);
            });
        }

    });

});