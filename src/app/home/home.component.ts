import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Edad } from '../edad';
import { EdadGuard } from '../edad.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  edadForm: FormGroup = null;
  edadUsuario: Edad;
  edadguard: EdadGuard;


  constructor(private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit(): void {
  }
  setEdad(): void {
    this.edadUsuario = {
      edad: this.edadForm.get('edad').value
    }
  }
  createForm(): void {
    this.edadForm = this.fb.group({
      edad: ['']
    })
  }

  obtenerEdad(): void {
    if (this.edadForm.valid) {
      console.log('entro')
      console.log(this.edadForm.controls['edad'].value)
      this.router.navigate(['/','dash', this.edadForm.controls['edad'].value])
      console.log(this.router.url)

    }
  }
}
