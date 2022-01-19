
var hash = require('object-hash');

class Block {
    constructor(prevHash, data) {
        this.prevHash = prevHash;
        this.data = data;
        this.timeStamp = new Date();
        this.hash=this.calHash();
    }
    calHash() {
        return hash(this.prevHash+JSON.stringify(this.data)+this.timeStamp);
    }
}


const block=new Block('',{
    user:'huy',
    amount:1000
});
console.log(block);