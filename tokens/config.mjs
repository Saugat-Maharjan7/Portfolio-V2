import StyleDictionary from "style-dictionary-utils"
const myParser = {
  pattern: /\.json$/,
  parse: ({ filePath, contents }) => {
    return JSON.parse(contents);
  }
}
const config={
  source:["tokens/newtokens.json"],
  platforms:{
    css:{
      buildPath:"styles/tokenvariables/",
      transformGroup:"css",
      files:[
        {
          format:"css/variables",
          destination:"tokens.css",
          options:{
            outputReferences:true,
            parent:false,
          }
        }
      ],
      
    }
  }
}

const sd=StyleDictionary.extend(config);
sd.buildAllPlatforms()

StyleDictionary.registerParser({
  pattern: /\.json$/,
  parse: ({ filePath, contents }) => {
    return JSON.parse(contents);
  }
});