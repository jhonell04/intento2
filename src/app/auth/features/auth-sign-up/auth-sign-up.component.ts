import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../data-access/auth.service';

interface SignUpForm{
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-auth-sign-up',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: `./auth-sign-up.component.html`,
  styleUrl: './auth-sign-up.component.scss'
})
  
  
export  class AuthSignUpComponent {

  private _formBuilder = inject(FormBuilder);

  private _authService = inject(AuthService);

  form = this._formBuilder.group<SignUpForm>({
    email: this._formBuilder.control(null, [
      Validators.required,
      Validators.email
    ]),

    password: this._formBuilder.control(null, [Validators.required]),
  });

  async submit() {
    if (this.form.invalid) return;

    try {
      const authResponse = await this._authService.signUp({
        email: this.form.value.email ?? '',
        password: this.form.value.password ?? ''
      });

      if (authResponse.error) throw authResponse.error;

      alert('Por favor revisa tu correo!')
    } catch (error) {
      console.error(error);
    }
   }
}
