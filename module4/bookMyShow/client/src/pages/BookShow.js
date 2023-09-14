import { message } from "antd";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { GetShowById } from "../apicalls/theatres";
import moment from "moment"


export default function BookShow(){
   const [selectedSeats, setSelectedSeats] = useState([]);
    let [show,setShow] = useState();
    const params = useParams();
    const getData = async()=>{
        try{
            const response = await GetShowById({showId:params.id})
            if(response.success){
                setShow(response.data);
            }else{
                message.error(response.message)
            }
        }catch(err){
            message.error(err.message)
        }
    }

    const getSeats = () => {
      const columns = 12;
      const totalSeats = show.totalSeats; // 120
      const rows = Math.ceil(totalSeats / columns); // 10
      
      return (
          <div>
              <p className="m-4">Screen This Side</p>
              <hr/>
        <div className="flex gap-1 flex-col p-2 card">
          <hr/>
          
          {Array.from(Array(rows).keys()).map((seat, index) => {
            return (
              <div className="flex gap-1 justify-center">
                    {/* 0,  1 ,2, ,3, ..        11 
               0 [ [ 0, 1, 2, 3, 4, 5,6,7.. ,11],
               1   [0,  1, 2, 3, ..        ,11],
               2  .
                  .
               9   [0,1,2           , .... 11]
                ] */}
                {Array.from(Array(columns).keys()).map((column, index) => {
                  const seatNumber = seat * columns + column + 1;
                  // 12*1 + 3+ 1 = 16
                  let seatClass = "seat";
                  // seat = 0 // coloumns = 12
                  //0 + 1 + 1 = 2
                  if (selectedSeats.includes(seat * columns + column + 1)) {
                    seatClass = seatClass + " selected-seat";
                  }
                  if (show.bookedSeats.includes(seat * columns + column + 1)) {
                    seatClass = seatClass + " booked-seat";
                  }
                  return (
                    seat * columns + column + 1 <= totalSeats && (
                      <div
                        className={seatClass}
                        onClick={() => {
                          if (selectedSeats.includes(seatNumber)) {
                            setSelectedSeats(
                              selectedSeats.filter((item) => item !== seatNumber)
                            );
                          } else {
                            setSelectedSeats([...selectedSeats, seatNumber]);
                          }
                        }}
                      >
                        <h1 className="text-sm">{seat * columns + column + 1}</h1>
                      </div>
                    )
                  );
                })}
              </div>
            );
          })}
        </div>
        </div>
      );
    };

    useEffect(()=>{
        getData();
    },[])

    return (
      show && (
        <div>
          {/* show infomation */}
  
          <div className="flex justify-between card p-2 items-center">
            <div>
              <h1 className="text-sm">{show.theatre.name}</h1>
              <h1 className="text-sm">{show.theatre.address}</h1>
            </div>
  
            <div>
              <h1 className="text-2xl uppercase">
                {show.movie.title} ({show.movie.language})
              </h1>
            </div>
  
            <div>
              <h1 className="text-sm">
                {moment(show.date).format("MMM Do yyyy")} -{" "}
                {moment(show.time, "HH:mm").format("hh:mm A")}
              </h1>
            </div>
          </div>
  
          {/* seats */}
  
          <div className="flex justify-center mt-2">{getSeats()}</div>
  
          {selectedSeats.length > 0 && (
            <div className="mt-2 flex justify-center gap-2 items-center flex-col">
              <div className="flex justify-center">
                <div className="flex uppercase card p-2 gap-3">
                  <h1 className="text-sm"><b>Selected Seats</b> : {selectedSeats.join(" , ")}</h1>
  
                  <h1 className="text-sm">
                    <b>Total Price</b> : {selectedSeats.length * show.ticketPrice}
                  </h1>
                </div>
              </div>
              {/* <StripeCheckout
                token={onToken}
                amount={selectedSeats.length * show.ticketPrice * 100}
                billingAddress
                stripeKey="pk_test_51JKPQWSJULHQ0FL7VOkMrOMFh0AHMoCFit29EgNlVRSvFkDxSoIuY771mqGczvd6bdTHU1EkhJpojOflzoIFGmj300Uj4ALqXa"
              >
                <Button title="Book Now" />
              </StripeCheckout> */}
            </div>
          )}
        </div>
      )
    );
  }