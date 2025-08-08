export interface Article {
    id?: string;
    title: string;
    slug: string;
    description: string;
    content?: string;
    tags?: string[];
    photoUrl?: string;
    shareCount?: number;
    createdAt?: any; // Date quand l'article a été créé
    updatedAt?: any;
    authorId?: string;
}

export interface Comment {
    id?: string;
    userId: string;
    userName?: string;
    content: string;
    mood?: string; // Peut être un emoji ou un mot décrivant l'humeur
    createdAt?: any;
}

export interface Like {
    userId: string;
    likedAt?: any;
}