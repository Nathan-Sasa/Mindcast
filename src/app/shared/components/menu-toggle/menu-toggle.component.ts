import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-toggle',
  imports: [RouterModule, CommonModule],
  templateUrl: './menu-toggle.component.html',
  styleUrl: './menu-toggle.component.css'
})
export class MenuToggleComponent {

    @Input() isOpen = false;
    @Output() closed = new EventEmitter<void>();


    onClose() {
        this.closed.emit();
    }
}
