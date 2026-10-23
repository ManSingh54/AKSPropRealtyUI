import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'AKSPropRealty' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AKSPropRealty');
  });

  it('should render the property search homepage', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome to a better');
  });

  it('should feature the supplied AKS homepage banner first', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    const compiled = fixture.nativeElement as HTMLElement;

    expect(app.heroSlides[0].image).toBe('assets/Home-Page-Image.jpeg');
    expect(compiled.querySelector('.hero-image.is-active')?.getAttribute('src')).toBe('assets/Home-Page-Image.jpeg');
    expect(compiled.querySelector('.site-header .brand-logo')?.getAttribute('src')).toBe('assets/Logo1.png');
  });

  it('should filter homes by their listed location', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.selectedLocation = 'Noida Extension';

    expect(app.filteredProjects.map((project) => project.name)).toEqual([
      'SOBHA Rivana',
      'CRC Maesta',
      'Fusion The Brook',
      'Fusion The Rivulet'
    ]);
  });

  it('should group all requested projects under the three selected locations', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.locations).toEqual(['Noida Extension', 'Sector 150 Noida Expressway', 'Yamuna Expressway']);
    expect(app.projects).toHaveSize(12);
    expect(app.filteredProjectGroups.map((group) => [group.location, group.projects.length])).toEqual([
      ['Noida Extension', 4],
      ['Sector 150 Noida Expressway', 3],
      ['Yamuna Expressway', 5]
    ]);
  });

  it('should advance the featured property slideshow every four seconds', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    tick(4000);
    expect(fixture.componentInstance.activeHeroIndex).toBe(1);

    fixture.componentInstance.toggleHeroSlideshow();
    tick(4000);
    expect(fixture.componentInstance.activeHeroIndex).toBe(1);

    fixture.destroy();
  }));
});
