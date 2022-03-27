import { DataStore } from 'notarealdb';

const store = new DataStore('./data');

module.exports = {
  sodas: store.collection('sodas')
}
