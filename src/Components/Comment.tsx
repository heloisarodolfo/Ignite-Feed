import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import {Avatar} from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    deleteComment: (comment: string) => void;
    dateTime?: Date;
}

export function Comment ({ content, deleteComment}: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment () {
        deleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https:github.com/heloisarodolfo.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Heloisa Rodolfo</strong>
                            <time title='21 de Novembro às 10:40' dateTime="2024-11-21 10:40:00">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp /> Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}