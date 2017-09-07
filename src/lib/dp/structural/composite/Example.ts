import Row from "./columns/Row";
import Column from "./columns/Column";
import Composite from "./columns/Composite";
import Primitive from "./columns/Primitive";
import Directory from "./files/Directory";
import File from "./files/File";

class Example {

  static start(): void {
    const music: Directory = new Directory("MUSIC");
    const scorpions: Directory = new Directory("SCORPIONS");
    const dio: Directory = new Directory("DIO");
    const track1: File = new File("Don't wary, be happy.mp3");
    const track2: File = new File("track2.m3u");
    const track3: File = new File("Wind of change.mp3");
    const track4: File = new File("Big city night.mp3");
    const track5: File = new File("Rainbow in the dark.mp3");
    music.add(track1);
    music.add(scorpions);
    music.add(track2);
    scorpions.add(track3);
    scorpions.add(track4);
    scorpions.add(dio);
    dio.add(track5);
    music.ls(0);
  }

  static startColumn(): void {
    console.log("\nSTART TEST COMPOSITE PATTER \n");

    const first: Composite = new Row(1);
    const second: Composite = new Column(2);
    const third: Composite = new Column(3);
    const fourth: Composite = new Row(4);
    const fifth: Composite = new Row(5);

    first.add(second);
    first.add(third);
    third.add(fourth);
    third.add(fifth);
    first.add(new Primitive(6));
    second.add(new Primitive(7));
    third.add(new Primitive(8));
    fourth.add(new Primitive(9));
    fifth.add(new Primitive(10));

    first.traverse();

    console.log("");
    console.log("\nEND TEST COMPOSITE PATTER \n");
  }

}

export {
  Example
};
