import { Component } from '@angular/core';

@Component({
  selector: 'app-health-card',
  templateUrl: './health-card.component.html',
  styleUrl: './health-card.component.css'
})
export class HealthCardComponent {

  isActive = true;

  onToggleChange(group: any) {
    this.isActive = group.value === 'active';
  }
}
