import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent {
  constructor(
    private router: Router,
    private act: ActivatedRoute,
    public userService: UserService
  ) {}
  user;
  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');
    this.userService.getUserDoc(id).subscribe((res) => {
      this.user = res;
    });
  }
}
