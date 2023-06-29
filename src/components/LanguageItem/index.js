import './index.css'

const LanguageItem = props => {
  const {languageDetails, onClickTab, isActive} = props
  const {buttonText, id} = languageDetails
  const displayContent = () => {
    onClickTab(id)
  }
  const activeTab = isActive ? 'active-tab' : ''
  return (
    <li className="li-container">
      <button
        onClick={displayContent}
        className={`language-btn  ${activeTab}`}
        type="button"
      >
        {buttonText}
      </button>
    </li>
  )
}
export default LanguageItem
