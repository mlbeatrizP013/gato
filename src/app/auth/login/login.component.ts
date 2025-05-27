import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {IonContent,IonInput,IonButton,IonCard,IonCardHeader,IonCardTitle,IonItem, IonLabel,IonCardContent} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports:[CommonModule,ReactiveFormsModule,IonButton,IonInput,IonItem,IonLabel,IonContent]
})
export class LoginComponent  implements OnInit {
  registerForm: FormGroup;

   constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
   
   register() {
    if (this.registerForm.valid) {
      console.log('Registro exitoso:', this.registerForm.value);
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {}

}
