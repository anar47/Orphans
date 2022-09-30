import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import {quiz_Set} from "../data";
import {useState} from "react";

function Quiz() {
  const [data, setData] = useState({
    activeStep: 0,
    quiz_Set: quiz_Set,
    booleanonsubmit: false,
    Total: 0,
    open: false,
    catchmsg: "",
    errormsg: "",
  });

  const handleNext = () => {
    setData({...data, activeStep: data.activeStep + 1});
  };
  const handleBack = () => {
    setData({...data, activeStep: data.activeStep - 1});
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setData({...data, open: false});
  };

  const onInputChange = (e) => {
    const {quiz_Set} = data;

    const nexState = quiz_Set.map((card) => {
      if (card.queno !== e.target.name) return card;
      return {
        ...card,
        options: card.options.map((opt) => {
          const checked = opt.que_options === e.target.value;
          return {
            ...opt,
            selected: checked,
          };
        }),
      };
    });
    setData({...data, quiz_Set: nexState});
  };

  const onsubmit = () => {
    let list = data.quiz_Set;
    let count = 0;
    let notattempcount = 0;

    list.map((item, key) => {
      item.options.map((anslist, key) => {
        if (anslist.selected === true) {
          if (anslist.que_options === item.ans) {
            count = count + 1;
          }
        } else {
          notattempcount = notattempcount + 1;
        }
      });
    });
    if (notattempcount <= 24 && notattempcount > 16) {
      setData({...data, booleanonsubmit: false, Total: count});
      setData({
        ...data,
        catchmsg: "Please attempt all questions",
        errormsg: "error",
        open: true,
      });
    } else {
      setData({...data, booleanonsubmit: true, Total: count});
    }
  };

  const snackbarrender = () => {
    return data.open ? (
      <Snackbar
        open={data.open}
        autoHideDuration={5000}
        onClose={handleClose}
        style={{marginTop: "10px", width: "100%"}}>
        <div
          onClose={handleClose}
          severity={data.errormsg}
          className="text-xl px-8 py-4 rounded-lg bg-red-400 text-white">
          {data.catchmsg}
        </div>
      </Snackbar>
    ) : null;
  };

  return (
    <div className="bg-red-100 h-96 mt-24 p-8 rounded-lg">
      {snackbarrender()}
      <div>
        {data.booleanonsubmit ? (
          <div className="flex justify-center h-full">
            <div className="  text-center  h-full ">
              <h2 className="text-3xl text-center py-8 ">
                {" "}
                The score is {data.Total} Out Of {data.quiz_Set.length}{" "}
              </h2>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setData({
                    ...data,
                    booleanonsubmit: false,
                    activeStep: 0,
                    quiz_Set: quiz_Set,
                    Total: 0,
                  });
                }}>
                {" "}
                Try again{" "}
              </Button>
            </div>
          </div>
        ) : (
          <div>
            {data.quiz_Set.map((item, index) => {
              if (Math.abs(data.activeStep - index) <= 0) {
                return (
                  <div>
                    <div className="Quiz_que">{item.que}</div>

                    <div className="Quiz_options"> Options are : </div>
                    {item.options.map((ans, index_ans) => {
                      index_ans = index_ans + 1;
                      return (
                        <div key={index_ans} className="Quiz_multiple_options">
                          {index_ans} {ans.que_options}
                          <input
                            key={index_ans}
                            type="radio"
                            name={item.queno}
                            value={ans.que_options}
                            checked={!!ans.selected}
                            onChange={onInputChange}
                            className=""
                          />
                        </div>
                      );
                    })}
                  </div>
                );
              } else {
                return null;
              }
            })}

            <div className="bg-green-700 mt-16">
              <MobileStepper
                variant="dots"
                steps={data.quiz_Set.length}
                position="static"
                activeStep={data.activeStep}
                nextButton={
                  data.activeStep === data.quiz_Set.length - 1 ? (
                    <Button size="small" onClick={onsubmit}>
                      Submit
                    </Button>
                  ) : (
                    <Button
                      size="small"
                      onClick={handleNext}
                      disabled={data.activeStep === data.quiz_Set.length - 1}>
                      Next
                    </Button>
                  )
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={data.activeStep === 0}>
                    Back
                  </Button>
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
