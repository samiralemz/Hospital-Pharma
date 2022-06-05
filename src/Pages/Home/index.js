import {
  Avatar,
  Button,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow,
} from "@windmill/react-ui";
import { FaEye, FaHospitalSymbol } from "react-icons/fa";
import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthContext } from "../../contexts/Auth";
import { dateAniversario } from "../../helpers/Functions";
import Search from "../../components/search";
import ModalUserBody from "../../components/ModalUserBody";
import { useParams, useHistory } from "react-router-dom";
import SelectFilter from "../../components/SelectFilter";
import Loader from "../../components/Loader/";

const Home = () => {
  const { dataValue, SetStatePage, page, loaderContext } =
    useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const [dataTable, setDataTable] = useState([]);
  const [valueSelectGender, setValueSelectGender] = useState("todos");
  const [valueSearch, setValueSearch] = useState("");
  const [filterTable, setFilterTable] = useState([]);

  const history = useHistory();
  const { paginate, username, idUser } = useParams();


  function openModal(username, id) {
    history.push(`/user=${username}/id=${id+1}/page=${page}/`);
  }

  function closeModal() {
    setIsModalOpen(false);
    history.push(`/page=${page}/`);
  }

  const onchangeSelect = (event) => {
    const { value } = event.target;
    setValueSelectGender(value);
  };

  const onchangeSearch = (event) => {
    const { value } = event.target;
    setValueSearch(value);
  };

  const addPage = () => {
    history.push(`/page=${Number(paginate) + 1}/`);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight &&
      valueSearch === ""
    ) {
      addPage();
    }
  }

  useEffect(() => {
    setDataTable(dataTable.concat(dataValue));
  }, [dataValue]);


  useEffect(() => {
    SetStatePage(paginate);
  }, [paginate]);

  useEffect(() => {
    if (username !== undefined) {
      if (dataTable.length > 0) {
        setDataModal(
          dataTable
            .filter((item) => {
              return item?.login?.username === username;
            })
            .map((result) => result)[0]
        );
        setIsModalOpen(true);
      }
    } else {
      setIsModalOpen(false);
      history.push(`/page=${page}/`);
      setDataModal();
    }
  }, [username, dataTable]);

  useEffect(() => {
    setFilterTable(
      dataTable
        .filter((result) => {
          return valueSearch !== ""
            ? result.name.first
                .toLowerCase()
                .includes(valueSearch.toLowerCase())
            : result;
        })
        .filter((item) => {
          return valueSelectGender !== "todos"
            ? item?.gender === valueSelectGender
            : item;
        })
    );
  }, [dataTable, valueSearch, valueSelectGender]);
  return (
    <Loader isActive={loaderContext}>
      <div className="p-10 px-40 bg-gray-200">
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          className="w-auto p-8 rounded-lg bg-white"
        >
          <ModalUserBody
            closeModal={closeModal}
            modalValue={dataModal}
            userKey={(Number(idUser))}
          />
        </Modal>

        <div className="px-6 py-5 rounded-lg shadow-xl p-6 bg-white items-center">
          <div className="flex">
            <FaHospitalSymbol className="mt-5 mr-2 w-10 h-10 text-purple-500" />
            <h1 className="my-6 text-2xl font-semibold text-gray-700">
              Hospital
            </h1>
          </div>
          <div className="flex w-full justify-between">
            <div className=" w-10/12 flex">
              <Search onchange={onchangeSearch} />
            </div>
            <div className="w-2/12 relative">
              <SelectFilter onchange={onchangeSelect} />
            </div>
          </div>

          <h2 className="mb-4 text-lg font-semibold text-gray-600">
            Pacientes {dataTable.length}
          </h2>
          <TableContainer style={{ minHeight: "900px" }}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>Gênero</TableCell>
                  <TableCell>Aniversário</TableCell>
                  <TableCell>Ações</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filterTable.map((item, key) => {
                  return (
                    <TableRow key={key}>
                      <TableCell>
                        <div className="flex items-center text-sm">
                          <Avatar
                            src={item.picture.medium}
                            alt={item.name.title}
                          />
                          <span className="font-semibold ml-2">
                            {item.name.first}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">{item.gender}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">
                          {dateAniversario(item.dob?.date.substr(0, 10))}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-4">
                          <Button
                            layout="link"
                            size="icon"
                            onClick={() =>
                              openModal(item?.login?.username, key)
                            }
                          >
                            <FaEye className="w-5 h-5" aria-hidden="true" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </Loader>
  );
};

export default Home;
