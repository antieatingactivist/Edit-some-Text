import { openDB } from 'idb';

const initdb = async () =>
  openDB('editSomeText', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('editSomeText')) {
        console.log('editSomeText database already exists');
        return;
      }
      db.createObjectStore('editSomeText', { keyPath: 'content', autoIncrement: true });
      console.log('editSomeText database created');
    },
  });


export const putDb = async (content) => {
  console.log('PUT to the database');
  const editSomeTextDb = await openDB('editSomeText', 1);
  const tx = editSomeTextDb.transaction('editSomeText', 'readwrite');
  const store = tx.objectStore('editSomeText');
  const request = store.put({ content: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
} 


export const getDb = async () => {
  console.log('GET all from the database');
  const editSomeTextDb = await openDB('editSomeText', 1);
  const tx = editSomeTextDb.transaction('editSomeText', 'readonly');
  const store = tx.objectStore('editSomeText');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  if (result.length) {
    return result[result.length - 1].content;
  }
  return;
  
};

initdb();
