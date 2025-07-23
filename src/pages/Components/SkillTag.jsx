function SkillTag({ icon, name, textColor, backgroundColor }) {
  return (
    <div className={`technologies__tag ${backgroundColor}`}>
      <img src={icon} alt={name} />
      <span className={`technology__name ${textColor}`}>{name}</span>
    </div>
  );
}

export default SkillTag;