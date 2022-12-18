import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QrCodeService {
  constructor(private http: HttpClient) {}
  qrUrl;
  getQrCode(user) {
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set(
          'X-RapidAPI-Key',
          'dcf92d8dc8mshe5ae5c7ea9b8980p1f2a61jsne255de74b6ac'
        )
        .set('X-RapidAPI-Host', 'qrcode3.p.rapidapi.com'),
      responseType: 'blob' as 'json',
    };
    const body = {
      data: 'https://localhost:4200/user-info/' + user.id,

      style: {
        module: {
          color: 'black',
          shape: 'default',
        },
        inner_eye: {
          shape: 'default',
        },
        outer_eye: {
          shape: 'default',
        },
        background: {},
      },
      size: {
        width: 200,
        quiet_zone: 4,
        error_correction: 'M',
      },
      output: {
        filename: 'qrcode',
        format: 'png',
      },
    };
    return this.http
      .post('https://qrcode3.p.rapidapi.com/qrcode/text', body, options)
      .subscribe((data: any) => {
        const file = new File([data], 'image.png', { type: 'image/png' });
        const fileURL = URL.createObjectURL(file);
        this.qrUrl = fileURL;
      });
  }
}
