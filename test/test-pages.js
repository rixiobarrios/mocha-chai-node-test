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
