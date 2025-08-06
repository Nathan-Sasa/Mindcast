import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-recent-article',
  imports: [CommonModule],
  templateUrl: './recent-article.component.html',
  styleUrl: './recent-article.component.css'
})
export class RecentArticleComponent implements AfterViewInit {

    @ViewChild('textRef') textElement!: ElementRef;
    selectArticle : any = null;
    isSelect = false;
    isExpanded = true;
    showToggle = false;
    isLargeScreen = false;


    articles = [
        {
            image: 'assets/images/articles/wordpress.jpg',
            title: 'Comment créer un site web moderne et performant avec Angular',
            description: 'Découvrez comment créer un site web moderne et performant avec Angular, le framework JavaScript populaire.',
            date: 'Publié le 7 mai 2025',
            tag: 'tech',
            like: '123',
            comment: '45',
            share: '67',
        },
        {
            image: 'assets/images/articles/instagram.jpg',
            title: 'Les meilleures pratiques pour optimiser les performances d\'un site web',
            description: 'Découvrez comment créer un site web moderne et performant avec Angular, le framework JavaScript populaire. Découvrez comment créer un site web moderne et performant avec Angular, le framework JavaScript populaire.',
            date: 'Publié le 2 juin 2025',
            tag: 'Reseaux',
            like: '333',
            comment: '245',
            share: '51',
        },
        {
            image: 'assets/images/articles/student.jpg',
            title: 'La gestion de la santé mentale avec Mindcast',
            description: 'Est une application web de gestion de la santé mentale, qui permet aux utilisateurs de suivre leur humeur, de gérer leur stress et d\'améliorer leur bien être mental. L\'application propose des fonctionnalités telles que la journalisation de l\'humeur, des exercices de respiration, des conseils sur la santé mentale et des ressources pour trouver de l\'aide professionnelle. est une application web de gestion de la santé mentale, qui permet aux utilisateurs de suivre leur humeur, de gérer leur stress et d\'améliorer leur bien-être mental. L\'application propose des fonctionnalités telles que la journalisation de l\'humeur, des exercices de respiration, des conseils sur la santé mentale et des ressources pour trouver de l\'aide professionnelle. qui permet aux utilisateurs de suivre leur humeur, de gérer leur stress et d\'améliorer leur bien être mental. L\'application propose des fonctionnalités telles que la journalisation de l\'humeur, des exercices de respiration, des conseils sur la santé mentale et des ressources pour trouver de l\'aide professionnelle. est une application web de gestion de la santé mentale, qui permet aux utilisateurs de suivre leur humeur, de gérer leur stress et d\'améliorer leur bien-être mental. L\'application propose des fonctionnalités telles que la journalisation de l\'humeur, des exercices de respiration, des conseils sur la santé mentale et des ressources pour trouver de l\'aide professionnelle.',
            date: 'Publié le 17 mai 2025',
            tag: 'Education',
            like: '223',
            comment: '145',
            share: '67',
        },
    ]

    // isSelected(){
    //     this.isSelect = false;
    // }

    defaultArticle ={
        image: 'assets/images/articles/article1.jpg',
        title: 'La gestion de la santé mentale avec Mindcast',
        description: 'Est une application web de gestion de la santé mentale, qui permet aux utilisateurs de suivre leur humeur, de gérer leur stress et d\'améliorer leur bien être mental. L\'application propose des fonctionnalités telles que la journalisation de l\'humeur, des exercices de respiration, des conseils sur la santé mentale et des ressources pour trouver de l\'aide professionnelle. est une application web de gestion de la santé mentale, qui permet aux utilisateurs de suivre leur humeur, de gérer leur stress et d\'améliorer leur bien-être mental. L\'application propose des fonctionnalités telles que la journalisation de l\'humeur, des exercices de respiration, des conseils sur la santé mentale et des ressources pour trouver de l\'aide professionnelle. qui permet aux utilisateurs de suivre leur humeur, de gérer leur stress et d\'améliorer leur bien être mental. L\'application propose des fonctionnalités telles que la journalisation de l\'humeur, des exercices de respiration, des conseils sur la santé mentale et des ressources pour trouver de l\'aide professionnelle. est une application web de gestion de la santé mentale, qui permet aux utilisateurs de suivre leur humeur, de gérer leur stress et d\'améliorer leur bien-être mental. L\'application propose des fonctionnalités telles que la journalisation de l\'humeur, des exercices de respiration, des conseils sur la santé mentale et des ressources pour trouver de l\'aide professionnelle.',
        date: 'Publié le 17 mai 2025',
        tag: 'Education',
        like: '223',
        comment: '145',
        share: '67',

    }

    // la fonction pour afficher le bouton voir plus ou masquer qui si le text dépasse 5 lignes
    ngAfterViewInit(): void {
        this.updateVisbility()
    }
    @HostListener('window:resize')
    onResize() {
        this.updateVisbility()
    }
    updateVisbility(){
        const el = this.textElement?.nativeElement;
        this.isLargeScreen = window.innerWidth >= 1024 //le breakpoint 
        const isOverflowing = el.scrollHeight > el.clientHeight;
        this.showToggle = !this.isLargeScreen && isOverflowing;
    }

    // la fonction pour afficher et masquer le text de la description dépassant line-clamp-5 l'article sélectionné

    toggleText(){
        this.isExpanded = !this.isExpanded;
    }
}
