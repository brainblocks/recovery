# BrainBlocks Recovery
BrainBlocks recovery tool

# Online Version
Visit the tool using the hosted url for quick access: https://bb-recovery.onrender.com

# Local Version
1. Download recovery repository from Github
2. Navigate to recovery folder
3. Open `index.html`
4. Enter encrypted wallet ciphertext
5. Enter wallet password
6. Click `Process` button to retrieve wallet seed.

# Code Verification
Due to this recovery tool's complex nature, it was compiled into a bundle that is accessible to all. All code in bundle.js can be verified by reviewing `rai.js` and generating a `bundle.js` file using [Browserify](http://browserify.org)

1. `npm install -g browserify`
2. Navigate to `js`
3. `browserify rai.js -o bundle.js`
