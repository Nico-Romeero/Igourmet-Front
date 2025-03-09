import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Order from "./Order";
import { useSelector } from "react-redux";
import axios from "axios";

function UserOrders() {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (!user.token) navigate("/login");
    const fetchUserOrders = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/orders`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setOrders(response.data);
    };
    fetchUserOrders();
  }, []);

  const userOrders = orders.filter((order) => order.userId === user.userId);
/*hola*/
  return (
    <>
      <div className="profile-bg min-vh-100">
        <div className="mt-5 pt-4 container">
          <div className="mb-2 text-center">
            <h1 className="orders-title">Mis órdenes</h1>
            {userOrders.length > 0 ? (
              userOrders.map((order) => <Order key={order.id} order={order} />)
            ) : (
              <div className="col-12 empty-order d-flex justify-content-center">
                <div className="text-center data-card p-4 w-100 d-flex flex-column justify-content-center">
                  <h2 className="text-color mb-4">
                    Todavía no hiciste ninguna orden.
                  </h2>
                  <button className="rounded mx-auto px-3 py-2">
                    <Link
                      to="/comprar"
                      className="text-white text-decoration-none verdana py-3"
                    >
                      Ir a comprar
                    </Link>
                  </button>
                </div>
              </div>
            )}
          </div>
          <h6 className="data-card rounded btn border">
            <Link to="/usuario" className="btn p-0 text-color-units">
              <i className="bi bi-arrow-left"></i>
            </Link>
          </h6>
        </div>
      </div>
    </>
  );
}

export default UserOrders;
