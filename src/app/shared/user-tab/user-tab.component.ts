import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/core/model/user.model';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.less']
})
export class UserTabComponent implements OnInit {

  public maleImg = 'male.png';
  public femaleImg = 'female.png';

  @Input() public user: IUser;
  constructor() { }

  ngOnInit() {
  }

}
