import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, HeaderComponent, FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should  by header exist', () => {
    const headerDebugElement = fixture.debugElement.query(
      By.directive(HeaderComponent)
    );

    const headerElement: HeaderComponent = headerDebugElement.componentInstance;

    expect(headerElement).toBeTruthy();
  });

  it('should  by footer exist', () => {
    const footerDebugElement = fixture.debugElement.query(
      By.directive(FooterComponent)
    );

    const footerComponent: FooterComponent =
      footerDebugElement.componentInstance;

    expect(footerComponent).toBeTruthy();
  });
});
