import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name = ""
  address = ""
  pincode = ""
  phone = ""
  email = ""
  username = ""
  password = ""
  confirm = ""

  signup = () =>{
    let data:any = {
    "name":this.name,
    "address":this.address,
    "pincode":this.pincode,
    "email":this.email,
    "phone":this.phone,
    "username":this.username,
    "password":this.password,
    "confirm":this.confirm
    }
    console.log(data)

    if (this.password == this.confirm) {
      alert("User registred")
    } else {
      alert("passwords doesn't match")
    }
  }  
}
