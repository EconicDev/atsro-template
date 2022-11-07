// function that takes an excel file and returns two JSON objects for every sheet in the file
// the excel file that has many sheets with each sheet having three columns: key, EN, and ES
// keys with an _ use the prefix of before the _ as the key for the object
// the suffix of the _ is a key for the object 
// the first JSON object is a key-value pair of the key column EN column
// the second JSON object is a key-value pair of the key column and ES column
// the key column is the key for both JSON objects

import xlsx from 'xlsx';
import fs from 'fs';

const workbook = xlsx.readFile('./Traducciones Encarnación Services SRL.xlsx');

const sheets = workbook.SheetNames;

const translations = {};

const setNestedValue = (row, lang, parent, listOfKeys) => {
    if (listOfKeys.length === 2) {
        const [parentKey, nestedKey] = listOfKeys;
        if (!parent[parentKey]) {
            parent[parentKey] = {};
        }
        parent[parentKey][nestedKey] = row[lang];
        return parent;
    } else {
        const key = listOfKeys.shift();
        if (!parent[key]) {
            parent[key] = {};
        }
        parent[key] = setNestedValue(row, lang, parent[key], listOfKeys);
        return parent;
    }
};

sheets.forEach((sheet) => {
    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
    const en = {};
    const es = {};
    sheetData.forEach((row) => {
        if (!row.key) {
            const key = row.ES?.replace(/\./g, '').replace(/\r\n/g, ' ').trim();
            const esScrub = row.ES.replace(/\r\n/g, ' ').trim();
            const enScrub = row.EN ? row.EN.replace(/\r\n/g, ' ').trim() : null;
            en[key] = enScrub || esScrub;
            es[key] = esScrub;
        } else if (row.key?.includes('_')) {
            const arrayOfKeys = row.key.split('_');
            setNestedValue(row, 'EN', en, [...arrayOfKeys]);
            setNestedValue(row, 'ES', es, [...arrayOfKeys]);
        } else {
            en[row.key] = row.EN;
            es[row.key] = row.ES;
        }

    });
    translations[sheet] = { en, es };
});

fs.writeFileSync('./translations.json', JSON.stringify(translations, null, 2));
