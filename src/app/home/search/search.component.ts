import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchType = 1;
  public searchForm = null;
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSearch() {
    this.router.navigate(['results'], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate([''], {relativeTo: this.route});
  }

  changeSearchType(newType: number) {
    this.searchType = Number(newType);
    //this.changePage(1);
  }
  onSubmit(){
    
  }
}
