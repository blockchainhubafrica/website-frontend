import React, { useEffect, useRef, useState } from "react";
import Emitter from "services/emitter";
import styles from "./action-modal.module.css";

import {
  ModalCloseIcon,
  DangerIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from "assets/images";

import { motion } from "framer-motion";
import { ModalParentVariants } from "animations";

import { useModal } from "hooks";
import { useLockedBody } from "usehooks-ts";

interface IArgs {
  title: string;
  content: string;
  btnText?: string;
  type: "success" | "warning" | "info";
  onAction: Function;
}

const Icon = {
  success: <SuccessIcon />,
  warning: <WarningIcon />,
  info: <InfoIcon />,
};

export function ActionModal() {
  const [isOpen, setisOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [args, setargs] = useState<IArgs>({
    title: "Enjoying Beima?",
    content: "No actions made.",
    btnText: "",
    type: "success",
    onAction: () => {},
  });
  const closeModal = () => {
    setisOpen(false);
  };

  useEffect(() => {
    Emitter.on("OPEN_ACTION_MODAL", (args: IArgs) => {
      setargs(args);
      setisOpen(true);
    });
    Emitter.on("CLOSE_ACTION_MODAL", () => setisOpen(false));

    return () => {
      Emitter.off("OPEN_ACTION_MODAL", () => setisOpen(false));
      Emitter.off("CLOSE_ACTION_MODAL", () => setisOpen(false));
    };
  }, []);

  useModal(isOpen, modalRef, closeModal);
  const [locked, setLocked] = useLockedBody(false, "body");

  useEffect(() => {
    setLocked(isOpen);
  }, [isOpen]);
  
  return (
    <motion.div
      initial={{ opacity: 0, display: "none" }}
      animate={isOpen ? "enter" : "exit"}
      variants={ModalParentVariants}
      exit={{ opacity: 0, transition: { when: "afterChildren" } }}
      className={`${styles["container"]}`}
      onClick={closeModal}
    >
      <motion.div
        initial={{ y: "-100%" }}
        animate={isOpen ? { y: `100px` } : { y: "-100%" }}
        exit={{ y: "-100%" }}
        ref={modalRef}
        className={`${styles["modal-body"]}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-end">
            <motion.span
              className="cursor-pointer"
              whileHover={{ scale: 1.2 }}
              onClick={closeModal}
            >
              <ModalCloseIcon  />
            </motion.span>
          </div>
          <div className="pb-2 px-6">
            <div className="flex justify-center">{Icon[args.type]}</div>
            <p className="text-2xl font-semibold text-center pt-5 pb-4">
              {args.title}
            </p>
            <div className="pb-6">
              <p className="text-center text-gray-700">{args.content}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
