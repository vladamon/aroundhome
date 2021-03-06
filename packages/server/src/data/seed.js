/* @flow */

import fs from 'fs';

const collectionPrefix = null;

export default async function seed(db) {
  const collectionNames = (await db.listCollections().toArray()).map((o) => o.name);

  return Promise.all(
    collectionNames.map((file) => {
      return (async function () {
        const colName = `${collectionPrefix || ''}${file}`;
        const data = JSON.parse(fs.readFileSync(`${__dirname}/${file}.json`, 'utf8'));

        if (collectionNames.indexOf(colName) > -1) {
          console.log(`  '${colName}' dropped`);
          await db.dropCollection(colName);
        }

        const result = await db.collection(colName).insertMany(data);
        console.log(`  '${colName}' created with ${result.insertedCount} records`);
      })();
    })
  );
}