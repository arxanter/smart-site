export default function Icon(props) {
  const src = `${props.path || '/static/icons'}/${props.path.iconAlias}-${props.isBlack ? 'black' : 'white'}.svg`;
  return (
    <>
      <div {...props} className="icon" style={{ width: `${props.width || 28}px`, height: `${props.height || 28}px` }}>
        <img src={src} alt={props.disc} style={{ width: '100%', height: '100%' }} />
      </div>
    </>
  );
}
