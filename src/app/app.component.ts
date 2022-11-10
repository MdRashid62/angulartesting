import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Template Driven Forms';
  countryList: country[] = [
    new country("1", "India"),
    new country("2", "USA"),
    new country("2", "England")
  ];
  onSubmit(contactForm: { value: any; }) {
    console.log(contactForm.value);
  }

  ngOnInit() {
    
  }
}


export class country {
  id:string;
  name:string;

  constructor(id:string, name:string) {
    this.id = id;
    this.name = name;
  }
}

export class contact {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  isMarried: boolean;
  country: string;
  address: {
    city: string;
    street: string;
    pincode: string;
  }
}

ngOnInit() {

}




