import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { QrCodeService } from '../qr-code.service';
import { User } from '../user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  Users?: User[];

  constructor(
    private userService: UserService,
    public qrCodeService: QrCodeService
  ) {}

  ngOnInit() {
    this.userService.getUserList().subscribe((res) => {
      this.Users = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as User),
        };
      });
    });
  }
  createCode = (user: any) => {
    this.qrCodeService.getQrCode(user);
  };
  removeUser = (user: any) => this.userService.deleteUser(user);
}
