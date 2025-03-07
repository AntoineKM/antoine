import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ESLint } from 'eslint';

// Get the directory name using ESM compatible approach
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const testDir = path.join(__dirname, 'test-lint');
  const testFilePath = path.join(testDir, 'test.tsx');
  
  // Create test directory if it doesn't exist
  if (!fs.existsSync(testDir)) {
    fs.mkdirSync(testDir, { recursive: true });
  }
  
  // Create a test file with some code that should trigger linting rules
  fs.writeFileSync(testFilePath, `
import React from 'react';

// This should trigger various linting rules
const BadComponent = (props) => {
  const unused = 'this should trigger no-unused-vars';
  
  // This should trigger react/jsx-curly-brace-presence
  return <div className="test">Hello</div>;
};

export default BadComponent;
  `);
  
  // Create a basic eslint.config.js in the test directory
  const distPath = path.relative(testDir, path.join(__dirname, 'dist/index.js'));
  fs.writeFileSync(path.join(testDir, 'eslint.config.js'), `
import antoine from '${distPath.replace(/\\/g, '/')}';

export default [
  ...antoine,
];
  `);
  
  // Now run ESLint on the test file
  try {
    const eslint = new ESLint({
      cwd: testDir
    });
    
    console.log('Running ESLint on test file...');
    const results = await eslint.lintFiles(['test.tsx']);
    
    // Format the results
    const formatter = await eslint.loadFormatter('stylish');
    const resultText = formatter.format(results);
    
    console.log(resultText);
    
    if (results[0]?.messages.length > 0) {
      console.log('✅ ESLint found issues as expected - configuration is working!');
      
      // Log the specific rules triggered
      const rules = results[0].messages.map(m => m.ruleId);
      console.log('Rules triggered:', [...new Set(rules)].join(', '));
    } else {
      console.log('❌ ESLint did not find any issues - configuration may not be working properly.');
    }
  } catch (error) {
    console.error('Error running ESLint:', error);
  }
  
  // Clean up
  console.log('Cleaning up test files...');
  fs.rmSync(testDir, { recursive: true, force: true });
}

main().catch(error => {
  console.error('Script failed:', error);
  process.exit(1);
});