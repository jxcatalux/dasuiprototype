import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { DebtorRepository } from '../_models/debtor.repository';
import { Debtor } from '../_models/Sponsor.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading = false;
  users: User[];

  public itemsreturned = null;
  public debtorsPerPage = 4;
  public selectedPage = 1;
  public searchType = 1;
  public lastName = null;
  public searchForm: FormGroup;


  constructor(private userService: UserService,
              private repository: DebtorRepository,
              private formBuilder: FormBuilder) {    }

  ngOnInit() {
      this.loading = true;
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.loading = false;
          this.users = users;
      });
      this.initForm() ;

  }

  onSubmit(form: FormGroup){
    this.searchForm = form;
    console.log(form);
    this.lastName = form.get('lastname').value;
    this.itemsreturned = this.repository.getDetors(this.searchType, this.lastName).length;
    console.log(this.lastName);
    console.log(this.itemsreturned);
    
   //this.searchForm.reset();
}

initForm() {
    

    this.searchForm = new FormGroup({
       'searchtype': new FormControl(),
       'PersonID': new FormControl(),
       'firstname': new FormControl(),
       'lastname': new FormControl(),
       'dateofbirth': new FormControl(),
       'immigartionNo': new FormControl()

    })
}

  onSearch(lastname: string) {
    //this.router.navigate(['results'], {relativeTo: this.route});
    this.lastName = lastname;
  }

  onCancel(form) {
    this.searchForm = form;
    this.searchForm.reset();
    this.itemsreturned = null;
  }

  changeSearchType(newType: number) {
    this.searchType = Number(newType);
    //this.changePage(1);
  }

  get debtors(): Debtor[] {
    //return this.repository.getProducts(this.selectedCategory);

    let pageIndex = (this.selectedPage - 1) * this.debtorsPerPage
    return this.repository.getDetors(this.searchType, this.lastName)
        .slice(pageIndex, pageIndex + this.debtorsPerPage);

}


changePage(newPage: number) {
  this.selectedPage = newPage;
}
changePageSize(newSize: number) {
  this.debtorsPerPage = Number(newSize);
  this.changePage(1);
}
get pageNumbers(): number[] {
return Array(Math.ceil(this.repository
    .getDetors(this.searchType, this.lastName).length / this.debtorsPerPage))
        .fill(0).map((x, i) => i + 1);
}


}
