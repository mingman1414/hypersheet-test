"use client";
import * as React from "react";
import "./style.css";
import EditFormModal from "./modals/editformModal";
import { Translate } from "@/app/api/translate";
import ChooseLangComponent from "./chooseLangComponent";

export default function Folders2() {
  const [fields, setFields] = React.useState({
    fields: [
      {
        id: "item-1",
        placeholder: "Text",
        label: "Text",
        key: "text",
        type: "text",
        typeName: "Text",
        title: "",
        discription: "",
        value: "",
        isShow: true,
        required: false,
      },
      {
        id: "item-2",
        placeholder: "Number",
        label: "Number",
        key: "number",
        type: "number",
        typeName: "Number",
        title: "",
        discription: "",
        value: 0,
        isShow: true,
        required: false,
      },
      {
        id: "item-3",
        placeholder: "Date",
        label: "Date",
        key: "date_of_birth",
        type: "date",
        typeName: "Date",
        title: "",
        discription: "",
        value: null,
        isShow: true,
        required: false,
      },
      {
        id: "item-4",
        placeholder: "Checkbox",
        label: "Checkbox",
        key: "checkbox",
        type: "checkbox",
        typeName: "Checkbox",
        title: "",
        discription: "",
        value: null,
        isShow: true,
        required: false,
      },
      {
        id: "item-5",
        placeholder: "Radio",
        label: "Radio",
        key: "radio",
        type: "radio",
        typeName: "Radio",
        title: "",
        discription: "",
        value: null,
        isShow: true,
        required: false,
      },
      {
        id: "item-6",
        placeholder: "Dropdown",
        label: "Dropdown",
        key: "dropdown",
        type: "dropdown",
        typeName: "Dropdown",
        title: "",
        discription: "",
        value: null,
        isShow: true,
        required: false,
      },
      {
        id: "item-7",
        placeholder: "AutoNumber",
        label: "AutoNumber",
        key: "autoNumber",
        type: "autoNumber",
        typeName: "AutoNumber",
        title: "",
        discription: "",
        value: null,
        isShow: true,
        required: false,
      },
    ],
    fieldSelectedList: [],
    formElements: [
      {
        id: "item-11",
        placeholder: "Heading / Description",
        label: "Heading",
        key: "heading",
        type: "heading",
        typeName: "Heading",
        title: "Heading",
        discription: "",
        value: "",
        isShow: true,
        required: false,
      },
      {
        id: "item-12",
        placeholder: "Divider",
        label: "Divider",
        key: "divider",
        type: "divider",
        typeName: "Divider",
        title: "",
        discription: "",
        value: "",
        isShow: true,
        required: false,
      },
      {
        id: "item-13",
        placeholder: "File Upload",
        label: "File Upload",
        key: "file_upload",
        type: "file",
        typeName: "File",
        title: "",
        discription: "",
        value: "",
        isShow: true,
        required: false,
      },
    ],
  });
  const [addField, setAddField] = React.useState("fields");
  const [visible, setVisible] = React.useState(false);
  const [visibleModalNewField, setVisibleModalNewField] = React.useState(false);
  const [dataTranslate, setDataTranslate] = React.useState({});
  const [headingForm, setHeadingForm] = React.useState({
    id: "item-xx",
    placeholder: "_",
    label: "Form title",
    key: "_",
    type: "headingForm",
    title: "NEW FORM _",
    name: "NEW FORM",
    discription: "description",
    value: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedLanguage, setSelectedlanguage] = React.useState(null);
  async function getDataTranslate() {
    setIsLoading(true);
    const request = {
      source_lang: "en",
      target_lang: localStorage.getItem("prefered_local") || "en",
      click_here_to_open_form_editor: "Click here to open form editor !",
      back: "Back",
      new_survey: "New Survey",
      open_form: "Open Form",
      save_form: "Save Form",
      fields: "Fields",
      remove_all: "Remove All",
      add_all: "Add All",
      age: "Age",
      name: "Name",
      date_of_birth: "DateOfBirth",
      new_field: "New Field",
      form_elements: "Form Elements",
      heading: "Heading",
      divider: "Divider",
      file_upload: "File Upload",
      field: "Field",
      field_settings: "Field Settings",
      logic: "Logic",
      label: "Label",
      field_settings: "Field Settings",
      help_text: "Help Text",
      discription: "Discription",
      required: "Required",
      hidden: "Hidden",
      validation: "Validation",
      number_only: "Number Only",
      percentage: "Percentage",
      email: "Email",
      phone: "Phone",
      no_validation: "No Validation",
      display_as: "Display As",
      sigle_line_text_box: "Single-line text box",
      multi_line_text_box: "Multi-line text box",
      default_value: "Default Value",
      click_to_upload: "Click to upload",
      or_drag_and_drop: "or drag and drop",
      take_a_photo: "Take A Photo",
      get_file_from_your_device: "Get File From Your Device",
      drop_fields_here_to_remove: "Drop fields here to remove",
      drop_fields_here: "Drop fields here",
      primary_field: "Primary Field",
      submit: "Submit",
      edit_field: "Edit Field",
      field_name: "Field Name",
      field_type: "Field Type",
      add: "Add",
      edit: "Edit",
      exit: "Exit",
      enter_a_field_name: "Enter a field name",
      please_allow_the_camera_to_access_the_app: `Please "Allow" the camera to access the app!`,
      save_success: "Save Success!",
      form_title: "Form title",
      title: "Title",
      values: "Values",
      prefix: "Prefix",
      suffix: "Suffix",
      required: "Required",
      length: "Length",
      defaultValue: "Default Value",
      form_data_not_found: "Form data not found!",
      confirm: "Confirm",
      do_you_want_to_open_the_form: "Do you want to open the form?",
      yes: "Yes",
      no: "No",
      cancel: "Cancel",
    };
    const formDatab = new FormData();

    for (const key in request) {
      formDatab.append(key, request[key]);
    }
    const response = await Translate(formDatab);
    if (response.success) {
      setDataTranslate(response.data);
      setIsLoading(false);
    }
  }
  async function getDataTranslate_More(translateMore) {
    const request = {
      source_lang: "en",
      target_lang: localStorage.getItem("prefered_local") || "en",
      ...translateMore,
    };
    const formDatab = new FormData();

    for (const key in request) {
      formDatab.append(key, request[key]);
    }
    const response = await Translate(formDatab);
    if (response.success) {
      setDataTranslate({ ...dataTranslate, ...response.data });
    }
  }
  function fetchData() {
    setDataTranslate(getDataTranslate());
  }
  React.useEffect(() => {
    fetchData();
  }, [selectedLanguage]);
  return (
    <div className="h-screen border-red-500 border rounded-md border-solid">
      <ChooseLangComponent
        selectedLanguage={selectedLanguage}
        setSelectedlanguage={setSelectedlanguage}
      />
      <div
        className="relative w-full my-4 h-[50px]"
        onClick={() => setVisible(true)}
      >
        <h1 className="text-center text-3xl ">
          {dataTranslate.click_here_to_open_form_editor}
        </h1>
      </div>
      <svg
        className="inset-0 h-full w-full stroke-[#1118271a] h-[calc(100vh-250px)]"
        fill="none"
        onClick={() => setVisible(true)}
      >
        <defs>
          <pattern
            id="pattern-1526ac66-f54a-4681-8fb8-0859d412f251"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
          </pattern>
        </defs>
        <rect
          stroke="none"
          fill="url(#pattern-1526ac66-f54a-4681-8fb8-0859d412f251)"
          width="100%"
          height="100%"
        ></rect>
      </svg>
      {isLoading && (
        <div className="text-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 mr-2 text-gray-200 animate-spin fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <EditFormModal
        pageTranslate={dataTranslate}
        visible={visible}
        setVisible={setVisible}
        setVisibleModalNewField={setVisibleModalNewField}
        visibleModalNewField={visibleModalNewField}
        fields={fields}
        setFields={setFields}
        headingForm={headingForm}
        setHeadingForm={setHeadingForm}
        addField={addField}
        setAddField={setAddField}
      />
    </div>
  );
}
