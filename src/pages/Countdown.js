import React, { useEffect, useState } from "react";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { Link } from "react-router-dom";

const Countdown = ({ match, history }) => {
  let CountdownId = match.params.id;

  let [Countdown, setCountdown] = useState({ title: null, date: null });

  //let Countdown = Countdowns.find(Countdown => Countdown.id == CountdownId)

  useEffect(() => {
    getCountdown();
    // eslint-disable-next-line
  }, [CountdownId]);

  let getCountdown = async () => {
    if (CountdownId === "new") return;
    let response = await fetch(
      `http://127.0.0.1:8000/countdowns/${CountdownId}/`
    );
    let data = await response.json();
    setCountdown(data);
  };

  const createCountdown = async () => {
    await fetch(`http://127.0.0.1:8000/countdowns/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: Countdown.title,
        date: Countdown.date,
      }),
    });
  };

  const updateCountdown = async () => {
    await fetch(`http://127.0.0.1:8000/countdowns/${CountdownId}/`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...Countdown }),
    });
  };

  const deleteCountdown = async () => {
    await fetch(`http://127.0.0.1:8000/countdowns/${CountdownId}/`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    history.push("/");
  };

  let handleSubmit = () => {
    if (CountdownId !== "new" && !Countdown.title) {
      deleteCountdown();
    } else if (CountdownId !== "new") {
      updateCountdown();
    } else if (CountdownId === "new" && Countdown !== null) {
      createCountdown();
    }

    history.push("/");
  };

  return (
    <div className="countdown">
      <div className="countdown-header">
        <h3>
          <Link to={"/"}>
            <ArrowLeft onClick={handleSubmit} />
          </Link>
        </h3>
        {CountdownId !== "new" ? (
          <button onClick={deleteCountdown}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <div className="text-areas">
        <div className="text-area-1">
          <textarea
            onChange={(e) => {
              setCountdown({ ...Countdown, title: e.target.value });
            }}
            placeholder="Edit title"
            value={Countdown?.title || ""}
          ></textarea>
        </div>
        <div className="text-area-1">
          {" "}
          <textarea
            onChange={(e) => {
              setCountdown({ ...Countdown, date: e.target.value });
            }}
            placeholder="Edit date"
            value={Countdown?.date || ""}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
