# 🚀 Auxiliary Tools for Angular 19

A demo Angular 19 application showcasing handy helper libraries for front‑end developers:

1. **PDF Generation** with two approaches  
2. **QR Code** & **Barcode** generation  
3. A simple **menu** to navigate between demos  

---

## 📦 Features

### 1. Generate PDF with `jsPDF` + `html2canvas`
- **Imports**:
  ```ts
  import { jsPDF } from 'jspdf';
  import html2canvas from 'html2canvas';
  ```
- Challenge: Single‑image capture → no automatic pagination
- Solution:
-- Manually slice the canvas into A4‑sized chunks;
-- Apply real‑world margins (2.5 cm top/bottom, 3 cm left/right);

### 1. Generate PDF with html2pdf.js
- **Imports**:
- ```ts
  import html2pdf from 'html2pdf.js';
  ```
- Benefit:
   - Simple API (.set(opts).from(element).save())
   - Built‑in pagination & margin support
   - Define explicit page breaks in your HTML template
 
### 3. Generate QR Code & Barcode
- QR Code
- ```
  import { QRCodeComponent } from 'angularx-qrcode';
  ```
- Barcode
- ```
  import { NgxBarcode6Module } from 'ngx-barcode6';
  ```
- How it works:
  - User types URL/text
  - “Generate” button becomes active
  - Renders <qrcode> or <ngx-barcode> in real time
### 4. Generate Charts with Chart JS
- Chart JS
- ```ts
  import {
    Chart,
    registerables // ✅ Required to make Chart.js work properly
  } from 'chart.js';

  // Register necessary components globally
  Chart.register(...registerables);
  ```
- How it works:
  - The application uses a mocked sales dataset, formatted as:
  - ```
    {
    year: number,      // Ex: 2010
    sales: number,     // Ex: 120
    color: string      // Ex: '#FF6384' (used to color the chart elements)
    }
    ```
  - This data is stored in a .json file and loaded through an Angular service (ChartJsService), simulating a real API.
  - After fetching the data, the component ChartsJSComponent processes it and builds:
    - ✅ Line Chart
    - ✅ Bar Chart
    - ✅ Pie Chart
    - ✅ Doughnut Chart

