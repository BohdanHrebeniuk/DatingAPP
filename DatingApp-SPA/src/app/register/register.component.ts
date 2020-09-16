import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CompileMetadataResolver } from '@angular/compiler';
import { AuthService } from '../_services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }
// tslint:disable-next-line: typedef
register(){
  this.authService.register(this.model)
    .subscribe(() => {
      console.log('registration successful');
    }, error => {
      console.log(error);
    });
}
// tslint:disable-next-line: typedef
cancel(){
this.cancelRegister.emit(false);
console.log('cancelled');
}
}
