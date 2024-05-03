import fs from 'fs';

// Read the JSON file
const jsonData = fs.readFileSync('tokens/tokens.json', 'utf8');
const data = JSON.parse(jsonData);

// Function to remove first-level parent objects
function removeParentObjects(obj) {
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            Object.assign(result, obj[key]);
        }
    }
    return result;
}

// Remove parent objects
const children = removeParentObjects(data);

// Write the children to a new JSON file
fs.writeFileSync('tokens/newtokens.json', JSON.stringify(children, null, 2));
