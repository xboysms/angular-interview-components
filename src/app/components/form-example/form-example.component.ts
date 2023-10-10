import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent implements OnInit {
  inputForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    level: new FormControl(''),
  });
  isSubmited: boolean = false;

  ngOnInit(): void {
    this.inputForm.patchValue({
      email: '',
      password: '',
      level: 'advanced'
    })
  }

  onSubmit() {
    this.isSubmited = true;
    if(this.inputForm.invalid) return;
    console.log(this.inputForm.value);
    this.isSubmited = false;
  }
}
