"use client";
import * as React from "react";
import FieldItem from "./components/fieldItem";
import { Draggable } from "@hello-pangea/dnd";
import { StrictModeDroppable } from "./components/strictmode";
import TitleText from "../folders2/sharedControls/titleText";

export default function LeftPanel({
  type,
  setAddField,
  setVisibleModalNewField,
  fields,
  setFields,
  isDragging,
  isEdit,
  setDataEdit,
  setIsEdit,
  pageTranslate,
}) {
  const typeFormElements = ["heading", "divider", "file"];
  const appendAt = (list, index, data) => {
    const result = [...list];
    result.splice(index, 0, data);
    return result;
  };
  const remove = (list, index) => {
    const result = [...list];
    result.splice(index, 1);
    return result;
  };
  const addFieldForm = (id, index, field) => {
    //const isFormElement = ["heading", "divider", "file"].includes(field.type);
    var dataCopy = field;
    const srcItems = true
      ? fields[
          typeFormElements.indexOf(field.type) != -1 ? "formElements" : type
        ]
      : remove(
          fields[
            typeFormElements.indexOf(field.type) != -1 ? "formElements" : type
          ],
          index
        );
    const destItems = appendAt(
      fields["fieldSelectedList"],
      0,
      true
        ? { ...dataCopy, id: Math.random() + "" }
        : fields[
            typeFormElements.indexOf(field.type) != -1 ? "formElements" : type
          ][index]
    );
    const tempFields = { ...fields };
    tempFields[
      typeFormElements.indexOf(field.type) != -1 ? "formElements" : type
    ] = srcItems;
    tempFields["fieldSelectedList"] = destItems;
    setFields({ ...tempFields });
  };
  return (
    <div className="w-2/12 h-[calc(100vh-50px)] relative bg-gray-100">
      <div className={`p-0`}>
        <TitleText
          title={pageTranslate?.fields}
          padding={"px-4 py-2"}
          bg={"bg-gray-200"}
        />
        <div
          className={`${
            isDragging ? "border-dashed border-2 border-indigo-400 m-0" : ""
          }`}
        >
          <div className="p-2">
            <StrictModeDroppable droppableId={type}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <div
                    //className={`overflow-x-auto  min-h-[calc(10vh)] h-[350px] has-scrollbar`}
                    className={`overflow-x-auto  min-h-[calc(10vh)]`}
                  >
                    {fields["fields"].length > 0
                      ? fields["fields"].map((field, index) => {
                          if (field.isShow)
                            return (
                              <Draggable
                                key={field.id}
                                draggableId={field.id}
                                draggableProps={field}
                                index={index}
                              >
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <FieldItem
                                      field={field}
                                      key={Math.random()}
                                      id={field.id}
                                      index={index}
                                      addFieldForm={addFieldForm}
                                      pageTranslate={pageTranslate}
                                    />
                                    {/* <HoverDivWithIcon/> */}
                                  </div>
                                )}
                              </Draggable>
                            );
                        })
                      : !isDragging && (
                          <div className="flex-1 p-4 border-dashed border border-light-blue-500 mb-2 rounded-lg">
                            <h1 className="text-center text-gray-400 text-sm font-medium">
                              {pageTranslate.drop_fields_here_to_remove}
                            </h1>
                          </div>
                        )}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </StrictModeDroppable>
          </div>
        </div>
        {/* <div className="flex justify-between items-center my-4">
          <button
            className="text-sm font-medium text-blue-500"
            data-modal-target="extralarge-modal"
            data-modal-toggle="extralarge-modal"
            onClick={() => {
              setIsEdit(false);
              setDataEdit({ label: "", type: "text", typeName: "Text" });
              setVisibleModalNewField(true);
              setAddField(type);
            }}
          >
            {pageTranslate?.new_field}
          </button>
        </div> */}
        <div className="absolute bottom-0 w-full p-0 bg-gray-100">
          {/* <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-bold ">
              {pageTranslate?.form_elements}
            </div>
          </div> */}
          <TitleText
            title={pageTranslate?.form_elements}
            padding={"px-4 py-2"}
            bg={"bg-gray-200"}
          />
          <div className="p-2">
            <StrictModeDroppable droppableId={"formElements"}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <div className="map">
                    {fields["formElements"].map((element, index) => {
                      if (element.isShow)
                        return (
                          <Draggable
                            key={element.id}
                            draggableId={element.id}
                            draggableProps={element}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <FieldItem
                                  field={element}
                                  key={Math.random()}
                                  id={element.id}
                                  index={index}
                                  addFieldForm={addFieldForm}
                                  pageTranslate={pageTranslate}
                                />
                              </div>
                            )}
                          </Draggable>
                        );
                    })}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </StrictModeDroppable>
          </div>
        </div>
      </div>
    </div>
  );
}
