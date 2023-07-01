import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
`

export const ScoreContainer = styled.div`
  border: 2px solid white;
  width: 70%;
  align-self: center;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`
export const OptionsNames = styled.div`
  padding: 10px;
`

export const Option = styled.h1`
  color: white;
  font-family: 'Bree Serif';
  font-size: 24px;
`
export const ScoreCard = styled.div`
  background-color: white;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`
export const ScoreText = styled.p`
  color: #223a5f;
  font-weight: 500;
`
export const ScoreValue = styled.p`
  color: #223a5f;
  font-size: 40px;
  font-weight: 600;
  font-family: 'Roboto';
`

export const RulesButton = styled.button`
  color: #223a5f;
  align-self: flex-end;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
  font-size: 12px;
  font-weight: 500;
`
export const CloseButton = styled.button`
  align-self: flex-end;
  cursor: pointer;
  background: none;

  border: none;
`

export const GameImage = styled.img`
  height: 500px;
  padding: 20px;
`

export const ModelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`
export const ChoiceContainer = styled.div`
  height: 500px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const UserChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const ChoiceButtons = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Button1 = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`
export const Image1 = styled.img`
  height: 150px;
`
export const ResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const OpponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const OpponentName = styled.p`
  color: white;
`
export const OpponentImage = styled.img`
  height: 200px;
`
export const FinalContainer = styled.div`
  width: 40%;
`
export const PlayAgainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PlayAgainText = styled.p`
  color: white;
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 40px;
`
export const PlayAgainButton = styled.button`
  background-color: white;
  color: #223a5f;
  font-size: 12px;
  border-radius: 10px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`
