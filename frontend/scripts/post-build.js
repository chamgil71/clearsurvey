import fs from 'fs';
import path from 'path';

const src = path.join('dist', 'client', '_shell.html');
const dest = path.join('dist', 'client', 'index.html');

try {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('Successfully copied _shell.html to index.html');
  } else {
    console.warn('_shell.html not found, skipping copy.');
  }
} catch (err) {
  console.error('Error during post-build copy:', err);
  process.exit(1);
}
