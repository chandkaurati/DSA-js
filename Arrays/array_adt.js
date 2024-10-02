class ArrayAdt {
  constructor(TotalSize, usedSize) {
    this.Array = new Array(TotalSize).fill(null);
    this.usedSize = usedSize;
    this.TotalSize = TotalSize;

    for (let i = 0; i < usedSize; i++) {
      this.Array[i] = i + 1;
    }
  }

  indexInsertion(index, element) {
    if (index > this.TotalSize) {
      return false;
    }
    if (index > this.usedSize + 2) {
      this.Array[i] = element;
    }

    for (let i = this.usedSize; i >= index; i--) {
      this.Array[i + 1] = this.Array[i];
    }

    this.Array[index] = element;
    this.usedSize += 1;
  }

  indexDeletion(index) {
    if (index > this.usedSize) {
      return false;
    }

    for (let i = index; i < this.usedSize; i++) {
      this.Array[i] = this.Array[i + 1];
    }
    this.usedSize -= 1;
  }
}

const myarry = new ArrayAdt(100, 30);
myarry.indexInsertion(1, 464634);
myarry.indexDeletion(1);
console.log(myarry);
console.log(myarry.usedSize);
