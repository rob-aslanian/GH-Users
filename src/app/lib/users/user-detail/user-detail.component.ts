import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'gh-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  btnIcon = faArrowLeft;
  userName: string;
  user$: Observable<IUser>;

  constructor(
    private readonly router: ActivatedRoute,
    private readonly userService: UserService,
    private readonly location: Location
  ) {}

  ngOnInit(): void {
    this.userName = this.router.snapshot.paramMap.get('name');
    this.user$ = this.getUser();
  }

  back = () => this.location.back();

  getUser(): Observable<IUser> {
    return this.userService.getUser(this.userName);
  }
}
