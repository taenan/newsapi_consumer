import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { FormUtilsService } from 'src/app/shared/services/form-utils.service';
import { ArticleSearch } from '../../model/article-search';

@Component({
  selector: 'app-article-search-form',
  templateUrl: './article-search-form.component.html',
  styleUrls: ['./article-search-form.component.scss']
})

export class ArticleSearchFormComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<any>();

  searchForm!: FormGroup;
  minDate: Date;
  maxDate: Date;

  sortOptions = [
    { value: 'publishedAt', label: 'Publicado em' },
    { value: 'popularity', label: 'Popularidade' }
  ];

  constructor(
    private formBuilder: NonNullableFormBuilder,
    public formUtils: FormUtilsService
  ) {
    const currentDate = new Date()
    this.minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDay() - 30);
    this.maxDate = new Date()
  }

  ngOnInit(): void {

    this.searchForm = this.formBuilder.group({
      q: ['', [Validators.required]],
      sortBy: ['', [Validators.required]],
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
    });
  }

  getErrorMessage(fieldName: string): string {
    return this.formUtils.getFieldErrorMessage(this.searchForm, fieldName);
  }

  onSubmit() {
    if (this.searchForm.valid) {
      let search = new ArticleSearch();
      Object.assign(search, this.searchForm.value);
      this.searchEvent.emit(search);
    } else {
      this.formUtils.validateAllFormFields(this.searchForm);
    }
  }
}
