class CustomFile {
  constructor() {
    this.isFile = false;
    this.content = '';
    this.files = new Map() // { fname: File }
  }
}

let root;
const FileSystem = function () {
  this.root = new CustomFile();
};

/** 
 * @param {string} path
 * @return {string[]}
 */
FileSystem.prototype.ls = function (path) {
  let tmpRoot = this.root;
  let files = [];
  if (path !== '/') { // if not root dir -> parse the path
    let dirs = path.split('/');

    for (let i = 1; i < dirs.length; i++) {
      tmpRoot = tmpRoot.files.get(dirs[i]);
    }
    if (tmpRoot.isFile) {
      files.push(dirs[dirs.length - 1]);
      return files;
    }
  }

  return [...tmpRoot.files.keys()].sort((a, b) => a.localeCompare(b));
};

/** 
 * @param {string} path
 * @return {void}
 */
FileSystem.prototype.mkdir = function (path) {
  let tmpRoot = this.root;
  const dirs = path.split('/'); //"/a/b/c/d" -> dirs = ['', 'a', 'b', 'c', 'd'] that's why i starts with 1
  for (let i = 1; i < dirs.length; i++) {
    if (!tmpRoot.files.has(dirs[i])) {
      tmpRoot.files.set(dirs[i], new CustomFile())
    }
    tmpRoot = tmpRoot.files.get(dirs[i]);
  }
};

/** 
 * @param {string} filePath 
 * @param {string} content
 * @return {void}
 */
FileSystem.prototype.addContentToFile = function (filePath, content) {
  let t = this.root;
  let d = filePath.split("/");
  for (let i = 1; i < d.length - 1; i++) {
    t = t.files.get(d[i]);
  }
  if (!t.files.has(d[d.length - 1])) {
    t.files.set(d[d.length - 1], new CustomFile());
  }
  t = t.files.get(d[d.length - 1]);
  t.isFile = true;
  t.content = t.content + content;
};

/** 
 * @param {string} filePath
 * @return {string}
 */
FileSystem.prototype.readContentFromFile = function (filePath) {
  let t = this.root;
  let d = filePath.split("/");
  for (let i = 1; i < d.length - 1; i++) {
    t = t.files.get(d[i]);
  }
  return t.files.get(d[d.length - 1]).content;
};

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */

var obj = new FileSystem()
var param_1 = obj.ls('/')
obj.mkdir('/a/b/c')
obj.addContentToFile('/a/b/c/d','content')
var param_4 = obj.readContentFromFile('/a/b/c/d')