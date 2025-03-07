import { execSync } from 'child_process';

try {
  console.log('Testing ESLint config on test-lint.tsx...');
  const result = execSync('npx eslint test-lint.tsx --format stylish', { 
    encoding: 'utf8',
    stdio: 'pipe'
  });
  console.log(result);
  console.log('✅ ESLint ran successfully');
} catch (error) {
  console.log('ESLint found issues (this is expected for our test file):');
  console.log(error.stdout);
  
  // Check if we got the expected errors
  if (error.stdout.includes('@typescript-eslint/no-unused-vars') && 
      error.stdout.includes('react/jsx-curly-brace-presence')) {
    console.log('✅ ESLint config is working properly!');
  } else {
    console.error('❌ Did not find expected lint errors. Something may be wrong with the config.');
  }
}