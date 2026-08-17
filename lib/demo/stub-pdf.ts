/** A one-page PDF so Generate PDF always returns a document in demo. */
export function stubInvoicePdf(invoiceNumber = "QT-1044") {
    const label = `Quittance ${invoiceNumber}`.slice(0, 40);
    const stream = `BT /F1 18 Tf 72 720 Td (${label}) Tj ET`;
    const body = `%PDF-1.4
1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj
2 0 obj<</Type/Pages/Count 1/Kids[3 0 R]>>endobj
3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 612 792]/Contents 4 0 R/Resources<</Font<</F1 5 0 R>>>>>>endobj
4 0 obj<</Length ${stream.length}>>stream
${stream}
endstream
endobj
5 0 obj<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>endobj
trailer<</Size 6/Root 1 0 R>>
%%EOF`;
    return new Blob([body], { type: "application/pdf" });
}
