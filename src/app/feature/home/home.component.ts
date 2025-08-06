import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { fadeIn, fadeInDelay, fadeInDelayXl, fadeInDelayXxl } from '../../animation/animation';
import { ScrollDownVisibleDirective } from '../../shared/directives/scroll-down/scroll-down-visible.directive';


@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule, ScrollDownVisibleDirective],
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


    // @ViewChild('commentaireBody') commentaireBody!: ElementRef;
    @ViewChild('scrollDownVisible') scrollDownVisible!: ElementRef

    scrollDown() {
        if (this.scrollDownVisible) {
            this.scrollDownVisible.nativeElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    articles = [
        {
            image: 'assets/images/articles/article1.jpg',
            title: 'Comment créer un site web avec Angular',
            description: 'Découvrez comment créer un site web moderne et performant avec Angular, le framework JavaScript populaire.',
        },
        {
            image: 'assets/images/articles/article1.jpg',
            title: 'Comment créer un site web avec Angular',
            description: 'Découvrez comment créer un site web moderne et performant avec Angular, le framework JavaScript populaire.',
        },
        {
            image: 'assets/images/articles/article1.jpg',
            title: 'Comment créer un site web avec Angular',
            description: 'Découvrez comment créer un site web moderne et performant avec Angular, le framework JavaScript populaire.',
        },
    ]
}
