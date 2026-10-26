import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';
import { ProjectDetailsComponent } from './project-details.component';

describe('ProjectDetailsComponent', () => {
  it('routes to a shared project details page with project-specific facts', async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter(routes)]
    }).compileComponents();

    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/properties/sobha-rivana', ProjectDetailsComponent);
    const compiled = harness.routeNativeElement as HTMLElement;

    expect(component.project?.name).toBe('SOBHA Rivana');
    expect(compiled.querySelector('h1')?.textContent).toContain('SOBHA Rivana');
    expect(compiled.querySelector('.detail-facts')?.textContent).toContain('35,000 sq. ft.');
    expect(compiled.querySelector('.detail-amenities')?.textContent).toContain('Badminton courts');
    expect(compiled.querySelector('.detail-enquiry-card')).toBeTruthy();
  });
});
