import { useQuery } from "@apollo/react-hooks";
import {GET_ALL_SODAS} from "../../public/queries";
import SodaCards from "./SodaCards"
import DialogBox from "./DialogBox"

/**
* Overall meant to be a container for all the soda cards + a dialog box to show
* the status of all the sodas at once.
  Loads all the sodas and passes the data onto the children
*/
const DisplayContainer = () => {
  const { loading, error, data } = useQuery(GET_ALL_SODAS)


    return (
      <div className="Display_Container">
        <DialogBox loading={loading} error={error} data={data}/>
        <SodaCards data={data}/>
      </div>
    )
}

export default DisplayContainer;
