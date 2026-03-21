const ImageKit = require('imagekit');
const fs = require('fs');
const path = require('path');

const imagekit = new ImageKit({
    publicKey: "public_BIet+RR10Ruy+LKXEYPruL8qZhk=",
    privateKey: "private_1lOFbgn7FKk9aHYTJ2SHX312UFc=",
    urlEndpoint: "https://ik.imagekit.io/akpxh7r76"
});

const booksDir = 'g:/CODING/Client/challenger-classes/src/assets/books_pdf';
const files = fs.readdirSync(booksDir).filter(f => f.endsWith('.pdf'));

async function uploadFiles() {
    const results = [];
    for (const file of files) {
        console.log(`Uploading ${file}...`);
        const filePath = path.join(booksDir, file);
        const fileContent = fs.readFileSync(filePath);
        
        try {
            const response = await imagekit.upload({
                file: fileContent,
                fileName: file,
                folder: "/books/pdfs"
            });
            results.push({ name: file, url: response.url });
            console.log(`Success: ${file} -> ${response.url}`);
        } catch (error) {
            console.error(`Error uploading ${file}:`, error);
        }
    }
    fs.writeFileSync('g:/CODING/Client/challenger-classes/upload_results.json', JSON.stringify(results, null, 2));
    console.log('Upload complete. Results saved to upload_results.json');
}

uploadFiles();
