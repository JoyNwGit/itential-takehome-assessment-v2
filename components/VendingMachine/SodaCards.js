import Soda from "./Soda"

/**
Creates multiple soda components based off the data returned from the parent 
*/
const SodaCards = ({ data }) => {

// console.log(data.getAllSodas);

  return (
    <div>
      <div className="row">
      {
        data?.getAllSodas?.map(({id, soda}) =>
        {
          return (
            <div key={id} className="soda_button_container">
              <Soda id={id} soda={soda} />
            </div>
          )
        })
      }
    </div>
  </div>
  ) //end of outer return
} // end of SodaCards

export default SodaCards;
