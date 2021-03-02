import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationData: any;

  constructor(
    private profile: ProfileService
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getEducation();
  }

  // tslint:disable-next-line:typedef
  getEducation() {
    // this.profile.education().subscribe(data => {
    //   this.educationData = data.response;
    // });
    this.educationData = this.profile.education();
  }

}
