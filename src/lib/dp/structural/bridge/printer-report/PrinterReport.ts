interface PrinterInterface {
    printHeader(text)

    printBody(text)
}

class PdfPrinter implements PrinterInterface {
    public printHeader(text): string {
        return ' Print pdf header ' + text;
    }

    public printBody(text): string {
        return ' Print pdf body ' + text;
    }
}

class ExcelPrinter implements PrinterInterface {
    public printHeader(text): string {
        return ' Print excel header ' + text;
    }

    public printBody(text): string {
        return ' Print excel body ' + text;
    }
}

abstract class Report {
    protected printer: PrinterInterface;

    constructor(printer: PrinterInterface) {
        this.printer = printer;
    }

    printReport(header: string, body: string): string {
        return this.printer.printHeader(header) + this.printer.printBody(body);
    }
}

class WeeklyReport extends Report {
    print(header: string, body: string): void {
        console.log('Weekly report:' + this.printReport(header, body));
    }
}

export default function exampleRun(){
    let wReport = new WeeklyReport(new PdfPrinter());
    wReport.print('Header text', 'Body text');

    wReport = new WeeklyReport(new ExcelPrinter());
    wReport.print('Header text','Body text');
}