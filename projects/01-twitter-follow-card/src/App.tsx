import TwitterFollowCard from './assets/TwitterFollowCard'
import './App.css'

const users = [
  {
    userName: 'midudev',
    isFollowing: false,
    name: 'Miguel Ángel Durán'
  },
  {
    userName: 'pheralb',
    isFollowing: true,
    name: 'Pablo Hernández'
  }
]

function App() {
  return (
    <section className='App'>
      {
        users.map(user => {
          const { userName, name, isFollowing } = user;
          return (
            <TwitterFollowCard key={userName} userName={userName} isFollowing={isFollowing}>
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}

export default App
