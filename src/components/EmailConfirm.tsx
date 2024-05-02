import { useEffect } from "react";
import { redirect, useRouteError, useSearchParams, useNavigate } from "react-router-dom";
import { Paths } from "../paths";
import axios from "axios";
import { backendUrl } from "../config";



function EmailConfirm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token')
  
    if (token == null) {
      navigate(Paths.error)
    } else {
      axios.post(`${backendUrl}/emails/verify/`, {
        token: token,
      })
      .then((response) => {
        navigate(Paths.emailVerified)       
      })
      .catch((error) => {
      navigate(Paths.error)
      })
    }
  }, [])

  return (
    <>
    </>
  )
}

export default EmailConfirm
