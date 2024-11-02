import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, clickThumbnail} = props
  const {thumbnailUrl, id} = thumbnailDetails

  const onClickThumbnail = () => {
    clickThumbnail(id)
  }

  return (
    <li className="thumbnail-card mb-3">
      <button className="thumbnail-btn" onClick={onClickThumbnail}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ThumbnailItem
