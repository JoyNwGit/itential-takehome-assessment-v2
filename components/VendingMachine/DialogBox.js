
const DialogBox = ({ loading, error, data }) => {
  if (loading) return <div className="Info_Bar">Loading...</div>;
  if (error) return <div className="Info_Bar">Error :(</div>;
  return (
    <div className="Info_Bar"/>
  )
}

export default DialogBox;
