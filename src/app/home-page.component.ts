import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PROJECT_LOCATIONS, PROPERTY_PROJECTS } from './project.data';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule, RouterLink],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit, OnDestroy {
  title = 'AKSPropRealty';

  menuOpen = false;
  selectedLocation = 'All locations';
  selectedLayout = 'Any layout';
  inquiryMessage = '';
  activeHeroIndex = 0;
  heroPaused = false;
  private heroTimer?: ReturnType<typeof setInterval>;

  readonly heroSlides = [
    { title: 'AKS PropRealty', image: 'assets/Home-Page-Image.jpeg', imageAlt: 'AKS PropRealty homepage banner featuring residential properties' },
    { title: 'A home with room to breathe', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85', imageAlt: 'High-resolution photograph of a contemporary home exterior' },
    { title: 'A place to unwind', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85', imageAlt: 'High-resolution photograph of a modern residential home' },
    { title: 'Made for everyday living', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=85', imageAlt: 'High-resolution photograph of a thoughtfully designed home interior' },
    { title: 'Find your own corner', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85', imageAlt: 'High-resolution photograph of a bright contemporary living room' },
    { title: 'A fresh perspective on home', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2200&q=85', imageAlt: 'High-resolution photograph of a modern residential interior' },
    { title: 'Space for what matters', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85', imageAlt: 'High-resolution photograph of a welcoming home living space' }
  ];

  readonly locations = PROJECT_LOCATIONS;
  readonly projects = PROPERTY_PROJECTS;

  get filteredProjectGroups() {
    return this.locations
      .map((location) => ({
        location,
        projects: this.filteredProjects.filter((project) => project.region === location)
      }))
      .filter((group) => group.projects.length > 0);
  }

  get activeHeroSlide() {
    return this.heroSlides[this.activeHeroIndex];
  }

  get filteredProjects() {
    return this.projects.filter((project) => {
      const matchesLocation = this.selectedLocation === 'All locations' || project.region === this.selectedLocation;
      const requestedBedrooms = Number.parseInt(this.selectedLayout, 10);
      const matchesLayout = this.selectedLayout === 'Any layout'
        || project.configuration.match(/\b\d+\b/g)?.includes(String(requestedBedrooms)) === true;
      return matchesLocation && matchesLayout;
    });
  }

  ngOnInit() {
    this.startHeroSlideshow();
  }

  ngOnDestroy() {
    this.stopHeroSlideshow();
  }

  showHeroSlide(index: number) {
    this.activeHeroIndex = (index + this.heroSlides.length) % this.heroSlides.length;
    if (!this.heroPaused) {
      this.startHeroSlideshow();
    }
  }

  toggleHeroSlideshow() {
    this.heroPaused = !this.heroPaused;
    if (this.heroPaused) {
      this.stopHeroSlideshow();
    } else {
      this.startHeroSlideshow();
    }
  }

  private startHeroSlideshow() {
    this.stopHeroSlideshow();
    if (!this.heroPaused) {
      this.heroTimer = setInterval(() => {
        this.activeHeroIndex = (this.activeHeroIndex + 1) % this.heroSlides.length;
      }, 4000);
    }
  }

  private stopHeroSlideshow() {
    if (this.heroTimer) {
      clearInterval(this.heroTimer);
      this.heroTimer = undefined;
    }
  }

  scrollToSection(section: string, event: Event) {
    event.preventDefault();
    document.getElementById(section)?.scrollIntoView({ behavior: 'instant' });
  }

  searchHomes() {
    document.getElementById('homes')?.scrollIntoView({ behavior: 'smooth' });
  }

  clearSearch() {
    this.selectedLocation = 'All locations';
    this.selectedLayout = 'Any layout';
  }

  submitInquiry(event: Event) {
    event.preventDefault();
    window.open(
      'https://wa.me/919811002135?text=Hello%20AKS%20PropRealty%2C%20I%20am%20interested%20in%20your%20projects',
      '_blank'
    );
  }
}
