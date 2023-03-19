import supertest from 'supertest';

import app from '../index.js';

describe('GET /path1', function() {
    it('respond with hello world', function(done) {
        request(app).get('/will').expect('{ "response": "Hello World, this is a new path" }', done);
    });
});