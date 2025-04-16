// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
// import { InputTextModule } from 'primeng/inputtext';
// import { InputTextareaModule } from 'primeng/inputtextarea';
// import { ButtonModule } from 'primeng/button';
//
// @Component({
//   selector: 'app-contact-form',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, InputTextModule,InputTextareaModule , ButtonModule],
//   templateUrl: './contact-form.component.html',
//   styleUrls: ['./contact-form.component.css']
// })
// export class ContactFormComponent {
//   contactForm: FormGroup;
//
//   constructor(private fb: FormBuilder) {
//     this.contactForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       subject: ['', Validators.required],
//       message: ['', Validators.required]
//     });
//   }
//
//   onSubmit() {
//     if (this.contactForm.valid) {
//       console.log('Form Submitted:', this.contactForm.value);
//       // Later: Connect to Spring Boot backend here
//     }
//   }
// }
// //
//
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { InputTextarea } from 'primeng/inputtextarea';
import { Button } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputText,
    InputTextarea,
    Button
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
      // TODO: add your POST request logic here
    } else {
      console.log('Form is invalid');
    }
  }
}

//
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { InputText } from 'primeng/inputtext';
// import { InputTextarea } from 'primeng/inputtextarea';
// import { Button } from 'primeng/button';
// import { CommonModule } from '@angular/common';
//
// @Component({
//   selector: 'app-contact-form',
//   standalone: true,
//   imports: [
//     CommonModule,
//     ReactiveFormsModule,
//     InputText,
//     InputTextarea,
//     Button
//   ],
//   templateUrl: './contact-form.component.html',
//   styleUrls: ['./contact-form.component.css']
// })
// export class ContactFormComponent {
//   form: FormGroup;
//   successMessage = '';
//   errorMessage = '';
//
//   constructor(private fb: FormBuilder, private contactService{
//     this.form = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       subject: ['', Validators.required],
//       message: ['', [Validators.required, Validators.minLength(10)]]
//     });
//   }
//
//   validateForm(): boolean {
//     const { name, email, message } = this.form.value;
//
//     if (!name.trim()) {
//       alert("Please enter your name.");
//       return false;
//     }
//
//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!emailPattern.test(email)) {
//       alert("Please enter a valid email address.");
//       return false;
//     }
//
//     if (message.trim().length < 10) {
//       alert("Message should be at least 10 characters.");
//       return false;
//     }
//
//     return true;
//   }
//
//   onSubmit() {
//     if (this.form.valid && this.validateForm()) {
//       const contactData: ContactForm = this.form.value;
//
//       this.contactService.sendContactForm(contactData).subscribe({
//         next: () => {
//           this.successMessage = 'Message sent successfully!';
//           this.errorMessage = '';
//           this.form.reset();
//         },
//         error: (err) => {
//           this.errorMessage = 'Something went wrong. Please try again.';
//           this.successMessage = '';
//           console.error(err);
//         }
//       });
//     } else {
//       this.errorMessage = 'Please fill in all required fields correctly.';
//       this.successMessage = '';
//     }
//   }
// }
