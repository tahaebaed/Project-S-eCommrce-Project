import { CompanyInfoService } from './../../Services/company-info.service';
import { Component, OnInit } from '@angular/core';
import { CompanyInfo } from 'src/app/Shared Classes and types/CompanyInfo';

@Component({
  selector: 'app-About',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css'],
})
export class AboutComponent implements OnInit {
  companyInfo!: CompanyInfo;
  constructor(private compServ: CompanyInfoService) {}

  ngOnInit() {
    this.compServ
      .getCompanyInfo()
      .subscribe((data: any) => (this.companyInfo = data));
  }
}
