import { Component } from '@angular/core';

@Component({
  selector: 'app-expiring-doc',
  templateUrl: './expiring-doc.component.html',
  styleUrl: './expiring-doc.component.css'
})
export class ExpiringDocComponent {
  isActive = true;

  onToggleChange(group: any) {
    this.isActive = group.value === 'active';
  }
}
