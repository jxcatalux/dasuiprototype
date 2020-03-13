import { Injectable } from '@angular/core';
import { Debtor } from './Sponsor.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource {
  private debtors: Debtor[] = [
    new Debtor(1, "Brad","Satish-1", "1990-02-12", "2012-3", "active", 123, 1, "Brad","Nancy", "2010-12-01",1, "Brad", "Fariha", "1992-08-01'"),
    new Debtor(2, "Bradel","Satishel", "1990-02-12", "2012-3", "active", 103, 2, "Brad","Nancy", "2010-12-01",2, "Bradel", "Fariha", "1992-08-01'"),
    new Debtor(3, "Jimad","Satish-2", "1990-02-12", "2012-3", "active", 113, 3, "Jimad","Nancy", "2010-12-01",3, "Jimad", "Fariha", "1992-08-01'"),
    new Debtor(4, "Brad","Satish-3", "1990-02-12", "2012-3", "active", 223, 4, "Brad","Nancy", "2010-12-01",4, "Jarih", "Fariha", "1992-08-01'"),
    new Debtor(5, "Brad","Satish-4", "1990-02-12", "2012-3", "active", 122, 5, "Brad","Nancy", "2010-12-01",5, "Kalmid", "Fariha", "1992-08-01'"),
    new Debtor(6, "manil","manil", "1990-02-12", "2012-3", "active", 124, 6, "Brad","Nancy", "2010-12-01",6, "Junail", "Fariha", "1992-08-01'"),

    new Debtor(7, "Jurisher","Jurish", "1990-02-12", "2012-3", "Inactive", 1035, 107, "Jurish","Nancy", "2010-12-01",107, "Jurish", "Fariha", "1992-08-01"),
    new Debtor(101, "Brad","Satish-5", "1990-02-12", "2012-3", "active", 1023, 1001, "Brad","Nancy", "2010-12-01",1001, "Brad", "Fariha", "1992-08-01'"),
    new Debtor(102, "Brad","Satishel-6", "1990-02-12", "2012-3", "active", 1003, 102, "Brad","Nancy", "2010-12-01",102, "Bradel", "Fariha", "1992-08-01'"),
    new Debtor(103, "Jimader","Satish", "1990-02-12", "2012-3", "active", 1013, 103, "Jimad","Nancy", "2010-12-01",103, "Jimad", "Fariha", "1992-08-01'"),
    new Debtor(104, "Brad","Satish-7", "1990-02-12", "2012-3", "active", 223, 4, "Brad","Nancy", "2010-12-01",104, "Jarih", "Fariha", "1992-08-01'"),
    new Debtor(105, "Brad","Satish-8", "1990-02-12", "2012-3", "active", 1022, 105, "Brad","Nancy", "2010-12-01",105, "Kalmid", "Fariha", "1992-08-01'"),
    new Debtor(106, "manil","manil", "1990-02-12", "2012-3", "active", 1024, 106, "Brad","Nancy", "2010-12-01",106, "Junail", "Fariha", "1992-08-01'"),

    new Debtor(107, "Obaid","Obaid", "1990-02-12", "2012-3", "Inactive", 1035, 107, "Jurish","Nancy", "2010-12-01",107, "Jurish", "Fariha", "1992-08-01")
  ];

  public getDebtors(): Observable<Debtor[]>{
    return from([this.debtors]);

  }
}
