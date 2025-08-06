import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, HostListener} from '@angular/core';
import { RouterModule } from '@angular/router';
import { fadeIn, fadeInDelay, fadeInDelayXl, fadeInDelayXxl } from '../../animation/animation';
import { ScrollDownVisibleDirective } from '../../shared/directives/scroll-down/scroll-down-visible.directive';
import { RecentArticleComponent } from '../../shared/components/recent-article/recent-article.component';



@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule, ScrollDownVisibleDirective, RecentArticleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [fadeIn, fadeInDelay, fadeInDelayXl, fadeInDelayXxl]
})
export class HomeComponent {

    mindcastDependacies = [
        {
            title: 'Mindcast',
            logo: 'assets/icons/site/mindcast-logo.svg',
            description: 'Mindcast c\'est un carnet numérique où les réflexions techniques, les solutions aux difficultés rencontrés par d\'autres et les idées de demain sont partagées. ',

        }
    ]

    // le declencheur de scroll down 
    @ViewChild('scrollDownVisible') scrollDownVisible!: ElementRef
    scrollDown() {
        if (this.scrollDownVisible) {
            this.scrollDownVisible.nativeElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

}
