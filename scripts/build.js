const fs = require('fs-extra');
const path = require('path');

async function build() {
    const buildDir = path.join(__dirname, '../build');
    const publicDir = path.join(__dirname, '../public');
    const viewsDir = path.join(__dirname, '../views');

    try {
        // Clean and create build directory
        await fs.remove(buildDir);
        await fs.ensureDir(buildDir);

        // Copy files
        await fs.copy(publicDir, path.join(buildDir, 'public'));
        await fs.copy(viewsDir, path.join(buildDir, 'views'));

        console.log('Build completed successfully!');
    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1);
    }
}

build();