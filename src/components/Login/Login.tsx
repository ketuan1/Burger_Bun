import { Alert, Button, Container, Snackbar, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Navigator from "../Navigator/navigator";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import logo from "../../image/lg.png";
interface IProps {
  setInfoUser: (any: string) => void;
}
const Login = ({ setInfoUser }: IProps) => {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const [validate, setValidate] = useState({
    email: false,
    password: false,
  });
  const navigator = useNavigate();
  return (
    <div style={{ padding: "0px 24px 48px 24px" }}>
      {loading && <Loading />}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {msg}
        </Alert>
      </Snackbar>

      <Navigator />
      <Container>
        <div className="text-center mt-5">
          <img src={logo} alt="burger logo" width="100px" />
          <h2>Welcome to our store</h2>
        </div>
        <div style={{ marginTop: "80px", textAlign: "center" }}>
          <div>
            <TextField
              style={{ width: "50%" }}
              label="email"
              type="email"
              value={user.email}
              onChange={(event) => {
                setUser({ ...user, email: event.target.value });
              }}
              error={validate.email}
              helperText={validate.email ? "Vui lòng nhập thông tin" : " "}
            />
          </div>
          <div>
            <TextField
              style={{ width: "50%" }}
              label="password"
              type="password"
              value={user.password}
              onChange={(event) => {
                setUser({ ...user, password: event.target.value });
              }}
              error={validate.password}
              helperText={validate.password ? "Vui lòng nhập thông tin" : " "}
            />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button
            onClick={async () => {
              let email = false;
              let password = false;
              if (user.email === "") {
                email = true;
              }
              if (user.password === "") {
                password = true;
              }
              setValidate({ ...validate, email, password });
              if (user.email && user.password) {
                try {
                  let rs = await axios.post("/api/login", user);
                  setInfoUser(rs?.data?.data);
                  if (rs?.data?.data?.role?.toUpperCase() === "ADMIN") {
                    navigator("/admin/homes");
                  } else {
                    navigator("/");
                  }
                  sessionStorage.setItem(
                    "KEY_ACCOUNT",
                    JSON.stringify(rs?.data?.data)
                  );
                } catch (error: any) {
                  setMsg(error?.response?.data?.message || "Có lỗi xảy ra");
                  setOpen(true);
                } finally {
                  setLoading(false);
                }
              }
            }}
            variant="contained"
          >
            Login
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Login;
