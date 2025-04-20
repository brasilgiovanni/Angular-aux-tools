import { Component } from '@angular/core';
import html2pdf from 'html2pdf.js';


@Component({
  selector: 'app-generate-pdf-html2pdf',
  imports: [],
  templateUrl: './generate-pdf-html2pdf.component.html',
  styleUrl: './generate-pdf-html2pdf.component.scss'
})
export class GeneratePdfHtml2pdfComponent {

  downloadPDF() {
    const element = document.getElementById('pdf-content');
    if (!element) return;

    const opt = {
      margin:       [2.5, 3], // top/bottom, left/right em cm
      filename:     'curriculo.pdf',
      image:        { type: 'png'},
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'cm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  }
}
