const fs = require('fs').promises;
const path = require('path');

class LovelyFileSystem {
    constructor(basePath) {
        this.basePath = basePath || './'; 
    }

    async createFolder(folderName) {
        const folderPath = path.join(this.basePath, folderName);

        try {
            await fs.mkdir(folderPath);
            return `Folder Created: ${folderPath}`;
        } catch (error) {
            if (error.code === 'EEXIST') {
                return `The folder already exists: ${folderPath}`;
            }
            throw error;
        }
    }

    async createFile(fileName, fileContent) {
        const filePath = path.join(this.basePath, fileName);

        try {
            await fs.writeFile(filePath, fileContent || '');
            return `File Created: ${filePath}`;
        } catch (error) {
            if (error.code === 'EEXIST') {
                return `The file already exists: ${filePath}`;
            }
            throw error;
        }
    }

    async readFile(fileName) {
        const filePath = path.join(this.basePath, fileName);

        try {
            const content = await fs.readFile(filePath, 'utf-8');
            return content;
        } catch (error) {
            if (error.code === 'ENOENT') {
                return `File not found: ${filePath}`;
            }
            throw error;
        }
    }

    async deleteFile(fileName) {
        const filePath = path.join(this.basePath, fileName);

        try {
            await fs.unlink(filePath);
            return `File deleted: ${filePath}`;
        } catch (error) {
            if (error.code === 'ENOENT') {
                return `File not found: ${filePath}`;
            }
            throw error;
        }
    }

    async deleteFolder(folderName) {
        const folderPath = path.join(this.basePath, folderName);

        try {
            await fs.rm(folderPath, { recursive: true });
            return `Folder deleted: ${folderPath}`;
        } catch (error) {
            if (error.code === 'ENOENT') {
                return `Folder not found: ${folderPath}`;
            }
            throw error;
        }
    }
}

module.exports = LovelyFileSystem;
