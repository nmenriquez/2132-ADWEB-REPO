import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation Binding';
  appName = 'This is an one-way data binding example!';

header1 = 'Number Interpolation';

  //Numeric Bindings
  n1 = 70;
  n2 = 30;
  sum = 0;
  diff = 0;
  quo = 0;
  prod = 0;

   //Property Binding
   clientName:string = 'Normalito Enriquez III';



   //Style Binding
   appliedCSSClass = 'green';
   notapplieCSSClass = false;
   myColor = 'red';


   //Two-way Data Binding
   showData($event:any){
     console.log("Button is Clicked!");
   }

   //Keyup Function
   getData(data:any){
     console.warn(data)
   }
}
