"use client";
import * as React from "react";
import CenterPanel from "@/app/formedit2/centerPanel";
import LeftPanel from "@/app/formedit2/leftPanel";
import RightPanel from "@/app/formedit2/rightPanel";
import * as Fi from "react-icons/fi";
import NewFieldModal from "./newfieldModal";
import { DragDropContext } from "@hello-pangea/dnd";
import FormSubmitModal from "./formsubmitModal";
const { v4: uuidv4 } = require("uuid");
import Link from "next/link";
import ConfirmModal from "./confirmModal";
import TopModal from "../sharedControls/topModal";
import TopModal2 from "../sharedControls/topModal2";

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
  addField,
  setAddField,
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
        true && src.droppableId != "fieldSelectedList"
          ? fields[src.droppableId]
          : remove(fields[src.droppableId], src.index);
      const destItems =
        true && src.droppableId == "fieldSelectedList"
          ? fields[dest.droppableId]
          : appendAt(
              fields[dest.droppableId],
              dest.index,
              true
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
          <TopModal2
            bg={"bg-gradient-to-r from-indigo-400 to-indigo-100"}
            padding={"py-4 pl-4"}
            height={50}
            pageTranslate={pageTranslate}
            setVisible={setVisible}
            saveForm={saveForm}
            openForm={openForm}
          />

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
                  visibleModalNewField={visibleModalNewField}
                  setVisibleModalNewField={setVisibleModalNewField}
                  fields={fields}
                  setFields={setFields}
                  currentField={currentField}
                  setCurrentField={setCurrentField}
                  setIsDragging={setIsDragging}
                  isEdit={isEdit}
                  setIsEdit={setIsEdit}
                  setDataEdit={setDataEdit}
                  pageTranslate={pageTranslate}
                  headingForm={headingForm}
                  setHeadingForm={setHeadingForm}
                  addField={addField}
                  setAddField={setAddField}
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
      {/* <NewFieldModal
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
      /> */}
      {/* <FormSubmitModal
        fields={fields}
        visibleSubmitFormModal={visibleSubmitFormModal}
        setVisibleSubmitFormModal={setVisibleSubmitFormModal}
      /> */}
      <ConfirmModal
        pageTranslate={pageTranslate}
        visible={visibleConfirmModal}
        setVisible={setVisibleConfirmModal}
        message={pageTranslate.do_you_want_to_open_the_form}
        callback={openForm}
      />
    </div>
  );
}
