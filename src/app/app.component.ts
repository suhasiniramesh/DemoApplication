import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
import { ApiResponse } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  filterTerm: any;
  term: any;
  stashData: ApiResponse = {
    next_change_id: '',
    stashes: []
  };
  data: any;
  stashes: any;
  public filter: any = '';
  title = 'Path of Exile';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getStashData();
  }

  getStashData() {
    const url = 'http://localhost:3000/public-stash-tabs?id=b9799e92-0a0a-456f-b427-f4c67ed114f3';
    this.http.get(url).subscribe(res => {
      this.stashes = res;
      this.data = this.stashes[0].stashes;
    })
  }
}
