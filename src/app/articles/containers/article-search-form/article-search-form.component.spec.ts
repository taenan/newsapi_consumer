import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSearchFormComponent } from './article-search-form.component';

describe('ArticleSearchFormComponent', () => {
  let component: ArticleSearchFormComponent;
  let fixture: ComponentFixture<ArticleSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleSearchFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ArticleSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
