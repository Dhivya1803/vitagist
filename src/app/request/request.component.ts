import { Component } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrl: './request.component.css'
})
export class RequestComponent {

    isActive = true;
  
    onToggleChange(group: any) {
      this.isActive = group.value === 'active';
    }
  

}
