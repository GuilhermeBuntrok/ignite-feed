import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1495954222046-2c427ecb546d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
      <div className={styles.profile}>
        <Avatar src="https://github.com/GuilhermeBuntrok.png" />
        <strong>Guilherme Buntrok</strong>
        <span>Web Developer</span>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  );
}