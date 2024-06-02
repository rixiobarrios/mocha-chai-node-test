// const expect = require('fix-esm').require('chai').expect;
// const request = require('fix-esm').require('request');
// const fetch = require('node-fetch');
// const assert = require('fix-esm').require('assert');

// it('Main page content', function (done) {
//     request('http://localhost:3000', function (err, res, body) {
//         // assert.equal(body, undefined);
//         // assert.equal(body, 'Hello World');
//         expect(body).to.equal('Hello World');
//         done();
//     });
// });

// const chai = require('chai');
// const expect = chai.expect;
// const fetch = require('node-fetch');

// describe('Main page content', function () {
//     it('should respond with Hello World', async function () {
//         const response = await fetch('http://localhost:3000');
//         const body = await response.text();
//         expect(body).to.equal('Hello World');
//     });
// });

// Import chai and expect
import { expect } from 'chai';
// Import node-fetch
import fetch from 'node-fetch';

describe('Main page content', () => {
    it('should respond with Hello World', async () => {
        const response = await fetch('http://localhost:3000');
        const body = await response.text(); // Convert response to text
        expect(body).to.equal('Hello World');
    });
});
