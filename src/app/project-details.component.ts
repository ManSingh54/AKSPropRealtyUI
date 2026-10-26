import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PROPERTY_PROJECTS } from './project.data';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html'
})
export class ProjectDetailsComponent {
  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {}

  get project() {
    const slug = this.route.snapshot.paramMap.get('slug');
    return PROPERTY_PROJECTS.find((project) => project.slug === slug);
  }

  get whatsappHref() {
    const projectName = this.project?.name ?? 'a property';
    return `https://wa.me/919811002135?text=${encodeURIComponent(`Hello AKS PropRealty, I am interested in ${projectName}.`)}`;
  }

  navigateHomeTo(section: string, event: Event) {
    event.preventDefault();
    this.router.navigateByUrl('/').then(() => {
      window.setTimeout(() => document.getElementById(section)?.scrollIntoView({ behavior: 'instant' }), 50);
    });
  }
}
