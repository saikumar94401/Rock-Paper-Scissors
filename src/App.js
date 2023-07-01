import './App.css'
import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  AppContainer,
  ScoreContainer,
  OptionsNames,
  Option,
  ScoreCard,
  ScoreValue,
  ScoreText,
  RulesButton,
  CloseButton,
  GameImage,
  ModelContainer,
  ChoiceContainer,
  UserChoiceContainer,
  ChoiceButtons,
  Button1,
  Image1,
  ResultContainer,
  OpponentContainer,
  OpponentName,
  OpponentImage,
  FinalContainer,
  PlayAgainContainer,
  PlayAgainText,
  PlayAgainButton,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const resultText = {
  won: 'YOU WON',
  lost: 'YOU LOSE',
  draw: 'IT IS DRAW',
}

class App extends Component {
  state = {
    score: 0,
    inProgress: true,
    text: '',
    userChoice: 0,
    randomChoice: 0,
  }

  userChoice = () => {
    const {score} = this.state

    const checkMatch1 = () => {
      const randomChoice = Math.floor(Math.random() * 3)
      this.setState({
        userChoice: 0,
        randomChoice,
        inProgress: false,
      })
      if (randomChoice === 1) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          text: resultText.won,
        }))
      } else if (randomChoice !== 0) {
        this.setState(prevState => ({
          score: prevState.score - 1,
          text: resultText.lost,
        }))
      } else {
        this.setState({text: resultText.draw})
      }
    }

    const checkMatch2 = () => {
      const randomChoice = Math.floor(Math.random() * 3)
      this.setState({
        userChoice: 1,
        randomChoice,
        inProgress: false,
      })
      if (randomChoice === 2) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          text: resultText.won,
        }))
      } else if (randomChoice !== 1) {
        this.setState(prevState => ({
          score: prevState.score - 1,
          text: resultText.lost,
        }))
      } else {
        this.setState({text: resultText.draw})
      }
    }

    const checkMatch3 = () => {
      const randomChoice = Math.floor(Math.random() * 3)
      this.setState({
        userChoice: 2,
        randomChoice,
        inProgress: false,
      })
      if (randomChoice === 0) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          text: resultText.won,
        }))
      } else if (randomChoice !== 2) {
        this.setState(prevState => ({
          score: prevState.score - 1,
          text: resultText.lost,
        }))
      } else {
        this.setState({text: resultText.draw})
      }
    }

    return (
      <UserChoiceContainer>
        <ChoiceButtons>
          <Button1 type="button" data-testid="rockButton" onClick={checkMatch1}>
            <Image1 src={choicesList[0].imageUrl} alt={choicesList[0].id} />
          </Button1>
          <Button1
            type="button"
            data-testid="scissorsButton"
            onClick={checkMatch2}
          >
            <Image1 src={choicesList[1].imageUrl} alt={choicesList[1].id} />
          </Button1>
        </ChoiceButtons>

        <Button1 type="button" data-testid="paperButton" onClick={checkMatch3}>
          <Image1 src={choicesList[2].imageUrl} alt={choicesList[2].id} />
        </Button1>
      </UserChoiceContainer>
    )
  }

  result = () => {
    const {userChoice, randomChoice, text} = this.state
    const playAgain = () => {
      this.setState({
        inProgress: true,
        text: '',
        userChoice: 0,
        randomChoice: 0,
      })
    }
    return (
      <FinalContainer>
        <ResultContainer>
          <OpponentContainer>
            <OpponentName>YOU</OpponentName>
            <OpponentImage
              src={choicesList[userChoice].imageUrl}
              alt="your choice"
            />
          </OpponentContainer>
          <OpponentContainer>
            <OpponentName>OPPONENT</OpponentName>
            <OpponentImage
              src={choicesList[randomChoice].imageUrl}
              alt="opponent choice"
            />
          </OpponentContainer>
        </ResultContainer>
        <PlayAgainContainer>
          <PlayAgainText>{text}</PlayAgainText>
          <PlayAgainButton onClick={playAgain}>PLAY AGAIN</PlayAgainButton>
        </PlayAgainContainer>
      </FinalContainer>
    )
  }

  render() {
    const {score, inProgress, text, userChoice, randomChoice} = this.state
    console.log(score, text)
    console.log(userChoice, randomChoice)
    return (
      <AppContainer>
        <ScoreContainer>
          <OptionsNames>
            <Option>Rock Paper Scissors</Option>
          </OptionsNames>
          <ScoreCard>
            <ScoreText>Score</ScoreText>
            <ScoreValue>{score}</ScoreValue>
          </ScoreCard>
        </ScoreContainer>
        <ChoiceContainer>
          {inProgress ? this.userChoice() : this.result()}
        </ChoiceContainer>
        <Popup modal trigger={<RulesButton>RULES</RulesButton>}>
          {close => (
            <ModelContainer>
              <CloseButton type="button" onClick={() => close()}>
                <RiCloseLine size={20} color="#231f20" />
              </CloseButton>
              <GameImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </ModelContainer>
          )}
        </Popup>
      </AppContainer>
    )
  }
}

export default App
