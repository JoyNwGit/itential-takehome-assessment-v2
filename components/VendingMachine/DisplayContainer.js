import { useQuery } from "@apollo/react-hooks";
import {GET_ALL_SODAS} from "../../public/queries";
import SodaCards from "./SodaCards"
import DialogBox from "./DialogBox"

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
