import { Injectable } from "@angular/core";
import { collection, Firestore, collectionData, addDoc, doc, docData, updateDoc, deleteDoc, query, orderBy, where, serverTimestamp, getDoc, setDoc, DocumentData } from "@angular/fire/firestore";
import { Storage, ref as storageRef, uploadBytesResumable, getDownloadURL, deleteObject } from "@angular/fire/storage";
import { Observable, retryWhen } from "rxjs";
import { map, switchMap } from "rxjs";
import { Article, Comment } from "../../models";
import { Title } from "@angular/platform-browser";

@Injectable({
    providedIn: 'root'
})

export class ArticleService {
    constructor(
        private firestore: Firestore,
        private storage: Storage
    ){}

    // listes des articles (desc createdAt)
    getArticles(): Observable<Article[]> {
        const col = collection(this.firestore, 'articles');
        const q = query(col, orderBy('createdAt', 'desc'));
        return collectionData(q, { idField: 'id' }) as Observable<Article[]>;
    }

    // get article by slug
    getArticleBySlug(slug: string): Observable<Article | undefined> {
        const col = collection(this.firestore, 'articles')
        const q = query(col, where('slug', '==', slug), orderBy('createdAt', 'desc'))
        return collectionData(q, {idField: 'id'}).pipe(
            map((arr: (DocumentData & { id: string })[]) =>
                arr.map(doc => ({
                    id: doc.id,
                    title: doc.title,
                    slug: doc.slug,
                    description: doc.description,
                    createdAt: doc.createdAt,
                    updatedAt: doc.updatedAt,
                    shareCount: doc.shareCount
                }) as Article),
            ),
            map((arr: Article[]) => arr.length ? arr[0]: undefined)
        )
    }

    // Create article (upload image optional)
    async createArticle(article: Partial<Article>, file?: File){
        const col = collection(this.firestore, 'articles')
        const data = {
            ...article,
            shareCount: article.shareCount ?? 0,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        }
        const docRef = await addDoc(col, data)
        const articleId = docRef.id;

        if(file){
            const url = await this.uploadArticleImage(articleId, file);
            await updateDoc(doc(this.firestore, `artocles/${articleId}`), {photoUrl: url, updateAt: serverTimestamp() });
        }
        return articleId;
    }

    // Update article, pour mettre a ajour un article
    async updateArticle(articleId: string, updates: Partial<Article>, file?: File){
        const ref = doc(this.firestore, `articles${articleId}`)
        await updateDoc(ref, {...updates, updatedAt: serverTimestamp() })
        if(file){
            const url = await this.uploadArticleImage(articleId, file)
            await updateDoc(ref, {photoUrl: url, updatedAt: serverTimestamp() })
        }
    }

    // Delete article + cover image if any
    async deleteArticle(articleId: string){
        // delete document
        await deleteDoc(doc(this.firestore, `articles/${articleId}`))
        // try delete cover image
        try{
            const storageRe = storageRef(this.storage, `articles/${articleId}/cover.jpg`)
            await deleteObject(storageRe);
        } catch (err){
            console.warn('No cover image to delete or delete failed', err)
        }
    }

    // upload image helper function --> return download URl
    uploadArticleImage(articleId: string, file: File): Promise<string>{
        const path = `articles/${articleId}/cover.jpg`
        const ref = storageRef(this.storage, path)
        const task = uploadBytesResumable(ref, file)
        return new Promise((resolve, reject) =>{
            task.on('state_changed',
                () => {},
                (error) => reject(error),
                async () => {
                    const url = await getDownloadURL(ref)
                    resolve(url)
                }
            )
        })
    }

    // comments
    getComments(articleId: string){
        const col = collection(this.firestore, `articles/${articleId}/comments`)
        const q = query(col, orderBy('createAt', 'asc'))
        return collectionData(q, {idField: 'id' }) as Observable<Comment[]>
    }

    // ajouter un commentaire
    addComment(articleId: string, comment: Partial<Comment>){
        const col = collection(this.firestore, `articles/${articleId}/comments`)
        return addDoc(col, {
            ...comment,
            createdAt: serverTimestamp()
        })
    }

    // supprimer un commetaire
    deleteComment(articleId: string, commentId: string){
        return deleteDoc(doc(this.firestore, `articles/${articleId}/comments/${commentId}`))
    }

    // Likes : we store one doc per user under /articles/{articleId}/likes/{userId}
    // mettre un like
    async likeArticle(articleId: string, userId: string){
        const likeRef = doc(this.firestore, `articles/${articleId}/likes/${userId}`)
        await setDoc(likeRef, {userId, likeAt: serverTimestamp() })
    }

    // retirer un like
    async unlikeArticle(articleId: string, userId: string){
        const likeRef = doc(this.firestore, `articles/${articleId}/likes/${userId}`)
        await deleteDoc(likeRef)
    }

    // option: read count of likes (costly if many docs) - use aggregation or counter doc
    getLikesCount(articleId: string){
        const col = collection(this.firestore, `articles/${articleId}/likes`)
        return collectionData(col).pipe(map(arr => arr.length)) //simple approach
    }

    //share - increment shareCount
    async incrementShare(articleId: string){
        const ref = doc(this.firestore, `articles/${articleId}`)
        await updateDoc(ref, {shareCount: serverTimestamp() }) //naive; recomm
    }


}