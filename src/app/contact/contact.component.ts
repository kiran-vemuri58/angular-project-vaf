import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactData:object;

  ngOnInit(): void {
    this.contactData = [
      {
        name:"kiran vemuri",
        phone:"8331808889",
        currentCity:"chennai",
        homeTown:"nuzvid",
        email:"kiranchowdary8888@gmail.com"
      }
    ]
  }

}
