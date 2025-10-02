import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, Renderer2, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppTheme, ThemeService } from '../../../core/services/theme.service';
// import { AppTheme, ThemeService } from './core/services/theme.service';



@Component({
  selector: 'app-menu-toggle',
  imports: [RouterModule, CommonModule],
  templateUrl: './menu-toggle.component.html',
  styleUrl: './menu-toggle.component.css'
})
export class MenuToggleComponent {

  choiceTheme = false;

  themeService = inject(ThemeService);
  appTheme = AppTheme

  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();


  onClose() {
    this.closed.emit();
  }
}
