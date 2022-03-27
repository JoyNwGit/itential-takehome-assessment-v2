
const SodaCards = ({ data }) => {

// console.log(data.getAllSodas);


const Download = (soda) => {
  const basicData = {
    productName: soda.productName,
    description: soda.description,
    cost: soda.cost,
    maximumQuantityToVend: soda.maximumQuantityToVend
  }
  
  const blob = new Blob([JSON.stringify(basicData)], {type: 'application/json'})
  const sodaFile = new File([blob], `${soda.productName}.json`)
  const sodaURL = URL.createObjectURL(sodaFile);
  const link = document.createElement('a');
  link.href = sodaURL;
  link.setAttribute('download', `${soda.productName}.json`,);
  // Append to html link element page
  document.body.appendChild(link);

  // Start download
  link.click();

  // To make this work on Firefox we need to wait
    // a little while before removing it.
    setTimeout(() => {
        URL.revokeObjectURL(sodaURL);
        // Clean up and remove the link
        link.parentNode.removeChild(link);
    }, 0);

  console.log(`Vending ${soda.productName}`)
}

  return (
    <div>
      <div className="row">
      {
        data?.getAllSodas?.map(({id, soda}) =>
        {
          return (
            <div key={id} className="soda_button_container">
              <button onClick={() => Download(soda)}>{soda.productName}</button>
            </div>
          )
        })
      }
    </div>
  </div>
  ) //end of outer return
} // end of SodaCards

export default SodaCards;
