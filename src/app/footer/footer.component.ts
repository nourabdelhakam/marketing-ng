import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SubscrubeService } from '../subscribe.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  subscribeForm

  
  constructor(private subService: SubscrubeService, private formBuilder: FormBuilder) { 
    this.subscribeForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.subService.subscribe(this.subscribeForm.value).subscribe(x=>{
      console.log(x);
      
    })
    console.warn(this.subscribeForm.controls.email.value);
  }

}
