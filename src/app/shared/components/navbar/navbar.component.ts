import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  page: number = 1;
  searchTerm: string = '';


  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  updateUrl() {
    const queryParams = {
      page: this.page,
      searchTerm: this.searchTerm || null,
    };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
    });
  }

}
