import { useQuery } from "@apollo/react-hooks";
import { NetworkStatus } from 'apollo-boost';
import {GET_A_SODA} from "../../public/queries";

/* An individual soda. refetches the data once the amount of sodas goes down.
*/
const Soda = ({id, soda}) => {
  // useQuery property: previousData for when the soda price changes - it can change right back
  // helpful if that is the only change and the query is update price
  const { loading, error, data, refetch, networkStatus } = useQuery(GET_A_SODA, {
    variables: { id },
    notifyOnNetworkStatusChange: true,
  })
  // useLazyQuery here was an option (update on button click) but the apollo-client
  // version has to be before 3.5
  // to work or else an error is thrown about the fetchpolicy being set to standby
  // and setting the fetchpolicy here didn't make a difference to the error
  // manual refetch on button click is the equivalent of useLazyQuery for my
  // needs here

  // allow for rerending while refetch is in flight
  if (networkStatus === NetworkStatus.refetch) return <button>'Refetching!'</button>
  if (error) return <button>`Error: ${error}`</button>

 // can only run once the button has been rendered
 // alternatively (but not yet implemented) disable the button if maximumQuantityToVend is 0
  const Download = (soda) => {
    // console.log(`Vending ${soda.productName}`)
    if (soda.maximumQuantityToVend == 0) return

    const blob = new Blob([JSON.stringify(soda)], {type: 'application/json'})
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

      // there's probably a react hook for this test
      // i believe refetch updates the data this card is holding on to.
      // there was no difference between data retrieved from useQuery and
      // the data initially passed in from SodaCards

      // console.log("Before soda info: " + soda.maximumQuantityToVend);
      // console.log("Before data info: " + data?.getSoda?.soda.maximumQuantityToVend);
      soda.maximumQuantityToVend += -1;
      // data?.getSoda?.soda.maximumQuantityToVend += -1;
      // console.log("After soda: " + soda.maximumQuantityToVend);
      // console.log("After data: " + data?.getSoda?.soda.maximumQuantityToVend);

      //get updated data - if values (properties) aren't provided on
      // what to refetch, it will use the omitted variables original values
      // same as refetch ({id})
      refetch(); //component won't rerender until new data arrives


      // console.log("After refetch soda: " + soda.maximumQuantityToVend);
      // console.log("After refetch data: " + data?.getSoda?.soda.maximumQuantityToVend);
    }

    return (
        <button onClick={() => Download(soda)}>{soda.productName}</button>
    )
}

export default Soda;
