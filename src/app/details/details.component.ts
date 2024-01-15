import { Component, inject } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ActivatedRoute } from "@angular/router"
import { HousingService } from "../housing.service"
import { HousingLocation } from "../housing-location"

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule],
  template: `<article>
    <img
      [src]="housingLocation?.photo"
      alt="Photo of {{ housingLocation?.name }}"
      class="listing-photo"
    />
    <section class="listing-description">
      <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
      <p class="listing-location">
        {{ housingLocation?.city }}, {{ housingLocation?.state }}
      </p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing Location</h2>
      <ul>
        <li>Available Units: {{ housingLocation?.availableUnits }}</li>
        <li>Wifi: {{ housingLocation?.wifi }}</li>
        <li>Laundry: {{ housingLocation?.laundry }}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply Now</h2>
      <p>
        To apply for this housing location, please contact the housing provider
        directly.
      </p>
      <br />
      <button class="primary" type="button">Apply Now</button>
    </section>
  </article> `,
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  housingLocation: HousingLocation | undefined
  // constructor with dependency injection service for housingService
  constructor(private housingService: HousingService) {
    const housingLocationId = Number(this.route.snapshot.paramMap.get("id"))
    this.housingLocation =
      housingService.getHousingLocationById(housingLocationId)
  }
}
