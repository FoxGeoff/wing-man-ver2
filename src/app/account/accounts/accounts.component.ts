import { Component, OnInit } from '@angular/core';
import { ScrollTopService } from 'src/app/scroll-top.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(    private scrollTopService: ScrollTopService) { }

  ngOnInit(): void {
    this.scrollTopService.setScrollTop();
  }

  scrollTop() {
    this.scrollTopService.setScrollTop();
    console.log('scrollTop');
  }

}
