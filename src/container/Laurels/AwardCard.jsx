const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="laurels__awards_card">
    <img src={imgUrl} alt="award" />
    <div className="laurels__awards_card--content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>
        {title}
      </p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
)

export default AwardCard
