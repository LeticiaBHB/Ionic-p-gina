import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input()
  Card_photo:string=""

  @Input()
  Card_name: string=""

  @Input()
  Card_description: string=""
}
