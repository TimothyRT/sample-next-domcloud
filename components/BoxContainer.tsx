import { ReactNode } from "react";
import './BoxContainer.css';

interface BoxContainerProps {
  children?: ReactNode
}

export function HBoxContainer({children}: BoxContainerProps) {
  return (
    <section className="box-container hbox-container">
      {children}
    </section>
  );
}

export function VBoxContainer({children}: BoxContainerProps) {
  return (
    <section className="box-container vbox-container">
      {children}
    </section>
  );
}