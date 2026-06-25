const Section = ({ id, children, className = '' }) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 bg-gray-950 relative overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
