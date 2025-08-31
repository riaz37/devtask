const Container = ({ children, className = '', maxWidth = 'max-w-6xl' }) => {
  return (
    <div className={`mx-auto px-8 ${maxWidth} ${className}`}>
      {children}
    </div>
  );
};

export default Container; 