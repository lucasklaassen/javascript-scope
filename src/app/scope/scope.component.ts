import { Component, OnInit } from '@angular/core';

var globalVariable = 'Look at me, I\'m global!';

@Component({
  selector: 'app-scope',
  templateUrl: './scope.component.html',
  styleUrls: ['./scope.component.scss']
})
export class ScopeComponent implements OnInit {
  title = 'Scope';

  ngOnInit(): void {
    this.example1();
    // this.example2();
  }

  example1(): void {
    function myFunction() {
      var carName = 'Volvo';
      // code here CAN use carName
    }

    console.log(carName);
  }

  example2(): void {
    var color = 'red';

    console.log('first', color);

    var test = function() {
      console.log('second', color);
      color = 'blue';
      console.log('third', color);
    };

    color = 'orange';

    test();

    console.log(globalVariable);
  }
}
