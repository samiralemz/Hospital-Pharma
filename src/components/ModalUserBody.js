import {
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@windmill/react-ui";
import React from "react";
import { useParams } from "react-router-dom";
import { dateToPtBr, pageModal } from "../helpers/Functions";

function ModalUserBody({ closeModal, modalValue = {}, userKey }) {
  const { paginate } = useParams();
  return (
    <div className="flex-col items-center" key={userKey}>
      <ModalHeader className="justify-center flex mb-8">
        {modalValue?.name?.first} {modalValue?.name?.last}
      </ModalHeader>

      <ModalBody className="flex">
        <img
          className="bg-gray-400 w-48 h-48 mr-8 rounded-full flex"
          src={modalValue?.picture?.large}
        />
        <div className=" flex-col">
          <div>
            <span>Email: {modalValue?.email}</span>
          </div>
          <div>
            <span>Gênero: {modalValue?.gender}</span>
          </div>
          <div>
            <span>
              Data de nascimento:
              {dateToPtBr(modalValue?.dob?.date.substr(0, 10))}
            </span>
          </div>
          <div>
            <span>Telefone: {modalValue?.phone}</span>
          </div>
          <div>
            <span>Nacionalidade: {modalValue?.nat}</span>
          </div>
          <div>
            <span>
              Endereço: Rua {modalValue?.location?.street?.name} -
              {modalValue?.location?.city}
            </span>
          </div>
          <div>
            <span>ID:{((50*(paginate-1))+Number(userKey))}</span>
          </div>
          <div>
            <span>
              URL para compartilhamento:{" "}
              {`localhost:3000/user=${
                modalValue?.login?.username
              }/id=${((50*(paginate-1))+Number(userKey))}/page=${pageModal(userKey)}/`}
            </span>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          className="w-full sm:w-auto"
          layout="outline"
          onClick={closeModal}
        >
          Cancelar
        </Button>
      </ModalFooter>
    </div>
  );
}

export default ModalUserBody;
