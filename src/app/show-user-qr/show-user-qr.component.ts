import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QrCodeService } from '../qr-code.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-user-qr',
  templateUrl: './show-user-qr.component.html',
  styleUrls: ['./show-user-qr.component.css'],
})
export class ShowUserQrComponent {
  constructor(
    private act: ActivatedRoute,
    public qrCodeService: QrCodeService,
    public userService: UserService
  ) {}
  user;
  getQrUrl = () => this.qrCodeService.qrUrl;
  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');
    this.userService.getUserDoc(id).subscribe((res) => {
      this.user = res;
    });
  }
}
