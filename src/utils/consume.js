// function that takes an excel file and returns two JSON objects for every sheet in the file
// the excel file that has many sheets with each sheet having three columns: key, EN, and ES
// keys with an _ use the prefix of before the _ as the key for the object
// the suffix of the _ is a key for the object 
// the first JSON object is a key-value pair of the key column EN column
// the second JSON object is a key-value pair of the key column and ES column
// the key column is the key for both JSON objects

import xlsx from 'xlsx';
import fs from 'fs';

const workbook = xlsx.readFile('./trans.xlsx');

const sheets = workbook.SheetNames;

const translations = {};

sheets.forEach((sheet) => {
    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
    const en = {};
    const es = {};
    sheetData.forEach((row) => {
        if (row.key?.includes('_')) {
            const [parentKey, nestedKey] = row.key.split('_');
            if (!en[parentKey]) {
                en[parentKey] = {};
            }
            if (!es[parentKey]) {
                es[parentKey] = {};
            }
            en[parentKey][nestedKey] = row.EN;
            es[parentKey][nestedKey] = row.ES;
        } else {
            en[row.key] = row.EN;
            es[row.key] = row.ES;
        }

    });
    translations[sheet] = { en, es };
});

fs.writeFileSync('./translations.json', JSON.stringify(translations, null, 2));
