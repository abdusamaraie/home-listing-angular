import { Component, Input } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HousingLocation } from "../housing-location"
import { RouterModule } from "@angular/router"
@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img
        [src]="location.photo"
        alt="Photo of {{ location.name }}"
        class="listing-photo"
      />
      <h1 class="listing-heading">{{ location.name }}</h1>
      <p class="listing-location">{{ location.city }}, {{ location.state }}</p>
      <a [routerLink]="['/details', location.id]" class="listing-link"
        >Learn More</a
      >
    </section>
  `,
  styleUrls: ["./housing-location.component.css"],
})
export class HousingLocationComponent {
  @Input() location!: HousingLocation
}
