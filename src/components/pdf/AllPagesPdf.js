import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

export default function AllPagesPdf(props) {
  const [numPages, setNumPages] = useState(null);

  pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props; // Assuming pdfUrl is provided in props
  console.log(pdf);

  return (
    <Document
      file={pdf} // Use the AWS link directly here
      onLoadSuccess={onDocumentLoadSuccess}
      className="w-full"
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} renderMode="cors" className="w-full"/>
      ))}
    </Document>
  );
}
