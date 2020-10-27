import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { mimeType } from './mime-type.validator';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  ProductForm: FormGroup;
  imagePreview: string;
  isLoading: boolean = false;
  categories: string[] = ['Electronics', 'Education', 'Home Decor'];
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.ProductForm = new FormGroup({
      ProductName: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      Category: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      }),
      Description: new FormControl(null, { validators: [Validators.required] }),
      Price: new FormControl(null, { validators: [Validators.required] }),
    });
  }
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.ProductForm.patchValue({ image: file });
    this.ProductForm.get('image').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
      if (this.imagePreview.charAt(5) != 'i') {
        this.snackBar.open('Only .jpeg, .png file types supported ', 'Ok', {
          duration: 1000,
        });
      }
    };
    reader.readAsDataURL(file);
  }
  onCreateProduct() {}
}
