/* eslint-disable no-unused-expressions */

const {expect} = require('chai');
const test = require('../app/reducers/sample');

describe('test reducer', function() {
    it('should return nothing', function() {
        const returnValue = test();
        expect(returnValue).to.be.empty;
    });
});

/* eslint-enable no-unused-expressions */
