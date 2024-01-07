import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App1() {
  const notify = () => toast.success("login successful");

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App1;
