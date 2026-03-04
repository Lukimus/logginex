
const chai = require('chai');
const request = require('supertest');
const app = require('../src/main');

const expect = chai.expect;

describe('Counter API', () => {

  it('resetoi kounterin', async () => {
    const res = await request(app).get('/counter-reset');
    expect(res.status).to.equal(200);
    expect(res.body.count).to.equal(0);
  });

  it('counter arvo nousee', async () => {
    const res = await request(app).get('/counter-increase');
    expect(res.status).to.equal(200);
    expect(res.body.count).to.equal(1);
  });
  
  it('pystyykö lukemaan counterin', async () => {
    const res = await request(app).get('/counter-read');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('count');
  });

});