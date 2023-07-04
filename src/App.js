import './App.css'
import CardItem from './components/CardItem'

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4',
  },
]

const App = () => (
  <div className="body">
    <div>
      <h1>Learn 4.O Technologies</h1>
      <p>
        Get trained by alumni of IIT'S and top Company' like microsoft,amazon
        etc
      </p>
    </div>
    <ul>
      <li className="container">
        <CardItem cardDetail={cardsList[0]} key={cardsList[0].id} />
        <CardItem cardDetail={cardsList[1]} key={cardsList[1].id} />
      </li>

      <li className="container">
        <CardItem cardDetail={cardsList[2]} key={cardsList[2].id} />
        <CardItem cardDetail={cardsList[3]} key={cardsList[3].id} />
      </li>
    </ul>
  </div>
)

export default App
