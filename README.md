# Lovely File System

LovelyFileSystem is a Node.js library that simplifies file system operations. The library supports folder creation, file creation, file deletion, and folder deletion.

## Installation

```bash
npm install lovely-file-system
```

## Example

```javascript
const LovelyFileSystem = require('./lovely-file-system');
const fileSystem = new LovelyFileSystem();

console.log(fileSystem.createFolder('documents'));
console.log(fileSystem.createFile('documents/file.txt', 'Hello, world!'));

console.log(fileSystem.readFile('documents/file.txt'));

console.log(fileSystem.deleteFile('file.txt'));
console.log(fileSystem.deleteFolder('documents'));

```

https://github.com/berkekurnaz/lovely-file-system

  