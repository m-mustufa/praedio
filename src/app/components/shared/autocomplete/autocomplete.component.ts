import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  keyword = 'Title';

  data: any;
  errorMsg: string;
  isLoadingResult: boolean;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  getServerResponse(event) {

    this.isLoadingResult = true;

    this.http.get("http://www.omdbapi.com/?apikey=a0efe427&s=" + event)
      .subscribe(data => {
        if (data['Search'] == undefined) {
          this.data = [];
          this.errorMsg = data['Error'];
        } else {
          this.data = data['Search'];
        }

        this.isLoadingResult = false;
      });
  }

  searchCleared() {
    console.log('searchCleared');
    this.data = [];
  }

  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }

}