'use strict';

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs-extra'));
const decompress = require('decompress');

module.exports = class Compression {
    constructor(compressedFile, destination) {
        this._file = compressedFile;
        this._destination = destination;
    }

    extract() {
        return fs.ensureDirAsync(this._destination)
            .then(() => decompress(this._file, this._destination));
    }
};
