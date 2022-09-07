class Disc {
  constructor(level, name) {
    this.level = level || 0;
    this.name = name || this.level;
  }
  getName() {
    return this.name;
  }
  getLevel() {
    return this.level;
  }
}
module.exports = Disc;
