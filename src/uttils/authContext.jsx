/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const url = "http://localhost:4000";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUserOnLoad();
  }, []);

  const getUserOnLoad = async () => {
    try {
      const token = await getToken();
      const res = await axios.get(`${url}/user/`, {
        headers: { Authorization: "Bearer " + token },
      });
      if (res) {
        const userData = {
          email: res.data.email,
          name: res.data.name,
          _id: res.data._id,
          token: token,
          avatarUrl: res.data.avatarUrl,
        };
        !userData ? navigate("/user/login") : setUser(userData);
      }
      setLoading(false);
      navigate("/");

    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const getToken = async () => {
    return await Cookies.get("userToken");
  };

  const handleLogin = async (loginInfo) => {
    try {
      console.log("calling api", loginInfo);
      const apiRes = await axios.post(`${url}/user/login`, {
        email: loginInfo.email,
        password: loginInfo.password,
      });

      if (apiRes.data.token !== "" && apiRes.data.token) {
        Cookies.set("userToken", apiRes.data.token);
        const userData = {
          email: apiRes.data.email,
          name: apiRes.data.name,
          _id: apiRes.data._id,
          token: apiRes.data.token,
        };
        setUser(userData);
        navigate("/");
        return { err: false };
      }
      if (apiRes.status !== 200) {
        return { err: true, message: apiRes.data.message };
      }
      
    } catch (err) {
      console.log("error: ", err);
      return { err: true };
    }
  };
  const handleRegister = async (registerInfo) => {
    try {
      console.log("calling api");
      const res = await axios.post(`${url}/user/`, {
        name: registerInfo.name,
        email: registerInfo.email,
        password: registerInfo.password,
        
      });
      if (res.data) {
        console.log(res.data)
        setUser(res.data)
        navigate("/");
        return
      }
    }
    catch (err) {
      console.log("error: ", err);
      return { err: true };
    }
}
  const handleUserLogout = async (e) => {
    e.preventDefault();
    setUser(null);
    Cookies.remove("userToken");
    navigate("/login");
  };

  const getAllUsers = async () => {
    console.log("calling api");
    await axios.get(`${url}/user/all`).then((res) => {
      if (res.data.users.length !== 0) {
        setUsers(res.data.users);
      }
    });
  };

  const isEmailTaken = async (email) => {
    try {
      console.log("calling api");
      const res = await axios.post(`${url}/user/exist/email`, {
        email:email
      });
      if (res) {
        return res.data.isTaken;
      }
    } catch (err) {
      console.log(err);
    }
  }

  const isUsernameTaken = async (username) => {
    try {
      console.log("calling api");
      const res = await axios.post(`${url}/user/exist/username`, {
        name:username
      });
      if (res) {
        return res.data.isTaken;
      }
    } catch (err) {
      console.log(err);
    }
  }
  

  const contextData = useMemo(
    () => ({
      user,
      users,
      url,
      loading,
      handleLogin,
      handleRegister,
      handleUserLogout,
      getToken,
      getAllUsers,
      isUsernameTaken,
      isEmailTaken
    })
  );
  return (
    <AuthContext.Provider value={contextData}>
      {loading ? (
      <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
      ) : (
        children
      )}
      {/* <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
export default AuthContext;
