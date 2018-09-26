import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoisting',
  templateUrl: './hoisting.component.html',
  styleUrls: ['./hoisting.component.scss']
})
export class HoistingComponent implements OnInit {
  title = 'Hoisting';

  ngOnInit(): void {
    this.example1();
    // this.example2();
    // this.example3();
  }

  example1(): void {
    function testFunction() {
      console.log(test);
    }

    var test = 123;

    testFunction();
  }

  example2(): void {
    var color = 'red';

    console.log(color);

    var testing = function() {
      console.log('first', color);
      var color = 'blue';
      console.log('second', color);
    };

    color = 'orange';

    testing();
  }

  example3(): void {
    testing();
    testing2();

    function testing() {
      console.log('here');
    }

    var testing2 = function() {
      console.log('I am here too!');
    };
  }
}
