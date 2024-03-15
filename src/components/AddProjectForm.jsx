import Button from "./Button";
import Input from "./Input";
import { useRef, useImperativeHandle, forwardRef, useState } from "react";
import { createPortal } from "react-dom";

const AddProjectForm = ({ handleCloseModal, onChange, onClick, data }, ref) => {
  const modalRef = useRef();

  useImperativeHandle(ref, () => ({
    open: () => modalRef.current.showModal(),
    close: () => modalRef.current.close(),
  }));

  return createPortal(
    <dialog
      className="w-2/5 backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
      ref={modalRef}
    >
        <form action="">

        </form>
      <div className="flex gap-2 justify-end pb-2">
        <Button onClick={handleCloseModal}>Cancel</Button>
        <Button onClick={onClick} style="secondary" type="text">
          Save
        </Button>
      </div>

      <Input
        id="title"
        onChange={onChange}
        label="title"
        type="text"
        value={data.title}
      />
      <Input
        id="description"
        onChange={onChange}
        label="Description"
        type="text"
        value={data.description}
        richText={true}
      />
      <Input
        id="date"
        value={data.date}
        onChange={onChange}
        label="Due Date"
        type="date"
      />
    </dialog>,
    document.getElementById("modal-root")
  );
};

export default forwardRef(AddProjectForm);
