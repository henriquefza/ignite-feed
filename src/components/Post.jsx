import Avatar from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export default function Post () {
return (
  <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <Avatar src="https://github.com/henriquefza.png"  />
        <div className={styles.authorInfo}>
          <strong>Henrique Silva</strong>
          <span> Web Developer</span>
        </div>
      </div>

      <time title="25 de julho às 21:00h" dateTime="2022-07-25 21:00:00">Publicado há 1h</time>
    </header>

    <div className={styles.content}>
      <p> Fala Galera !!</p>
      <p> Publiquei um novo post</p>
      <p><a href="">https://github.com/henriquefza.png</a></p>
      <p><a href="">#novoprojeto</a></p>
    </div>

    <form className={styles.commentForm}>
      <strong>Deixe seu comentário</strong>

      <textarea 
        placeholder="Deixe um comentário"
      />

      <button type="submit">Publicar</button>

    </form>

    <div className={styles.commentList}>
      <Comment />
      <Comment />
      <Comment />
    </div>

  </article>
)
}