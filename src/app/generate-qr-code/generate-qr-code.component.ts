import { Component } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';
import { NgxBarcode6Module } from 'ngx-barcode6';

@Component({
  selector: 'app-generate-qr-code',
  imports: [QRCodeComponent, NgxBarcode6Module],
  templateUrl: './generate-qr-code.component.html',
  styleUrl: './generate-qr-code.component.scss'
})
export class GenerateQrCodeComponent {
  public myAngularxQrCode: string = "";
  public myBarcode: string = "";

  public qrcodeDisabled: boolean = true;
  public barcodeDisabled: boolean = true;

  onInputChange(value: string, type: 'qrcode' | 'barcode') {
    const isEmpty = value.trim() === '';

    if (type === 'qrcode') {
      this.qrcodeDisabled = isEmpty;
      if (isEmpty) this.myAngularxQrCode = '';
    }

    if (type === 'barcode') {
      this.barcodeDisabled = isEmpty;
      if (isEmpty) this.myBarcode = '';
    }
  }

  onGenerate(type: string, value: string) {
    switch (type) {
      case 'qrcode':
        this.myAngularxQrCode = value;
        break;
      case 'barcode':
        this.myBarcode = value;
        break;
      default:
        console.warn('Tipo desconhecido:', type);
    }
  }
}