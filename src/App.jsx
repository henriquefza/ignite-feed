import Header from "./components/Header";
import Post from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/henriquefza.png',
      name: 'Henrique Silva',
      role: 'Service Analyst Softplan'
    },
    content: [
       {type: 'paragraph',content: 'Fala Galera !!'},
       {type: 'paragraph',content: 'Publiquei um novo post'},
       {type: 'link', content: 'https://github.com/henriquefza.png'},
    ],
    publishedAt: new Date('2022-06-04 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
       {type: 'paragraph',content: 'Fala Galera !!'},
       {type: 'paragraph',content: 'Publiquei um novo post'},
       {type: 'link', content: 'https://github.com/henriquefza.png'},
    ],
    publishedAt: new Date('2022-10-11 20:00:00'),
  }
]

export function App() {

  return (

    <div >
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map (post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>

  )
  }
