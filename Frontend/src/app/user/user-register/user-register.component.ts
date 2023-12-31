import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserForRegister } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private alertify: AlertifyService) { }

  registrationForm!: FormGroup;
  user!: UserForRegister;
  userSubmitted: boolean = false;


  ngOnInit() {
    // this.registrationForm = new FormGroup({
    //   userName: new FormControl(null, Validators.required ),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmpassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // }, this.passwordMatchingValidator);
    // this.registrationForm.controls['userName'].setValue("Ravindu");
    this.createRegistrationForm()
  }

  createRegistrationForm(){
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmpassword: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.maxLength(10)]],
    },{Validators: this.passwordMatchingValidator})
  }

  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmpassword')?.value ? null :
      { notmatched: true }
  };

  onSubmit(){
    console.log(this.registrationForm);
    this.userSubmitted = true;
    if(this.registrationForm.valid){
      //this.user = Object.assign(this.user, this.registrationForm.value);
      this.authService.registerUser(this.userData()).subscribe(() => {
        this.registrationForm.reset();
        this.userSubmitted = false;
        this.alertify.success('Congratz, You are successfully registered');
      });
    }
  }

  userData():UserForRegister{
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value,
    }
  }

  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get password(){
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmpassword(){
    return this.registrationForm.get('confirmpassword') as FormControl;
  }
  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }


}
