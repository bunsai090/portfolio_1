const fs = require('fs');
const path = require('path');

const directory = 'c:\\Personal Project\\portfolio_1\\src';

const colorMap = [
  // Primary Backgrounds -> Surface (#0F1416)
  { regex: /#232127/ig, replacement: '#0F1416' },
  { regex: /#23222a/ig, replacement: '#0F1416' },
  { regex: /#242424/ig, replacement: '#0F1416' },
  
  // Accents -> Primary Accent (#61DAFB)
  { regex: /#00bcd4/ig, replacement: '#61DAFB' },
  { regex: /#10b981/ig, replacement: '#61DAFB' },
  { regex: /#4ade80/ig, replacement: '#61DAFB' },
  { regex: /rgba\(\s*16\s*,\s*185\s*,\s*129/ig, replacement: 'rgba(97, 218, 251' }, // old rgb for #10b981
  
  // Card/Surface Backgrounds -> Surface Bright (#343A3C) or Container Low (#171C1E)
  { regex: /#18171d/ig, replacement: '#171C1E' },
  { regex: /#2a2831/ig, replacement: '#171C1E' },
  { regex: /#393843/ig, replacement: '#343A3C' },
  { regex: /rgba\(\s*42\s*,\s*40\s*,\s*49/ig, replacement: 'rgba(52, 58, 60' }, // equivalent to #343A3C
  { regex: /rgba\(\s*35\s*,\s*34\s*,\s*42/ig, replacement: 'rgba(23, 28, 30' }, // equivalent to #171C1E
  
  // Text -> On-Surface (#ffffff)
  { regex: /#bcbcbc/ig, replacement: '#ffffff' }
];

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walkDir(file));
    } else { 
      if (file.endsWith('.css') || file.endsWith('.jsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walkDir(directory);
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  colorMap.forEach(map => {
    content = content.replace(map.regex, map.replacement);
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file}`);
  }
});
console.log('Color replacement complete.');
