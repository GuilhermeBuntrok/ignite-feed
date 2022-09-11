import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'
import { Comment } from './Comment.jsx'
import { Avatar } from './Avatar'

import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'


export interface PostProps {
  author: {
    avatarUrl: string;
    name: string;
    role: string
  },
  content: {
    type: 'paragraph' | 'link';
    content: string
  }[],
  published: Date
}

export function Post({ author, published, content }: PostProps) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(published, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDteRelativeToNow = formatDistanceToNow(published, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)

  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    setComments(commentsWithoutDeleteOne)
  }
  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={published.toISOString()}>
          {publishedDteRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>;
          }
        }
        )}

      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          onChange={handleNewCommentChange}
          placeholder="Deixe um comentário"
          value={newCommentText}
          required
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}