class ObjectPool {

  private instances: any[] = [];

  public get(key: string): any {
    return this.instances[key];
  }

  public add(object: any, key: string): void {
    this.instances[key] = object;
  }

}

export default ObjectPool;
