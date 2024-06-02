// Import chai and expect
import { expect } from 'chai';
// Import node-fetch
import fetch from 'node-fetch';

describe('Main page content', () => {
    it('Should respond with Hello World', async () => {
        const response = await fetch('http://localhost:3000');
        const body = await response.text(); // Convert response to text
        expect(body).to.equal('Hello World');
    });
});

describe('HTTP Request Tests', () => {
    it('Main page status should be 200', async () => {
        const response = await fetch('http://localhost:3000');
        const statusCode = response.status;

        expect(statusCode).to.equal(200);
    });
});

describe('HTTP Request Tests', () => {
    it('About page content should be 404', async () => {
        const response = await fetch('http://localhost:3000/about');
        const statusCode = response.status;

        expect(statusCode).to.equal(404);
    });
});
