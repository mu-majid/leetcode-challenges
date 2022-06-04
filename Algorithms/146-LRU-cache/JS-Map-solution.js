/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  // See:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
  this.orderedMap = new Map();
  this.capacity = capacity;
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function (key) {

  if (this.orderedMap.has(key)) {
    let existingValue = this.orderedMap.get(key);

    this.put(key, existingValue);

    return existingValue;
  }

  return -1;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {

  if (this.orderedMap.has(key)) {
    // Let us Update key with new insertion order
    this.orderedMap.delete(key);
  }

  // New or existing, just set it
  this.orderedMap.set(key, value);

  if (this.orderedMap.size > this.capacity) {
    let keyLRU = this.orderedMap.keys().next().value;

    this.orderedMap.delete(keyLRU);
  }

};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/