import { Component } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: [ '../common/forms.css']
})
export class AdminComponent {

    form:UntypedFormGroup;

    constructor(
        private fb:UntypedFormBuilder,
        private authService: AuthService,
        private router: Router) {

        this.form = this.fb.group({
            userEmail: ['student@gmail.com',Validators.required]
        });
    }


    loginAsUser() {

        const val = this.form.value;

        if (val.userEmail) {
            this.authService.loginAsUser(val.userEmail)
                .subscribe(
                    user => {
                        console.log("Logged in as user with email " + user.email);
                        this.router.navigateByUrl('/');
                    }
                );
        }
    }

}
