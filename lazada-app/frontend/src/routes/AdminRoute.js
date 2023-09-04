import {useState, useEffect} from "react";
import {useAuth} from "../../src/context/AuthContext";
import axios from "axios";
import Spinner from "../components/Spinner/Spinner";
import Dashboard from './../pages/DashboardPage/Dashboard';
import AdminDashboard from './../pages/Admin/AdminDashboard';

export default function AdminRoute() {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async() => {
            const res = await axios.get('/api/v1/auth/admin-auth');
            if (res.data.ok){
                setOk(true);
            } else {
                setOk(false);
            }
        }
        if (auth?.token) authCheck();
    }, [auth?.token]);

    return ok ? <AdminDashboard /> : <Spinner path=""/>
}
