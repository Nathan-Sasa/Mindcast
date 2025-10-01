import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollDownVisibleDirective } from '../../directives/scroll-down/scroll-down-visible.directive';

@Component({
  selector: 'app-home-community',
  imports: [CommonModule, ScrollDownVisibleDirective],
  templateUrl: './home-community.component.html',
  styleUrl: './home-community.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCommunityComponent { 

  isFocus = true;

  community = [
    {
      image: "assets/icons/site/Mindcast-logo-fill.svg",
      name: "Matthieu",
      description: "DevOps"
    },
    {
      image: "assets/icons/site/Mindcast-logo-fill.svg",
      name: "Neuil",
      description: "Développeur web fullStack"
    },
    {
      image: "assets/icons/site/Mindcast-logo-fill.svg",
      name: "Cédrick Nday",
      description: "Développeur web junior"
    },
    {
      image: "assets/icons/site/Mindcast-logo-fill.svg",
      name: "Kevin",
      description: "Développeur backend"
    },
  ]

  publication = [
    {
      image: "assets/images/articles/article1.jpg",
      date: "27 Juillet 2025",
      title: "Apprendre JavaScript en 2025.",
      description: "description du sujet description du sujet description du sujet description du sujet description du sujet description du sujet"
    },
    {
      image: "assets/images/articles/wordpress.jpg",
      date: "14 Août 2025",
      title: "Quelles sont difficultés rencontrés par les débutans du web ?",
      description: "description du sujet description du sujet description du sujet description du sujet description du sujet description du sujet"
    },
    {
      image: "assets/images/articles/instagram.jpg",
      date: "30 Août 2025",
      title: "Est-ce que l'IA va remplacer les développeur ?",
      description: "description du sujet description du sujet description du sujet description du sujet description du sujet description du sujet"
    },
  ]
}
