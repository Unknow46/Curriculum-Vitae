import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  exprienceData: any;

  constructor(
    private profile: ProfileService
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getExprience();
  }

  // tslint:disable-next-line:typedef
  getExprience() {
    // this.profile.exprience().subscribe(data => {
    //   this.exprienceData = data.response;
    // });
    this.exprienceData = this.profile.exprience();
  }

}
