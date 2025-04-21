import { Routes } from '@angular/router';

export const routes: Routes =
  [
    {
      path: '',
      loadComponent: () =>
        import('./home/home.component').then(c => c.HomeComponent)
    },
    {
      path: 'generate-pdf',
      loadComponent: () =>
        import('./generate-pdf/generate-pdf.component').then(c => c.GeneratePdfComponent)
    },
    {
      path: 'generate-html2pdf',
      loadComponent: () =>
        import('./generate-pdf-html2pdf/generate-pdf-html2pdf.component').then(c => c.GeneratePdfHtml2pdfComponent)
    },
    {
        path: 'generate-qrCode',
        loadComponent: () =>
          import('./generate-qr-code/generate-qr-code.component').then(c => c.GenerateQrCodeComponent)
      },
      {
        path: 'scanner-qrCode',
        loadComponent: () =>
          import('./scanner-qr-code/scanner-qr-code.component').then(c => c.ScannerQrCodeComponent)
      },
      {
        path: 'charts-js',
        loadComponent: () =>
          import('./charts-js/charts-js.component').then(c => c.ChartsJSComponent)
      },

  ];
