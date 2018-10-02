import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public a: AppService
  ) {
    console.log(environment.production);
    console.log(environment.firebase.projectId);
  }

  ngOnInit() {
  }

}
