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

describe('HTTP Request Tests', () => {
    it('Main page status', async () => {
        const response = await fetch('http://localhost:8080');
        const statusCode = response.status;

        expect(statusCode).to.equal(200);
    });
});

describe('HTTP Request Tests', () => {
    it('About page content', async () => {
        const response = await fetch('http://localhost:8080/about');
        const statusCode = response.status;

        expect(statusCode).to.equal(404);
    });
});
