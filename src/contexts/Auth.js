import React, { useEffect, useState } from "react";
import { randomApi } from "../services/randomUser";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [dataValue, setDataValue] = useState([]);
  const [page, setPage] = useState();
  const [seed, setSeed] = useState("9326b11f2c317759");
  const [loaderContext, setLoaderContext] = useState(false);
  const arrayPage = [];
  const [pageSelected, setPageSelected] = useState(arrayPage);
  const [pageParametro, setPageParametro] = useState();

  const getData = async () => {
    if (page !== undefined && page !== "undefined") {
      try {
        setLoaderContext(true);
        const { data } = await randomApi.get(
          `?page=${page}&results=50&seed=${seed}`
        );
        setDataValue(data.results);
        setPageParametro(data.info.page);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setLoaderContext(false);
        }, 1000);
      }
    }
  };

  const SetStatePage = (value) => {
    if (value >= 0) {
      setPageSelected((pageSelected) => [...pageSelected, value]);
      setPage(value);
    }
  };

  useEffect(() => {
    if (pageSelected.includes(page)) {
      getData();
    }
  }, [page]);

  return (
    <AuthContext.Provider
      value={{ dataValue, SetStatePage, page, loaderContext, pageParametro }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
