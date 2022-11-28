import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  name = ""
  address = ""
  pincode = ""
  phone = ""
  email = ""
  landmark = ""
  orderInstruction = ""

  order = () =>{
    let data:any = {
    "name":this.name,
    "address":this.address,
    "pincode":this.pincode,
    "email":this.email,
    "phone":this.phone,
    "landmark":this.landmark,
    "orderInstruction":this.orderInstruction
    }
    console.log(data)
  }
}
