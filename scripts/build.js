const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

const buildDir = path.join(__dirname, '../build');
const publicDir = path.join(__dirname, '../public');
const viewsDir = path.join(__dirname, '../views');

async function build() {
    try {
        // Clean build directory
        console.log('Cleaning build directory...');
        await fs.remove(buildDir);
        
        // Create build directory
        console.log('Creating build directory...');
        await fs.mkdir(buildDir);
        
        // Copy public files
        console.log('Copying public files...');
        await fs.copy(publicDir, path.join(buildDir, 'public'));
        
        // Copy views
        console.log('Copying views...');
        await fs.copy(viewsDir, path.join(buildDir, 'views'));
        
        console.log('Build completed successfully!');
    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1);
    }
}

build();