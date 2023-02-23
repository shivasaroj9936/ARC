import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  toAddFAQs(){
    this._router.navigate(['content-management/add-faqs'])
  }
}
