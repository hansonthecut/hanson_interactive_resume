import Quartz
import Foundation

let arguments = CommandLine.arguments
if arguments.count < 2 {
    print("Usage: extract_pdf <path_to_pdf>")
    exit(1)
}

let pdfPath = arguments[1]
let url = URL(fileURLWithPath: pdfPath)

if let pdf = PDFDocument(url: url) {
    if let text = pdf.string {
        print(text)
    } else {
        print("No text found")
    }
} else {
    print("Could not load PDF")
}
