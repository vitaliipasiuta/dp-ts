class Directory { // composite

  private name: string;
  private includedFiles: object[] = [];

  constructor(name: string) {
    this.name = name;
  }

  add(obj: Object): void {
    this.includedFiles.push(obj);
  }

  ls(n: number): void {
    console.log(this.tabs(++n) + this.name);
    for (let i = 0; i < this.includedFiles.length; i++) {
      const obj = this.includedFiles[i];
      obj['ls'](n);
    }
  }

  private tabs(n: number): string {
    let s: string = "";
    for (let i = 0; i < n; i++) {
      s += " ";
    }

    return s;
  }

}

export default Directory;
