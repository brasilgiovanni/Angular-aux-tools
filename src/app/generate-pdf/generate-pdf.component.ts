import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-generate-pdf',
  imports: [],
  templateUrl: './generate-pdf.component.html',
  styleUrl: './generate-pdf.component.scss'
})
export class GeneratePdfComponent {
  downloadPDF() {
    const content = document.getElementById('pdf-content');
    if (!content) return;
  
    html2canvas(content, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
  
      const pdf = new jsPDF('p', 'mm', 'A4');
      const pageWidth = 210;
      const pageHeight = 297;
  
      // Margens personalizadas
      const marginLeft = 25;  // 2.5 cm
      const marginTop = 20;   // 2.0 cm
      const marginRight = 25;
      const marginBottom = 20;

      // tamanho da página utilizável
      const usableWidth = pageWidth - marginLeft - marginRight;
      const usableHeight = pageHeight - marginTop - marginBottom;
  
      const imgProps = pdf.getImageProperties(imgData);
      const imgWidth = usableWidth;
      const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
  
      let position = marginTop;
  
      // Primeira página
      pdf.addImage(imgData, 'PNG', marginLeft, position, imgWidth, imgHeight);
  
      pdf.save('curriculo.pdf');
    });
  }
}
