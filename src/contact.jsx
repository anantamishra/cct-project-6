import React from "react";

export default function Contact() {
  return (
    <div>
      <Breadcrumb />
      <Form />
      <Address />
      <CTASection />
    </div>
  );
}

const Breadcrumb = () => {
  return <div>This is Breadcrumb internal component</div>;
};
export function Form() {
  return <div>This is internal component</div>;
}
export function Address() {
  return <div>This is internal component</div>;
}
export function CTASection() {
  return <div>This is internal component</div>;
}
