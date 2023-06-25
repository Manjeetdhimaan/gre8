import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
