import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  name = ""
  email = ""
  feedback = ""

  Feedback = () =>{
    let data:any = {
      "name":this.name,
      "email":this.email,
      "feedback":this.feedback
    }
    console.log(data)
  }
}
