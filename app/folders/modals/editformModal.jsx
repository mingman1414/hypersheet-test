"use client";
import * as React from "react";
import CenterPanel from "@/app/formedit/centerPanel";
import LeftPanel from "@/app/formedit/leftPanel";
import RightPanel from "@/app/formedit/rightPanel";
import * as Fi from "react-icons/fi";
import NewFieldModal from "./newfieldModal";
import { DragDropContext } from "@hello-pangea/dnd";
import FormSubmitModal from "./formsubmitModal";
const { v4: uuidv4 } = require("uuid");
import Link from "next/link";
import ConfirmModal from "./confirmModal";

export default function EditFormModal({
  pageTranslate,
  visible,
  setVisible,
  visibleModalNewField,
  setVisibleModalNewField,
  fields,
  setFields,
  headingForm,
  setHeadingForm,
}) {
  const [currentField, setCurrentField] = React.useState(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [visibleSubmitFormModal, setVisibleSubmitFormModal] =
    React.useState(false);
  const [visibleConfirmModal, setVisibleConfirmModal] = React.useState(false);
  const [dataEdit, setDataEdit] = React.useState({
    id: "",
  });
  const [addField, setAddField] = React.useState("fields");
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  const remove = (list, index) => {
    const result = [...list];
    result.splice(index, 1);
    return result;
  };
  const appendAt = (list, index, data) => {
    const result = [...list];
    result.splice(index, 0, data);
    return result;
  };
  function handleDragEnd(result) {
    setIsDragging(false);
    const src = result.source;
    const dest = result.destination;
    if (!dest) {
      return;
    }

    if (src.droppableId === dest.droppableId) {
      // --- SAME CONTAINER ---
      const items = reorder(
        [...fields[src.droppableId]],
        src.index,
        dest.index
      );
      const tempFeilds = { ...fields };
      tempFeilds[src.droppableId] = items;
      setFields({ ...tempFeilds });
      if (fields[src.droppableId][src.index].id === currentField?.id) {
        dataCopy = fields[src.droppableId][src.index];
        setCurrentField({
          ...dataCopy,
          index: dest.index,
        });
      }
    } else {
      // --- DIFFERENT CONTAINER ---
      const isFormElement = ["heading", "divider", "file"].includes(
        fields[src.droppableId][src.index].type
      );
      var dataCopy = fields[src.droppableId][src.index];
      const srcItems =
        isFormElement && src.droppableId != "fieldSelectedList"
          ? fields[src.droppableId]
          : remove(fields[src.droppableId], src.index);
      const destItems =
        isFormElement && src.droppableId == "fieldSelectedList"
          ? fields[dest.droppableId]
          : appendAt(
              fields[dest.droppableId],
              dest.index,
              isFormElement
                ? { ...dataCopy, id: Math.random() + "" }
                : fields[src.droppableId][src.index]
            );
      const tempFields = { ...fields };
      tempFields[src.droppableId] = srcItems;
      tempFields[dest.droppableId] = destItems;
      setFields({ ...tempFields });
    }
  }
  const saveForm = () => {
    const uuid = uuidv4();
    const newForm = {
      id: uuid,
      headingForm: headingForm,
      fields: fields["fieldSelectedList"],
    };
    localStorage.setItem("formItem", JSON.stringify(newForm));
    setVisibleConfirmModal(true);
  };
  const openForm = () => {
    //window.location.href = "../form";
    window.open("../form", "_blank");
  };
  return (
    <div
      id="extralarge-modal"
      tabIndex="-1"
      className={`fixed top-0 left-0 right-0 z-50 ${
        visible ? "" : "hidden"
      } w-full  overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full`}
    >
      <div className="relative w-full max-h-full">
        <div className="relative bg-white shadow">
          <div className="h-[50px] flex items-center justify-between px-5 py-2 border-b rounded-t ">
            <div>
              <button
                className="hover:bg-blue-100 hover:text-blue-500 flex items-center p-2 rounded-lg"
                onClick={() => setVisible(false)}
              >
                <Fi.FiArrowLeft className="w-5 h-5 " />
                <h1 className="pl-2 text-sm">{pageTranslate.back}</h1>
              </button>
            </div>
            <div className="px-2 font-bold">{pageTranslate.new_survey}</div>
            <div className="flex items-center">
              <Link
                href={"../form"}
                target="blank"
                className="py-1 px-2 text-blue-600 text-sm"
              >
                {pageTranslate.open_form}
              </Link>
              <button
                className="p-2 px-4 bg-blue-800 rounded-lg text-white text-sm"
                onClick={saveForm}
              >
                {pageTranslate.save_form}
              </button>
            </div>
          </div>

          <div className="">
            <div className="flex">
              <DragDropContext
                onDragEnd={handleDragEnd}
                onDragStart={(e) => {
                  if (e.source.droppableId == "fieldSelectedList") {
                    setIsDragging(true);
                  }
                }}
              >
                <LeftPanel
                  type={"fields"}
                  setAddField={setAddField}
                  setVisibleModalNewField={setVisibleModalNewField}
                  fields={fields}
                  setFields={setFields}
                  isDragging={isDragging}
                  setIsEdit={setIsEdit}
                  setDataEdit={setDataEdit}
                  pageTranslate={pageTranslate}
                />
                <CenterPanel
                  type={"fieldSelectedList"}
                  setAddField={setAddField}
                  setVisibleModalNewField={setVisibleModalNewField}
                  fields={fields}
                  setFields={setFields}
                  currentField={currentField}
                  setCurrentField={setCurrentField}
                  setIsDragging={setIsDragging}
                  setIsEdit={setIsEdit}
                  setDataEdit={setDataEdit}
                  pageTranslate={pageTranslate}
                  headingForm={headingForm}
                />
              </DragDropContext>
              {/* <RightPanel
                setVisibleModalNewField={setVisibleModalNewField}
                currentField={currentField}
                setCurrentField={setCurrentField}
                setIsEdit={setIsEdit}
                setDataEdit={setDataEdit}
                pageTranslate={pageTranslate}
                headingForm={headingForm}
                setHeadingForm={setHeadingForm}
                fields={fields}
                setFields={setFields}
              /> */}
            </div>
          </div>
        </div>
      </div>
      <NewFieldModal
        addField={addField}
        visibleModalNewField={visibleModalNewField}
        setVisibleModalNewField={setVisibleModalNewField}
        fields={fields}
        setFields={setFields}
        data={dataEdit}
        setDataEdit={setDataEdit}
        isEdit={isEdit}
        pageTranslate={pageTranslate}
        setCurrentField={setCurrentField}
      />
      <FormSubmitModal
        fields={fields}
        visibleSubmitFormModal={visibleSubmitFormModal}
        setVisibleSubmitFormModal={setVisibleSubmitFormModal}
      />
      <ConfirmModal
        visible={visibleConfirmModal}
        setVisible={setVisibleConfirmModal}
        message={"Do you want to open the form?"}
        callback={openForm}
      />
    </div>
  );
}
