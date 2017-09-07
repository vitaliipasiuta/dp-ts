class File {

  private name: string;

  constructor (name: string) {
    this.name = name;
  }

  ls(n: number): void {
    console.log(this.tabs(++n) + this.name);
  }

  private tabs(n: number): string {
    let s: string = "";
    for (let i = 0; i < n; i++) {
      s += " ";
    }

    return s;
  }

}

export default File;
