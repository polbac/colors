import Header from '../components/header'
import ColorCreator from '../components/creator'
import ColorList from '../components/list'
import { ColorsContextProvider, ColorsContext } from '../context/colors'

const Home = (props) => {
  return (
    <main>
    <link href="https://fonts.googleapis.com/css?family=Share+Tech+Mono&display=swap" rel="stylesheet" />

      <ColorsContextProvider>
        <Header />
        <ColorCreator />
        <ColorList />

        <style global jsx>{`
        html,body {
          margin: 0;
          padding: 0;
          font-family: 'Share Tech Mono';
          text-align: center;
        }
      `}
      </style>

      </ColorsContextProvider>

      

    </main>
  )
}

export default Home
