class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    if (this.count / this.capacity > .7) {
      this.resize();
    }
    const index = this.hashMod(key);
    let curr = this.data[index];

    while(curr && curr.key !== key) {
      curr = curr.next;
    }
    if (curr) {
      curr.value = value;
    } else {
      const pear = new KeyValuePair(key, value);
      if (this.data[index]) pear.next = this.data[index];
      this.data[index] = pear;
      this.count++
    }
  }


  read(key) {
    const index = this.hashMod(key);
    let curr = this.data[index];
    while(curr && curr.key !== key) {
      curr = curr.next;
    }
    if (!curr) return;
    return curr.value
  }


  resize() {
    // hash table property changes should occur first:
    // copy data to preserve old elements
    let oldData = this.data;
    // reassign capacity to double its previous value
    this.capacity *= 2;
    // re-instantiate data to an array with its new size filled with null
    this.data = new Array(this.capacity).fill(null);
    // reset count (calling insert will re-increment count)
    this.count = 0;

  // iterate over old data
    for (let i = 0; i < oldData.length; i++) {
      // iterate over each element in old data, looking for nested nodes
      let curr = oldData[i];

      while (curr) {
        this.insert(curr.key, curr.value);
        curr = curr.next;
      }
      // insert every node back into our new data buckets
    }
  }


  delete(key) {
    const index = this.hashMod(key);
    let curr = this.data[index];
    if (!curr) return "Key not found";
    curr = undefined;

    this.count--;


  }



  // for(let i = 0; i < this.data.length; i++) {
  //   let curr = this.data[i];
  //   while(curr && curr.key !== key){
  //     console.log(curr)
  //     curr = curr.next;
  //   }
  //   curr = null;
  // }
  //   const index = this.hashMod(key);
  //   let curr = this.data[index];
  //   if (!curr) return "Key not found";
  //   let next = curr.next;
  //   console.log(next);

  // this.count--;
  // return `Key not found`
}


module.exports = HashTable;
