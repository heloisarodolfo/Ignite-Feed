import { Header } from "./Components/Header";
import { Post, PostType } from "./Components/Post";
import {Sidebar} from "./Components/Sidebar";


import styles from './App.module.css';
import './global.css';




const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarURL: 'https:github.com/Gabrielzanela.png',
      name: 'Gabriel Zanela',
      role: 'Web Developer',
    },
    content: [
               { type: 'paragraph', content: 'Fala galeraa 👋', },
               { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
              { type: 'link', content: '👉 jane.design/doctorcare' },
              { type: 'link', content: '#novoprojeto' },
      ],
      publishedAt: new Date('2024-11-21 10:40:00')
  },
  {
    id: 2,
    author: {
      avatarURL: 'https:github.com/heloisarodolfo.png',
      name: 'Heloisa Rodolfo',
      role: 'Web Developer | Designer',
    },
    content: [
               { type: 'paragraph', content: 'Fala galeraa 👋', },
               { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
              { type: 'link', content: '👉 jane.design/doctorcare' },
              { type: 'link', content: '#novoprojeto' },
      ],
      publishedAt: new Date('2024-11-20 10:40:00')
  },
];

export function App() {
  return (
    <div>
    <Header/>

    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {posts.map(post => {
          return(
          <Post
            key={post.id}
            post={post}
          />
        )
        })}
      </main>
    </div>
     
     </div>
  )
}

