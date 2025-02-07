// An example of reading more than one file located in the same directory of the running code:

const fs = require('node:fs/promises')
const path = require('node:path')

const readContent = async () => {
  try {
    const filePaths = [
      path.join(__dirname, 'file1.txt'),
      path.join(__dirname, 'file2.txt')
    ];

    const Output = path.join(__dirname, 'output.txt')

     // Read files concurrently using Promise.all
     // Promise.all() allows both files to be read simultaneously, making it faster.
     const [content1, content2] = await Promise.all(
      filePaths.map(file => fs.readFile(file, { encoding: 'utf8' }))
    );

    console.log('File 1 Content:', content1);
    console.log('File 2 Content:', content2);

      // Merge contents and split by line breaks
      const mergedContentArray = content1.concat(content2).split('\n');
      console.log(mergedContentArray);

      // Sorting the array
      const sortedArray = mergedContentArray.sort((a, b) => a - b)
      console.log("Sorted array" , sortedArray)

      // write back to output file
      const data = sortedArray.join("\n")

     await fs.writeFile(Output, data)
     console.log('File written successfully')

  } catch (error) {
    console.log(error.message)
  }
}

readContent()