import { Component, OnInit } from '@angular/core';
import { CitiesService } from './../../services/cities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  citiesList: any[] = [];

  constructor(private citiesService: CitiesService) { }

  ngOnInit(): void {
    this.citiesService.getCities().subscribe((data: any[]) => {
      this.citiesList = data;
      console.log(this.citiesList)
    })
  }

}
