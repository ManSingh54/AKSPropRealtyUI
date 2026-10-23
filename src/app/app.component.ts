import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
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

  readonly locations = ['Noida Extension', 'Sector 150 Noida Expressway', 'Yamuna Expressway'];

  readonly projects = [
    { name: 'SOBHA Rivana', region: this.locations[0], area: 'Sector 1, Greater Noida', developer: 'SOBHA', configuration: '3 BHK and 4 BHK residences', description: 'A residential development with eight towers, a retail enclave and a 35,000 sq. ft. clubhouse, as described by the developer.', image: this.heroSlides[1].image, link: 'https://www.sobha.com/delhi-ncr/sobha-rivana-sector-1-greater-noida/', linkLabel: 'Official project page', verificationNote: '' },
    { name: 'CRC Maesta', region: this.locations[0], area: 'Sector 1, Greater Noida West', developer: 'CRC Group', configuration: '3 BHK and 4 BHK apartments', description: 'The developer describes a 3.7-acre project with landscaped green areas and a clubhouse.', image: this.heroSlides[2].image, link: 'https://www.crcgroup.in/maesta/', linkLabel: 'Official project page', verificationNote: '' },
    { name: 'Fusion The Brook', region: this.locations[0], area: 'Greater Noida; exact sector not verified', developer: 'Fusion Group', configuration: 'Configuration not verified', description: 'Listed by Fusion Group among its Greater Noida residential projects. Further project details need confirmation.', image: this.heroSlides[3].image, link: 'https://fusionlimited.in/about-us', linkLabel: 'Developer website', verificationNote: 'Project location and configuration could not be confirmed on the developer page.' },
    { name: 'Fusion The Rivulet', region: this.locations[0], area: 'Greater Noida; exact sector not verified', developer: 'Fusion Group', configuration: 'Configuration not verified', description: 'Listed by Fusion Group among its Greater Noida residential projects. Further project details need confirmation.', image: this.heroSlides[4].image, link: 'https://fusionlimited.in/about-us', linkLabel: 'Developer website', verificationNote: 'Project location and configuration could not be confirmed on the developer page.' },
    { name: 'ACE ARTE', region: this.locations[1], area: 'Sector 150, Noida', developer: 'ACE Group', configuration: '3 BHK and 4 BHK residences', description: 'A residential project listed by ACE Group. Verify current plans and project details with the developer.', image: this.heroSlides[5].image, link: 'https://acegroupindia.com/ace-terra.php', linkLabel: 'ACE Group website', verificationNote: 'Configuration is from a project microsite; confirm with the developer.' },
    { name: 'Prateek Canary', region: this.locations[1], area: 'Sector 150, Noida', developer: 'Prateek Group', configuration: '3 BHK, 4 BHK and duplex penthouses', description: 'The developer describes a 12.55-acre development with 664 units, a clubhouse and private party decks.', image: this.heroSlides[1].image, link: 'https://prateekgroup.com/prateek-canary/', linkLabel: 'Official project page', verificationNote: '' },
    { name: 'Samridhi Daksh Avenue', region: this.locations[1], area: 'Sector 150, Noida', developer: 'Samridhi Group', configuration: '3 BHK and 4 BHK apartments and penthouses', description: 'The project page highlights landscaped greens, clubhouse facilities, wellness zones and leisure spaces.', image: this.heroSlides[2].image, link: 'https://samridhigroup.co.in/daksh-avenue/overview.php', linkLabel: 'Project page', verificationNote: 'Confirm current project information and availability with the developer.' },
    { name: 'ACE Terra', region: this.locations[2], area: 'Sector 22D, Yamuna Expressway', developer: 'ACE Group', configuration: '3 BHK and 4 BHK apartments', description: 'The developer describes 12 towers, spacious decks, green spaces and water features.', image: this.heroSlides[3].image, link: 'https://acegroupindia.com/ace-terra.php', linkLabel: 'Official project page', verificationNote: '' },
    { name: 'Purvanchal Sunbliss', region: this.locations[2], area: 'Yamuna Expressway; exact location not verified', developer: 'Purvanchal Group (project association unverified)', configuration: 'Configuration not verified', description: 'Added to your Yamuna Expressway shortlist. Project-specific details need confirmation from the developer.', image: this.heroSlides[4].image, link: 'https://www.purvanchalprojects.com/', linkLabel: 'Purvanchal Group website', verificationNote: 'Project association, location and configuration could not be confirmed from an official project source.' },
    { name: 'Nimbus The Palm Village', region: this.locations[2], area: 'Yamuna Expressway; exact location not verified', developer: 'Nimbus Group', configuration: 'Configuration not verified', description: 'Added to your Yamuna Expressway shortlist. Contact the developer to verify current project details.', image: this.heroSlides[5].image, link: 'https://www.nimbusgroup.net/nimbus-the-palm-village/', linkLabel: 'Project page', verificationNote: 'The project page advises buyers to verify details independently; location and configuration were not verified.' },
    { name: 'Gaur Alaris', region: this.locations[2], area: 'Yamuna Expressway; exact location not verified', developer: 'Developer association unverified', configuration: 'Configuration not verified', description: 'Added to your Yamuna Expressway shortlist. Project details need verification from an official source.', image: this.heroSlides[1].image, link: 'https://www.gaursonsindia.com/', linkLabel: 'Gaurs Group website', verificationNote: 'Project-to-developer association, location and configuration could not be verified.' },
    { name: 'Gaur Chrysalis', region: this.locations[2], area: 'Yamuna Expressway; exact location not verified', developer: 'Developer association unverified', configuration: 'Configuration not verified', description: 'Added to your Yamuna Expressway shortlist. Project details need verification from an official source.', image: this.heroSlides[2].image, link: 'https://www.gaursonsindia.com/', linkLabel: 'Gaurs Group website', verificationNote: 'Project-to-developer association, location and configuration could not be verified.' }
  ];

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

  get filteredProjects() {
    return this.projects.filter((project) => {
      const matchesLocation = this.selectedLocation === 'All locations' || project.region === this.selectedLocation;
      const requestedBedrooms = Number.parseInt(this.selectedLayout, 10);
      const matchesLayout = this.selectedLayout === 'Any layout'
        || project.configuration.match(/\b\d+\b/g)?.includes(String(requestedBedrooms)) === true;
      return matchesLocation && matchesLayout;
    });
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
    this.inquiryMessage = 'Your details were not sent. Please call +91 8505801314 to connect.';
  }
}
