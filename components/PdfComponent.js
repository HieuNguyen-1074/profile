import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
function PdfComponent() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(2);

  function onDocumentLoadSuccess(data) {
    console.log(data);
  }

  return (
    <div>
      <Document
        file='/cv.pdf'
        onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          rotate={90}
        />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
export default PdfComponent;
