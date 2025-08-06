import { Component, Renderer2 } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuToggleComponent } from './shared/components/menu-toggle/menu-toggle.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MenuToggleComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mindcast';
  logo = "assets/icons/site/mindcast-logo.svg"


    isMenuOpen = false;
    constructor(private render: Renderer2) { }

    toggleMenu(){
        this.isMenuOpen = !this.isMenuOpen;
        this.updateBodyScroll();
    }
    closeMenu(){
        this.isMenuOpen = false;
        this.updateBodyScroll();
    }

    updateBodyScroll(){
        if(this.isMenuOpen){
            this.render.addClass(document.body, 'overflow-hidden')
        }else{
            this.render.removeClass(document.body, 'overflow-hidden')
        }
    }
}
