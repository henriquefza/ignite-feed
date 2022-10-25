import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import Avatar from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment}){

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment () {
    onDeleteComment(content);
  }

  function handleLikeComment (){
    setLikeCount((state) => {
      return state + 1
    });
  }


  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/henriquefza.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Henrique Silva</strong>
              <time 
                title="25 de julho às 21:00h" 
                dateTime="2022-07-25 21:00:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}></Trash>
            </button>

          </header>

          <p>{content}</p>
        </div>
        
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp></ThumbsUp>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}