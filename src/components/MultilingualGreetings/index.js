import {Component} from 'react'

import LanguageItem from '../LanguageItem'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultilingualGreetings extends Component {
  state = {activeTab: languageGreetingsList[0].id}

  displayActiveTab = id => {
    this.setState({activeTab: id})
  }

  render() {
    const {activeTab} = this.state
    const selectedTab = languageGreetingsList.filter(
      eachTab => eachTab.id === activeTab,
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="button-container">
          {languageGreetingsList.map(eachItem => (
            <LanguageItem
              key={eachItem.id}
              languageDetails={eachItem}
              onClickTab={this.displayActiveTab}
              isActive={activeTab === eachItem.id}
            />
          ))}
        </ul>
        <div>
          <img
            className="language-img"
            src={selectedTab[0].imageUrl}
            alt={selectedTab[0].imageAltText}
          />
        </div>
      </div>
    )
  }
}

export default MultilingualGreetings
