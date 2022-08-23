import Avatar from './Avatar';
import styles from './Comment.module.css';

export function Comment(){
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/henriquefza.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTimeline}>
              <strong>Henrique Silva</strong>
              <time title="25 de julho às 21:00h" dateTime="2022-07-25 21:00:00">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário"></button>
            
          </header>

          <p>Muito bom Ingryd, parabéns !!</p>
        </div>
        
        <footer>
          <button>
            
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}