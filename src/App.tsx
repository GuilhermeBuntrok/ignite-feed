import { Header } from "./components/Headers";
import { Sidebar } from "./components/Sidebar";
import { Post, PostProps } from "./components/Post";

import './global.css'
import styles from './App.module.css'

interface Posts extends PostProps {
  id: number
}




const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://www.github.com/guilhermebuntrok.png',
      name: 'Guilherme Buntrok',
      role: 'Web developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'cabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉jane.design/doctorcare' },
    ],
    published: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://www.github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rockeseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'cabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉jane.design/doctorcare' },
    ],
    published: new Date('2022-08-26 13:52:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (< Post
              key={post.id}
              author={post.author}
              content={post.content}
              published={post.published}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}


