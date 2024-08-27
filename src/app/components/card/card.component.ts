import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  // Inputs
  @Input() id: number = 0;
  @Input() name: string = "";
  @Input() lastName: string = "";

  @Output() doClick = new EventEmitter();

  public doDelete() {
    this.doClick.emit(this.id);
  }

}
