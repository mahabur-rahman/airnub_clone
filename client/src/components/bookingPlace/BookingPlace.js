import { useState } from "react";
import { differenceInCalendarDays } from "date-fns";

const BookingPlace = ({ place }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState();
  const [numberOfGuests, setNumberOfGuests] = useState("");

  let numberOfNights = 0;

  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  return (
    <>
      <p>Price: ${place.price}/ per night</p>
      <div>
        <label>CheckIn </label>
        <input
          type="date"
          className="form-control"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
        <br />
        <br />
        <label>CheckOut </label>
        <input
          type="date"
          className="form-control"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
        <br />
        <br />

        <label>Number of guests </label>
        <input
          type="number"
          className="form-control"
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(e.target.value)}
        />
        <br />
        <br />

        <h4>Extra Info: </h4>
        <p>{place.extraInfo}</p>

        <br />
        <br />

        <button className="btn btn-primary">
          Book this place{" "}
          {numberOfNights > 0 && <span> $ {numberOfNights * place.price}</span>}
        </button>

        <br />
        <br />
      </div>
    </>
  );
};

export default BookingPlace;
