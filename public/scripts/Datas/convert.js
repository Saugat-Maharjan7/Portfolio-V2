const XLSX = require('xlsx');
const fs = require('fs');

// Load the XLSX file
const workbook = XLSX.readFile('Projects.xlsx');

// Select the first sheet
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert the worksheet to an array of objects
const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

// Extract headers
const headers = data.shift();

// Helper function to check if a value contains multiple items
const hasMultipleItems = value => typeof value === 'string' && value.startsWith('"') && value.endsWith('"') && value.includes(',');

// Convert array of arrays to array of objects
const projects = data.map(row => {
    const obj = {};
    headers.forEach((header, index) => {
        const value = row[index];
        if (hasMultipleItems(value)) {
            // If the value contains multiple items, split it into an array
            const valueArray = value.split(',').map(item => {
                // Remove leading and trailing spaces and surrounding double quotes
                return item.trim().replace(/^"|"$/g, '');
            });
            // Assign the cleaned array to the object
            obj[header] = valueArray;
        } else {
            obj[header] = value;
        }
    });


    // Iterate through all headers to check for linked sheets
    Object.keys(obj).forEach(header => {
        if (typeof obj[header] === 'string' && obj[header].startsWith('Linked')) {
            // Extract the linked sheet name from the column data
            const linkedSheetName = obj[header].split(',')[1].trim();
            if (linkedSheetName) {
                // Check if the linked sheet exists in the workbook
                if (workbook.SheetNames.includes(linkedSheetName)) {
                    // If the linked sheet exists, process it and assign it to the main object
                    const linkedSheet = workbook.Sheets[linkedSheetName];
                    const linkedData = XLSX.utils.sheet_to_json(linkedSheet, { header: 1 });
                    const headersLinked = linkedData.shift(); // Extract headers from linked sheet
                    obj[header] = linkedData.map(row => {
                        const linkedObj = {};
                        headersLinked.forEach((linkedHeader, index) => {
                            linkedObj[linkedHeader] = row[index];
                        });
                        return linkedObj;
                    });
                } else {
                    // If the linked sheet does not exist, log a warning
                    console.warn(`Linked sheet '${linkedSheetName}' not found for header '${header}'.`);
                }
            } else {
                // If the linked sheet name is not provided, log a warning
                console.warn(`Linked sheet name not provided for header '${header}'.`);
            }
        }
    });


    // Group headers with underscores under the main object
    Object.keys(obj).forEach(header => {
        if (header.includes('_')) {
            const keys = header.split('_');
            let currentObj = obj;
            keys.forEach((key, index) => {
                if (index === keys.length - 1) {
                    // If it's the last key, assign the value
                    currentObj[key] = obj[header];
                } else {
                    // If not the last key, create the object if it doesn't exist
                    if (!currentObj[key]) currentObj[key] = {};
                    // Move to the next level
                    currentObj = currentObj[key];
                }
            });
            // Delete the original header
            delete obj[header];
        }
    });

    return obj;
});

// Write the array as a JavaScript file
const jsContent = `export const projects = ${JSON.stringify(projects, null, 2)
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/"([^"]+)"/g, "'$1'")
    .replace(/"/g, "'")
};`;

fs.writeFileSync('newprojects.js', jsContent);

console.log('Conversion completed. Data written to newprojects.js');
