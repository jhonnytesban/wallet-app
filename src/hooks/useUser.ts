import { BaseSyntheticEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { register, logIn } from '../store/slice';

//TODO: Refactorizar funcion de registro y login

interface LoginUser {
  userName: string;
  password: string;
}

export const useUser = () => {
  const [formData, setFormData] = useState<LoginUser>({userName: '', password: ''});
  const [storageData, setStorageData] = useState<LoginUser[] | null>([])
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setStorageData(JSON.parse(localStorage.getItem('user')!))
  }, [])
  

  const handleLogin = (event: BaseSyntheticEvent): void => {
    event.preventDefault()
    if (formData.password.trim() === '' || formData.userName.trim() === '' ) return

    if (location.pathname === '/register') {
      
      if (!storageData) {
        localStorage.setItem('user', JSON.stringify([formData]))
        dispatch(register(formData.userName))
        navigate('/')
        return
      }

      const isUser = storageData.some((user) => user.userName === formData.userName);
      
      if (!isUser) {
        const newUser = [...storageData, formData];
        localStorage.setItem('user', JSON.stringify(newUser));
        dispatch(register(formData.userName));
        navigate('/');
        return
      }

      alert('Ese Nombre Ya Existe')
      setFormData({
        userName: '',
        password: ''
      })
    }

    if (location.pathname === '/login') {
      const isUser = storageData?.some((user) => user.userName === formData.userName && user.password === formData.password);

      if (isUser) {
        dispatch(logIn(formData.userName));
        navigate('/');
        return
      }

      alert('Usuario o Contraseña incorrecta')
      setFormData({
        userName: '',
        password: ''
      })
    }
  }

  const handleChange = (event: BaseSyntheticEvent) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  return {
    handleChange,
    handleLogin,
    formData
  }
}