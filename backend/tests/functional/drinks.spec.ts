import { test } from '@japa/runner'
import { expect } from 'chai';

test.group('Category', (group) => {

  test('Get all categories', async ({client}) => {
    const response = await client.get('/api/v1/categories')
    expect(response.status()).to.equal(200);
    expect(response.body()).to.be.an('array');
    const firstCategory = response.body()[0];
    expect(firstCategory).to.have.property('id');
    expect(firstCategory).to.have.property('name');
    expect(firstCategory).to.have.property('created_at');
    expect(firstCategory).to.have.property('updated_at');  
  })
});


test.group('Drink', (group) => {
  test('Get all drinks', async ({client}) => {
    const response = await client.get('/api/v1/drinks')
    expect(response.status()).to.equal(200);
    expect(response.body()).to.be.an('array');
    const firstCategory = response.body()[0];
    expect(firstCategory).to.have.property('id');
    expect(firstCategory).to.have.property('name');
    expect(firstCategory).to.have.property('details');
    expect(firstCategory).to.have.property('image');
    expect(firstCategory).to.have.property('category');
    expect(firstCategory).to.have.property('created_at');
    expect(firstCategory).to.have.property('updated_at');  
  })

  test('Get all drinks category', async ({client}) => {
    const response = await client.get('/api/v1/drinks?categoryId=5')
    expect(response.status()).to.equal(200);
    expect(response.body()).to.be.an('array');
    const firstCategory = response.body()[0];
    expect(firstCategory).to.have.property('id');
    expect(firstCategory).to.have.property('name');
    expect(firstCategory).to.have.property('details');
    expect(firstCategory).to.have.property('image');
    expect(firstCategory).to.have.property('category');
    expect(firstCategory).to.have.property('created_at');
    expect(firstCategory).to.have.property('updated_at');  
  })
});